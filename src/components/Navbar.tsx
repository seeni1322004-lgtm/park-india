import { Link, useLocation, useNavigate } from "react-router-dom";
import { Car, Menu, X, User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
    toast.success("Logged out successfully");
    navigate("/");
  };

  return (
    <nav className="sticky top-0 z-50 border-b bg-card/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <Car className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="font-display text-xl font-bold text-foreground">
            Park<span className="text-accent">Ease</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          <Link to="/"><Button variant="ghost" size="sm">Home</Button></Link>
          <Link to="/search"><Button variant="ghost" size="sm">Find Parking</Button></Link>
          <Link to="/bookings"><Button variant="ghost" size="sm">My Bookings</Button></Link>
          <Link to="/admin"><Button variant="ghost" size="sm">Admin</Button></Link>
          {user ? (
            <Button size="sm" variant="outline" className="ml-2" onClick={handleSignOut}>
              <LogOut className="mr-1 h-4 w-4" /> Logout
            </Button>
          ) : (
            <Link to="/login">
              <Button size="sm" className="ml-2 bg-accent text-accent-foreground hover:bg-accent/90">
                <User className="mr-1 h-4 w-4" /> Login
              </Button>
            </Link>
          )}
        </div>

        {/* Mobile toggle */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t bg-card p-4 md:hidden">
          <div className="flex flex-col gap-2">
            <Link to="/" onClick={() => setMobileOpen(false)}><Button variant="ghost" className="w-full justify-start">Home</Button></Link>
            <Link to="/search" onClick={() => setMobileOpen(false)}><Button variant="ghost" className="w-full justify-start">Find Parking</Button></Link>
            <Link to="/bookings" onClick={() => setMobileOpen(false)}><Button variant="ghost" className="w-full justify-start">My Bookings</Button></Link>
            <Link to="/admin" onClick={() => setMobileOpen(false)}><Button variant="ghost" className="w-full justify-start">Admin</Button></Link>
            {user ? (
              <Button className="w-full bg-accent text-accent-foreground" onClick={() => { handleSignOut(); setMobileOpen(false); }}>
                <LogOut className="mr-1 h-4 w-4" /> Logout
              </Button>
            ) : (
              <Link to="/login" onClick={() => setMobileOpen(false)}>
                <Button className="w-full bg-accent text-accent-foreground">
                  <User className="mr-1 h-4 w-4" /> Login
                </Button>
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
