import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, QrCode } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { mockBookings } from "@/data/mockData";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { toast } from "sonner";

const MyBookings = () => {
  const [bookings, setBookings] = useState(mockBookings);

  const handleCancel = (id: string) => {
    setBookings((prev) =>
      prev.map((b) => (b.id === id ? { ...b, paymentStatus: "cancelled" as const } : b))
    );
    toast.success("Booking cancelled successfully");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="mx-auto max-w-4xl px-4 py-8">
        <h1 className="font-display text-2xl font-bold text-foreground md:text-3xl">My Bookings</h1>
        <p className="mt-1 text-muted-foreground">{bookings.length} booking(s)</p>

        <div className="mt-6 space-y-4">
          {bookings.map((b) => (
            <div key={b.id} className="rounded-xl border bg-card p-5 shadow-[var(--shadow-card)]">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-display font-semibold text-foreground">{b.parkingName}</h3>
                    <Badge
                      variant={b.paymentStatus === "paid" ? "default" : b.paymentStatus === "cancelled" ? "destructive" : "secondary"}
                      className={b.paymentStatus === "paid" ? "bg-parking-available text-primary-foreground" : ""}
                    >
                      {b.paymentStatus}
                    </Badge>
                  </div>
                  <p className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" /> {b.city}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" /> {b.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" /> {b.startTime} • {b.hours}hr
                    </span>
                    <span>Slot: <strong className="text-foreground">{b.slotNumber}</strong></span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <p className="font-display text-xl font-bold text-accent">₹{b.totalPrice}</p>
                    <p className="text-xs text-muted-foreground">incl. GST ₹{b.gst}</p>
                  </div>
                  <div className="flex gap-2">
                    {b.paymentStatus === "paid" && (
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="icon">
                            <QrCode className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-xs text-center">
                          <DialogHeader>
                            <DialogTitle className="font-display">Entry QR Code</DialogTitle>
                          </DialogHeader>
                          <div className="flex flex-col items-center py-4">
                            <QRCodeSVG value={b.qrCode} size={200} level="H" />
                            <p className="mt-3 font-mono text-sm text-muted-foreground">{b.id}</p>
                            <p className="text-sm text-muted-foreground">Slot {b.slotNumber}</p>
                          </div>
                        </DialogContent>
                      </Dialog>
                    )}
                    {b.paymentStatus === "paid" && (
                      <Button variant="destructive" size="sm" onClick={() => handleCancel(b.id)}>
                        Cancel
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyBookings;
