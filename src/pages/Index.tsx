import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, MapPin, Shield, Clock, CreditCard, Car, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cities } from "@/data/mockData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
  };

  const features = [
    { icon: Search, title: "Smart Search", desc: "Find parking by city, area, or pincode across India" },
    { icon: Shield, title: "Secure Payments", desc: "Pay safely via Razorpay with UPI, cards & wallets" },
    { icon: Clock, title: "Real-Time Slots", desc: "Live availability updates every 3 seconds" },
    { icon: CreditCard, title: "QR Entry", desc: "Auto-generated QR code for quick parking entry" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: "radial-gradient(circle at 25% 50%, hsl(38 92% 50% / 0.2) 0%, transparent 50%), radial-gradient(circle at 75% 50%, hsl(217 91% 60% / 0.15) 0%, transparent 50%)",
          }} />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-sm text-primary-foreground/80">
              <Car className="h-4 w-4" /> Now live in 6+ Indian cities
            </div>
            <h1 className="font-display text-4xl font-extrabold leading-tight text-primary-foreground md:text-6xl">
              Park Smarter,{" "}
              <span className="text-accent">Not Harder</span>
            </h1>
            <p className="mt-4 text-lg text-primary-foreground/70 md:text-xl">
              Book parking spots across India in seconds. Real-time availability, secure payments, and instant QR entry passes.
            </p>

            {/* Search bar */}
            <div className="mx-auto mt-8 flex max-w-xl items-center gap-2 rounded-2xl bg-card p-2 shadow-[var(--shadow-elevated)]">
              <div className="flex flex-1 items-center gap-2 px-3">
                <MapPin className="h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search city, area, or pincode..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                  className="border-0 bg-transparent text-foreground shadow-none focus-visible:ring-0"
                />
              </div>
              <Button
                onClick={handleSearch}
                className="rounded-xl bg-accent px-6 text-accent-foreground hover:bg-accent/90"
              >
                <Search className="mr-1 h-4 w-4" /> Search
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cities */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-center font-display text-2xl font-bold text-foreground md:text-3xl">
          Available in Major Indian Cities
        </h2>
        <p className="mt-2 text-center text-muted-foreground">Select a city to explore parking options</p>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {cities.map((city, i) => (
            <motion.button
              key={city.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              onClick={() => navigate(`/search?city=${city.name}`)}
              className="group flex flex-col items-center gap-2 rounded-xl border bg-card p-5 shadow-[var(--shadow-card)] transition-all hover:shadow-[var(--shadow-elevated)] hover:border-accent"
            >
              <span className="text-3xl">{city.icon}</span>
              <span className="font-display font-semibold text-foreground">{city.name}</span>
              <span className="text-sm text-muted-foreground">{city.count} spots</span>
              <ChevronRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-accent" />
            </motion.button>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="bg-secondary/50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-center font-display text-2xl font-bold text-foreground md:text-3xl">
            Why ParkEase?
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="rounded-xl border bg-card p-6 text-center shadow-[var(--shadow-card)]"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                  <f.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-display font-semibold text-foreground">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {[
            { label: "Parking Spots", value: "2,500+" },
            { label: "Cities", value: "6+" },
            { label: "Happy Users", value: "10K+" },
            { label: "Bookings", value: "50K+" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-3xl font-extrabold text-accent md:text-4xl">{s.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
