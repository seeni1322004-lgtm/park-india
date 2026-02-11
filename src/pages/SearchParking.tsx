import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, MapPin, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParkingCard from "@/components/ParkingCard";
import { parkingAreas, cities } from "@/data/mockData";

const SearchParking = () => {
  const [searchParams] = useSearchParams();
  const initialCity = searchParams.get("city") || "";
  const initialQ = searchParams.get("q") || "";

  const [query, setQuery] = useState(initialQ);
  const [selectedCity, setSelectedCity] = useState(initialCity);
  const [vehicleType, setVehicleType] = useState("all");

  const filtered = useMemo(() => {
    return parkingAreas.filter((p) => {
      const matchCity = !selectedCity || selectedCity === "all" || p.city === selectedCity;
      const matchQuery = !query || p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.area.toLowerCase().includes(query.toLowerCase()) ||
        p.city.toLowerCase().includes(query.toLowerCase());
      const matchVehicle = vehicleType === "all" || p.vehicleTypes.map(v => v.toLowerCase()).includes(vehicleType);
      return matchCity && matchQuery && matchVehicle;
    });
  }, [query, selectedCity, vehicleType]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 py-8">
        <h1 className="font-display text-2xl font-bold text-foreground md:text-3xl">Find Parking</h1>
        <p className="mt-1 text-muted-foreground">
          {filtered.length} parking spot{filtered.length !== 1 ? "s" : ""} found
        </p>

        {/* Filters */}
        <div className="mt-6 flex flex-col gap-3 rounded-xl border bg-card p-4 shadow-[var(--shadow-card)] sm:flex-row sm:items-center">
          <div className="flex flex-1 items-center gap-2 rounded-lg border bg-background px-3">
            <Search className="h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search area, name..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="border-0 bg-transparent shadow-none focus-visible:ring-0"
            />
          </div>
          <Select value={selectedCity || "all"} onValueChange={(v) => setSelectedCity(v === "all" ? "" : v)}>
            <SelectTrigger className="w-full sm:w-44">
              <MapPin className="mr-1 h-4 w-4" />
              <SelectValue placeholder="All Cities" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Cities</SelectItem>
              {cities.map((c) => (
                <SelectItem key={c.name} value={c.name}>{c.name}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={vehicleType} onValueChange={setVehicleType}>
            <SelectTrigger className="w-full sm:w-40">
              <SlidersHorizontal className="mr-1 h-4 w-4" />
              <SelectValue placeholder="Vehicle" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Vehicles</SelectItem>
              <SelectItem value="car">Car</SelectItem>
              <SelectItem value="bike">Bike</SelectItem>
              <SelectItem value="suv">SUV</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Results */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ParkingCard key={p.id} parking={p} />
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="py-20 text-center">
            <MapPin className="mx-auto h-12 w-12 text-muted-foreground/40" />
            <p className="mt-4 font-display text-lg font-semibold text-foreground">No parking spots found</p>
            <p className="text-muted-foreground">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default SearchParking;
