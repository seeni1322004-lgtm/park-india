import { MapPin, Star, Clock, Car } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import type { ParkingArea } from "@/data/mockData";

const ParkingCard = ({ parking }: { parking: ParkingArea }) => {
  const availPercent = Math.round((parking.availableSlots / parking.totalSlots) * 100);

  return (
    <div className="group overflow-hidden rounded-xl border bg-card shadow-[var(--shadow-card)] transition-all duration-300 hover:shadow-[var(--shadow-elevated)]">
      <div className="relative h-44 overflow-hidden">
        <img
          src={parking.image}
          alt={parking.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute right-3 top-3">
          <Badge className="bg-accent text-accent-foreground font-semibold">
            ₹{parking.pricePerHour}/hr
          </Badge>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/60 to-transparent p-3">
          <div className="flex items-center gap-1 text-sm text-primary-foreground">
            <Star className="h-4 w-4 fill-accent text-accent" />
            <span className="font-medium">{parking.rating}</span>
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-display text-lg font-semibold text-foreground">{parking.name}</h3>
        <p className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
          <MapPin className="h-3.5 w-3.5" /> {parking.area}, {parking.city}
        </p>
        <div className="mt-3 flex items-center gap-4 text-sm">
          <span className="flex items-center gap-1 text-parking-available font-medium">
            <Car className="h-4 w-4" /> {parking.availableSlots} available
          </span>
          <span className="text-muted-foreground">of {parking.totalSlots}</span>
        </div>
        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{
              width: `${availPercent}%`,
              background: availPercent > 30
                ? "hsl(var(--slot-available))"
                : availPercent > 10
                ? "hsl(38 92% 50%)"
                : "hsl(var(--slot-booked))",
            }}
          />
        </div>
        <div className="mt-3 flex flex-wrap gap-1">
          {parking.amenities.slice(0, 3).map((a) => (
            <Badge key={a} variant="secondary" className="text-xs">{a}</Badge>
          ))}
        </div>
        <Link to={`/parking/${parking.id}`}>
          <Button className="mt-4 w-full bg-primary text-primary-foreground hover:bg-primary/90">
            Book Now
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ParkingCard;
