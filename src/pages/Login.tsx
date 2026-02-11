import { useState } from "react";
import { Link } from "react-router-dom";
import { Car, Mail, Lock, User, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Login = () => {
  const [isRegister, setIsRegister] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(isRegister ? "Account created! Please login." : "Login successful!");
  };

  return (
    <div className="flex min-h-screen">
      {/* Left panel */}
      <div className="hidden w-1/2 items-center justify-center lg:flex" style={{ background: "var(--gradient-hero)" }}>
        <div className="max-w-md px-12 text-center">
          <Car className="mx-auto h-16 w-16 text-accent" />
          <h2 className="mt-6 font-display text-3xl font-bold text-primary-foreground">ParkEase India</h2>
          <p className="mt-3 text-primary-foreground/70">
            Book parking spots across 6+ Indian cities. Real-time availability, QR entry, and secure payments.
          </p>
        </div>
      </div>

      {/* Right panel - form */}
      <div className="flex flex-1 items-center justify-center bg-background px-4">
        <div className="w-full max-w-sm">
          <Link to="/" className="mb-8 flex items-center gap-2 lg:hidden">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
              <Car className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-display text-xl font-bold">Park<span className="text-accent">Ease</span></span>
          </Link>

          <h1 className="font-display text-2xl font-bold text-foreground">
            {isRegister ? "Create Account" : "Welcome Back"}
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {isRegister ? "Sign up to start booking parking" : "Login to manage your bookings"}
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            {isRegister && (
              <>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Full Name" className="pl-10" required />
                </div>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Mobile Number" type="tel" className="pl-10" required />
                </div>
              </>
            )}
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Email" type="email" className="pl-10" required />
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Password" type="password" className="pl-10" required />
            </div>
            <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90" size="lg">
              {isRegister ? "Create Account" : "Login"}
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            {isRegister ? "Already have an account?" : "Don't have an account?"}{" "}
            <button onClick={() => setIsRegister(!isRegister)} className="font-medium text-accent hover:underline">
              {isRegister ? "Login" : "Sign Up"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
