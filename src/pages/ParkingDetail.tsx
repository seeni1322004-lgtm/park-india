import { useState, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MapPin, Star, Clock, Shield, Car, CreditCard, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SlotGrid from "@/components/SlotGrid";
import { parkingAreas, generateSlots } from "@/data/mockData";
import { toast } from "sonner";

const ParkingDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const parking = parkingAreas.find((p) => p.id === id);

  const slots = useMemo(() => {
    if (!parking) return [];
    return generateSlots(parking.totalSlots, parking.availableSlots);
  }, [parking]);

  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [hours, setHours] = useState(1);
  const [vehicleType, setVehicleType] = useState("car");

  if (!parking) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="flex items-center justify-center py-32">
          <p className="text-muted-foreground">Parking area not found</p>
        </div>
      </div>
    );
  }

  const basePrice = parking.pricePerHour * hours;
  const gst = Math.round(basePrice * 0.18);
  const totalPrice = basePrice + gst;
  const selectedSlotData = slots.find((s) => s.id === selectedSlot);

  const handleBooking = () => {
    if (!selectedSlot) {
      toast.error("Please select a parking slot");
      return;
    }
    navigate("/booking-confirm", {
      state: {
        parking,
        slot: selectedSlotData,
        hours,
        vehicleType,
        basePrice,
        gst,
        totalPrice,
      },
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left - Details & Slots */}
          <div className="lg:col-span-2">
            <div className="overflow-hidden rounded-xl border bg-card shadow-[var(--shadow-card)]">
              <img src={parking.image} alt={parking.name} className="h-56 w-full object-cover md:h-72" />
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h1 className="font-display text-2xl font-bold text-foreground">{parking.name}</h1>
                    <p className="mt-1 flex items-center gap-1 text-muted-foreground">
                      <MapPin className="h-4 w-4" /> {parking.address}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 rounded-lg bg-accent/10 px-3 py-1.5">
                    <Star className="h-4 w-4 fill-accent text-accent" />
                    <span className="font-semibold text-accent">{parking.rating}</span>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {parking.amenities.map((a) => (
                    <Badge key={a} variant="secondary"><Shield className="mr-1 h-3 w-3" />{a}</Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Slot Grid */}
            <div className="mt-6 rounded-xl border bg-card p-6 shadow-[var(--shadow-card)]">
              <h2 className="mb-4 font-display text-xl font-bold text-foreground">Select Your Slot</h2>
              <SlotGrid slots={slots} selectedSlot={selectedSlot} onSelect={setSelectedSlot} />
            </div>
          </div>

          {/* Right - Booking Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-20 rounded-xl border bg-card p-6 shadow-[var(--shadow-elevated)]">
              <h2 className="font-display text-lg font-bold text-foreground">Booking Summary</h2>

              <div className="mt-4 space-y-4">
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Vehicle Type</label>
                  <Select value={vehicleType} onValueChange={setVehicleType}>
                    <SelectTrigger className="mt-1">
                      <Car className="mr-1 h-4 w-4" />
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="car">🚗 Car</SelectItem>
                      <SelectItem value="bike">🏍️ Bike</SelectItem>
                      <SelectItem value="suv">🚙 SUV</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium text-muted-foreground">Duration (hours)</label>
                  <div className="mt-1 flex items-center gap-3">
                    <Button variant="outline" size="icon" onClick={() => setHours(Math.max(1, hours - 1))}>
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="min-w-[3rem] text-center font-display text-2xl font-bold text-foreground">{hours}</span>
                    <Button variant="outline" size="icon" onClick={() => setHours(Math.min(24, hours + 1))}>
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {selectedSlotData && (
                  <div className="rounded-lg bg-secondary p-3">
                    <p className="text-sm text-muted-foreground">Selected Slot</p>
                    <p className="font-display text-lg font-bold text-foreground">{selectedSlotData.slotNumber}</p>
                  </div>
                )}

                <div className="space-y-2 border-t pt-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Rate</span>
                    <span className="text-foreground">₹{parking.pricePerHour}/hr × {hours}hr</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="text-foreground">₹{basePrice}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">GST (18%)</span>
                    <span className="text-foreground">₹{gst}</span>
                  </div>
                  <div className="flex justify-between border-t pt-2 font-semibold">
                    <span className="text-foreground">Total</span>
                    <span className="font-display text-xl text-accent">₹{totalPrice}</span>
                  </div>
                </div>

                <Button
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                  size="lg"
                  onClick={handleBooking}
                  disabled={!selectedSlot}
                >
                  <CreditCard className="mr-2 h-4 w-4" />
                  Proceed to Pay ₹{totalPrice}
                </Button>

                <p className="text-center text-xs text-muted-foreground">
                  Secured by Razorpay • UPI, Cards & Wallets accepted
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ParkingDetail;
