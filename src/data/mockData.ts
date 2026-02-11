export interface ParkingArea {
  id: string;
  name: string;
  city: string;
  area: string;
  address: string;
  pricePerHour: number;
  totalSlots: number;
  availableSlots: number;
  rating: number;
  lat: number;
  lng: number;
  amenities: string[];
  vehicleTypes: string[];
  image: string;
}

export interface ParkingSlot {
  id: string;
  slotNumber: string;
  status: "available" | "booked" | "selected";
  vehicleType: "car" | "bike" | "suv";
}

export interface Booking {
  id: string;
  parkingName: string;
  slotNumber: string;
  city: string;
  date: string;
  startTime: string;
  hours: number;
  totalPrice: number;
  gst: number;
  paymentStatus: "paid" | "pending" | "cancelled";
  vehicleType: string;
  qrCode: string;
}

export const cities = [
  { name: "Chennai", icon: "🏛️", count: 45 },
  { name: "Bangalore", icon: "💻", count: 62 },
  { name: "Mumbai", icon: "🌊", count: 78 },
  { name: "Delhi", icon: "🕌", count: 55 },
  { name: "Hyderabad", icon: "🍗", count: 38 },
  { name: "Kolkata", icon: "🌉", count: 29 },
];

export const parkingAreas: ParkingArea[] = [
  {
    id: "1", name: "Phoenix Mall Parking", city: "Chennai", area: "Velachery",
    address: "142, Velachery Main Road, Velachery, Chennai - 600042",
    pricePerHour: 40, totalSlots: 120, availableSlots: 34, rating: 4.5,
    lat: 12.9816, lng: 80.2185,
    amenities: ["CCTV", "EV Charging", "Covered", "24/7"],
    vehicleTypes: ["Car", "Bike", "SUV"],
    image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=600"
  },
  {
    id: "2", name: "Express Avenue Parking", city: "Chennai", area: "Royapettah",
    address: "Express Avenue Mall, Whites Road, Royapettah, Chennai - 600014",
    pricePerHour: 50, totalSlots: 200, availableSlots: 67, rating: 4.2,
    lat: 13.0604, lng: 80.2634,
    amenities: ["CCTV", "Covered", "Valet", "24/7"],
    vehicleTypes: ["Car", "Bike", "SUV"],
    image: "https://images.unsplash.com/photo-1573348722427-f1d6819fdf98?w=600"
  },
  {
    id: "3", name: "Orion Mall Parking", city: "Bangalore", area: "Rajajinagar",
    address: "Brigade Gateway, Dr. Rajkumar Road, Rajajinagar, Bangalore - 560055",
    pricePerHour: 60, totalSlots: 180, availableSlots: 45, rating: 4.7,
    lat: 13.0107, lng: 77.5556,
    amenities: ["CCTV", "EV Charging", "Covered", "Valet", "24/7"],
    vehicleTypes: ["Car", "Bike", "SUV"],
    image: "https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=600"
  },
  {
    id: "4", name: "Bandra Station Parking", city: "Mumbai", area: "Bandra",
    address: "Bandra West, Near Station, Mumbai - 400050",
    pricePerHour: 80, totalSlots: 80, availableSlots: 12, rating: 3.8,
    lat: 19.0544, lng: 72.8402,
    amenities: ["CCTV", "24/7"],
    vehicleTypes: ["Car", "Bike"],
    image: "https://images.unsplash.com/photo-1470224114660-3f6686c562eb?w=600"
  },
  {
    id: "5", name: "Connaught Place Parking", city: "Delhi", area: "CP",
    address: "Block A, Connaught Place, New Delhi - 110001",
    pricePerHour: 70, totalSlots: 150, availableSlots: 28, rating: 4.0,
    lat: 28.6315, lng: 77.2167,
    amenities: ["CCTV", "Covered", "24/7"],
    vehicleTypes: ["Car", "Bike", "SUV"],
    image: "https://images.unsplash.com/photo-1567449303078-57ad995bd17f?w=600"
  },
  {
    id: "6", name: "Hitech City Parking", city: "Hyderabad", area: "Hitech City",
    address: "Cyber Towers, Hitech City, Hyderabad - 500081",
    pricePerHour: 45, totalSlots: 100, availableSlots: 55, rating: 4.3,
    lat: 17.4435, lng: 78.3772,
    amenities: ["CCTV", "EV Charging", "Covered"],
    vehicleTypes: ["Car", "Bike", "SUV"],
    image: "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=600"
  },
];

export const generateSlots = (total: number, available: number): ParkingSlot[] => {
  const rows = ["A", "B", "C", "D", "E", "F"];
  const slots: ParkingSlot[] = [];
  let bookedCount = 0;
  const bookedTarget = total - available;

  for (let i = 0; i < Math.min(total, 30); i++) {
    const row = rows[Math.floor(i / 5)];
    const col = (i % 5) + 1;
    const isBooked = bookedCount < bookedTarget && Math.random() > 0.4;
    if (isBooked) bookedCount++;
    slots.push({
      id: `slot-${i}`,
      slotNumber: `${row}${col}`,
      status: isBooked ? "booked" : "available",
      vehicleType: Math.random() > 0.3 ? "car" : Math.random() > 0.5 ? "suv" : "bike",
    });
  }
  return slots;
};

export const mockBookings: Booking[] = [
  {
    id: "BK001", parkingName: "Phoenix Mall Parking", slotNumber: "A3",
    city: "Chennai", date: "2026-02-10", startTime: "10:00 AM",
    hours: 3, totalPrice: 142, gst: 22, paymentStatus: "paid",
    vehicleType: "Car", qrCode: "BK001-A3-PHOENIX"
  },
  {
    id: "BK002", parkingName: "Orion Mall Parking", slotNumber: "B2",
    city: "Bangalore", date: "2026-02-09", startTime: "2:00 PM",
    hours: 2, totalPrice: 142, gst: 22, paymentStatus: "paid",
    vehicleType: "SUV", qrCode: "BK002-B2-ORION"
  },
  {
    id: "BK003", parkingName: "Connaught Place Parking", slotNumber: "C1",
    city: "Delhi", date: "2026-02-08", startTime: "9:00 AM",
    hours: 1, totalPrice: 83, gst: 13, paymentStatus: "cancelled",
    vehicleType: "Car", qrCode: "BK003-C1-CP"
  },
];

// Admin stats
export const adminStats = {
  totalBookings: 1247,
  totalRevenue: 487650,
  activeUsers: 892,
  parkingAreas: 24,
  monthlyRevenue: [
    { month: "Aug", revenue: 38000 },
    { month: "Sep", revenue: 42000 },
    { month: "Oct", revenue: 55000 },
    { month: "Nov", revenue: 48000 },
    { month: "Dec", revenue: 62000 },
    { month: "Jan", revenue: 71000 },
    { month: "Feb", revenue: 58000 },
  ],
  cityWise: [
    { city: "Mumbai", bookings: 320 },
    { city: "Bangalore", bookings: 280 },
    { city: "Chennai", bookings: 210 },
    { city: "Delhi", bookings: 195 },
    { city: "Hyderabad", bookings: 142 },
    { city: "Kolkata", bookings: 100 },
  ],
};
