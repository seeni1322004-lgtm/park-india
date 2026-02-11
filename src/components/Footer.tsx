import { Car } from "lucide-react";

const Footer = () => (
  <footer className="border-t bg-primary text-primary-foreground">
    <div className="mx-auto max-w-7xl px-4 py-10">
      <div className="grid gap-8 md:grid-cols-4">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <Car className="h-5 w-5 text-accent" />
            <span className="font-display text-lg font-bold">ParkEase</span>
          </div>
          <p className="text-sm text-primary-foreground/70">
            India's smartest parking booking platform. Find, book, and park with ease across major cities.
          </p>
        </div>
        <div>
          <h4 className="mb-3 font-display font-semibold">Cities</h4>
          <ul className="space-y-1 text-sm text-primary-foreground/70">
            <li>Chennai</li><li>Bangalore</li><li>Mumbai</li>
            <li>Delhi</li><li>Hyderabad</li><li>Kolkata</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-display font-semibold">Company</h4>
          <ul className="space-y-1 text-sm text-primary-foreground/70">
            <li>About Us</li><li>Contact</li><li>Careers</li><li>Blog</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-display font-semibold">Support</h4>
          <ul className="space-y-1 text-sm text-primary-foreground/70">
            <li>Help Center</li><li>Terms of Service</li><li>Privacy Policy</li><li>Refund Policy</li>
          </ul>
        </div>
      </div>
      <div className="mt-8 border-t border-primary-foreground/10 pt-6 text-center text-sm text-primary-foreground/50">
        © 2026 ParkEase India. All rights reserved. | Made with ❤️ in India
      </div>
    </div>
  </footer>
);

export default Footer;
