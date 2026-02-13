
-- 1. Role enum & user_roles table
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL DEFAULT 'user',
  UNIQUE (user_id, role)
);
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Security definer function to check roles
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

-- user_roles policies
CREATE POLICY "Users can view own roles" ON public.user_roles
  FOR SELECT TO authenticated USING (user_id = auth.uid());

CREATE POLICY "Admins can manage roles" ON public.user_roles
  FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin'));

-- 2. Profiles table
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT,
  email TEXT,
  phone TEXT,
  avatar_url TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own profile" ON public.profiles
  FOR SELECT TO authenticated USING (id = auth.uid());

CREATE POLICY "Users can update own profile" ON public.profiles
  FOR UPDATE TO authenticated USING (id = auth.uid());

-- Auto-create profile + default role on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, email)
  VALUES (NEW.id, COALESCE(NEW.raw_user_meta_data->>'full_name', ''), NEW.email);
  
  INSERT INTO public.user_roles (user_id, role) VALUES (NEW.id, 'user');
  RETURN NEW;
END;
$$;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Updated_at trigger
CREATE OR REPLACE FUNCTION public.update_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at();

-- 3. Parking areas
CREATE TABLE public.parking_areas (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  city TEXT NOT NULL,
  area TEXT NOT NULL,
  address TEXT NOT NULL,
  price_per_hour NUMERIC NOT NULL DEFAULT 0,
  total_slots INTEGER NOT NULL DEFAULT 0,
  available_slots INTEGER NOT NULL DEFAULT 0,
  rating NUMERIC DEFAULT 0,
  lat DOUBLE PRECISION,
  lng DOUBLE PRECISION,
  amenities TEXT[] DEFAULT '{}',
  vehicle_types TEXT[] DEFAULT '{}',
  image TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.parking_areas ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view parking areas" ON public.parking_areas
  FOR SELECT USING (true);

CREATE POLICY "Admins can insert parking areas" ON public.parking_areas
  FOR INSERT TO authenticated WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update parking areas" ON public.parking_areas
  FOR UPDATE TO authenticated USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete parking areas" ON public.parking_areas
  FOR DELETE TO authenticated USING (public.has_role(auth.uid(), 'admin'));

-- 4. Parking slots
CREATE TABLE public.parking_slots (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  parking_area_id UUID REFERENCES public.parking_areas(id) ON DELETE CASCADE NOT NULL,
  slot_number TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'available' CHECK (status IN ('available', 'booked')),
  vehicle_type TEXT NOT NULL DEFAULT 'car' CHECK (vehicle_type IN ('car', 'bike', 'suv')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.parking_slots ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view parking slots" ON public.parking_slots
  FOR SELECT USING (true);

CREATE POLICY "Admins can insert slots" ON public.parking_slots
  FOR INSERT TO authenticated WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update slots" ON public.parking_slots
  FOR UPDATE TO authenticated USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete slots" ON public.parking_slots
  FOR DELETE TO authenticated USING (public.has_role(auth.uid(), 'admin'));

-- 5. Bookings
CREATE TABLE public.bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  parking_area_id UUID REFERENCES public.parking_areas(id) NOT NULL,
  slot_id UUID REFERENCES public.parking_slots(id) NOT NULL,
  slot_number TEXT NOT NULL,
  parking_name TEXT NOT NULL,
  city TEXT NOT NULL,
  date DATE NOT NULL,
  start_time TEXT NOT NULL,
  hours INTEGER NOT NULL DEFAULT 1,
  total_price NUMERIC NOT NULL DEFAULT 0,
  gst NUMERIC NOT NULL DEFAULT 0,
  vehicle_type TEXT NOT NULL DEFAULT 'car',
  payment_status TEXT NOT NULL DEFAULT 'pending' CHECK (payment_status IN ('paid', 'pending', 'cancelled')),
  qr_code TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own bookings" ON public.bookings
  FOR SELECT TO authenticated USING (user_id = auth.uid());

CREATE POLICY "Users can create own bookings" ON public.bookings
  FOR INSERT TO authenticated WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can cancel own bookings" ON public.bookings
  FOR UPDATE TO authenticated USING (user_id = auth.uid());

CREATE POLICY "Admins can view all bookings" ON public.bookings
  FOR SELECT TO authenticated USING (public.has_role(auth.uid(), 'admin'));

-- Seed parking areas data
INSERT INTO public.parking_areas (name, city, area, address, price_per_hour, total_slots, available_slots, rating, lat, lng, amenities, vehicle_types, image) VALUES
  ('Phoenix Mall Parking', 'Chennai', 'Velachery', '142, Velachery Main Road, Velachery, Chennai - 600042', 40, 120, 34, 4.5, 12.9816, 80.2185, ARRAY['CCTV','EV Charging','Covered','24/7'], ARRAY['Car','Bike','SUV'], 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=600'),
  ('Express Avenue Parking', 'Chennai', 'Royapettah', 'Express Avenue Mall, Whites Road, Royapettah, Chennai - 600014', 50, 200, 67, 4.2, 13.0604, 80.2634, ARRAY['CCTV','Covered','Valet','24/7'], ARRAY['Car','Bike','SUV'], 'https://images.unsplash.com/photo-1573348722427-f1d6819fdf98?w=600'),
  ('Orion Mall Parking', 'Bangalore', 'Rajajinagar', 'Brigade Gateway, Dr. Rajkumar Road, Rajajinagar, Bangalore - 560055', 60, 180, 45, 4.7, 13.0107, 77.5556, ARRAY['CCTV','EV Charging','Covered','Valet','24/7'], ARRAY['Car','Bike','SUV'], 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=600'),
  ('Bandra Station Parking', 'Mumbai', 'Bandra', 'Bandra West, Near Station, Mumbai - 400050', 80, 80, 12, 3.8, 19.0544, 72.8402, ARRAY['CCTV','24/7'], ARRAY['Car','Bike'], 'https://images.unsplash.com/photo-1470224114660-3f6686c562eb?w=600'),
  ('Connaught Place Parking', 'Delhi', 'CP', 'Block A, Connaught Place, New Delhi - 110001', 70, 150, 28, 4.0, 28.6315, 77.2167, ARRAY['CCTV','Covered','24/7'], ARRAY['Car','Bike','SUV'], 'https://images.unsplash.com/photo-1567449303078-57ad995bd17f?w=600'),
  ('Hitech City Parking', 'Hyderabad', 'Hitech City', 'Cyber Towers, Hitech City, Hyderabad - 500081', 45, 100, 55, 4.3, 17.4435, 78.3772, ARRAY['CCTV','EV Charging','Covered'], ARRAY['Car','Bike','SUV'], 'https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=600');
