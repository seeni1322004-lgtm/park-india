import { useLocation, useNavigate, Link } from "react-router-dom";
import { CheckCircle, MapPin, Clock, Car, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { QRCodeSVG } from "qrcode.react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const BookingConfirm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state as any;

  if (!data) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="flex flex-col items-center justify-center py-32">
          <p className="text-muted-foreground">No booking data found</p>
          <Link to="/search"><Button className="mt-4">Find Parking</Button></Link>
        </div>
      </div>
    );
  }

  const bookingId = `PK${Date.now().toString().slice(-6)}`;
  const qrValue = `PARKEASE|${bookingId}|${data.slot.slotNumber}|${data.parking.name}|${data.totalPrice}`;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="mx-auto max-w-2xl px-4 py-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="rounded-2xl border bg-card p-8 shadow-[var(--shadow-elevated)]"
        >
          {/* Success header */}
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              <CheckCircle className="mx-auto h-16 w-16 text-parking-available" />
            </motion.div>
            <h1 className="mt-4 font-display text-2xl font-bold text-foreground">Booking Confirmed!</h1>
            <p className="mt-1 text-muted-foreground">Your parking spot has been reserved</p>
          </div>

          {/* Booking details */}
          <div className="mt-8 space-y-4 rounded-xl bg-secondary p-6">
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Booking ID</span>
              <span className="font-mono font-semibold text-foreground">{bookingId}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Parking</span>
              <span className="font-medium text-foreground">{data.parking.name}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Location</span>
              <span className="flex items-center gap-1 text-foreground">
                <MapPin className="h-3.5 w-3.5" /> {data.parking.area}, {data.parking.city}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Slot</span>
              <span className="font-display text-lg font-bold text-accent">{data.slot.slotNumber}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Vehicle</span>
              <span className="flex items-center gap-1 text-foreground">
                <Car className="h-3.5 w-3.5" /> {data.vehicleType.toUpperCase()}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Duration</span>
              <span className="flex items-center gap-1 text-foreground">
                <Clock className="h-3.5 w-3.5" /> {data.hours} hour{data.hours > 1 ? "s" : ""}
              </span>
            </div>
            <div className="border-t pt-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span>₹{data.basePrice}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">GST (18%)</span>
                <span>₹{data.gst}</span>
              </div>
              <div className="mt-2 flex justify-between font-semibold">
                <span>Total Paid</span>
                <span className="font-display text-xl text-accent">₹{data.totalPrice}</span>
              </div>
            </div>
          </div>

          {/* QR Code */}
          <div className="mt-8 text-center">
            <p className="mb-3 text-sm font-medium text-muted-foreground">Scan at parking entrance</p>
            <div className="mx-auto inline-block rounded-xl border bg-card p-4 shadow-[var(--shadow-card)]">
              <QRCodeSVG value={qrValue} size={180} level="H" />
            </div>
            <p className="mt-2 font-mono text-xs text-muted-foreground">{bookingId}</p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button variant="outline" className="flex-1" onClick={() => navigate("/bookings")}>
              View All Bookings
            </Button>
            <Button className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90" onClick={() => navigate("/")}>
              Back to Home
            </Button>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default BookingConfirm;
