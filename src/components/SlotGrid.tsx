import { Car, Bike } from "lucide-react";
import type { ParkingSlot } from "@/data/mockData";

interface SlotGridProps {
  slots: ParkingSlot[];
  onSelect: (slotId: string) => void;
  selectedSlot: string | null;
}

const VehicleIcon = ({ type, className }: { type: string; className?: string }) => {
  if (type === "bike") return <Bike className={className} />;
  return <Car className={className} />;
};

const SlotGrid = ({ slots, onSelect, selectedSlot }: SlotGridProps) => {
  return (
    <div>
      {/* Legend */}
      <div className="mb-4 flex flex-wrap items-center gap-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded border-2" style={{ borderColor: "hsl(var(--slot-available))", background: "hsl(var(--slot-available-bg))" }} />
          <span>Available</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded border-2" style={{ borderColor: "hsl(var(--slot-booked))", background: "hsl(var(--slot-booked-bg))" }} />
          <span>Booked</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded border-2" style={{ borderColor: "hsl(var(--slot-selected))", background: "hsl(var(--slot-selected-bg))" }} />
          <span>Selected</span>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-5 gap-3 sm:gap-4">
        {slots.map((slot) => {
          const isSelected = selectedSlot === slot.id;
          const status = isSelected ? "selected" : slot.status;
          const slotClass = status === "selected" ? "slot-selected" : status === "booked" ? "slot-booked" : "slot-available";

          return (
            <button
              key={slot.id}
              className={`${slotClass} flex flex-col items-center justify-center rounded-xl p-3 sm:p-4`}
              onClick={() => {
                if (slot.status !== "booked") onSelect(slot.id);
              }}
              disabled={slot.status === "booked"}
            >
              <VehicleIcon type={slot.vehicleType} className="h-6 w-6 sm:h-8 sm:w-8" />
              <span className="mt-1 text-xs font-semibold sm:text-sm">{slot.slotNumber}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SlotGrid;
