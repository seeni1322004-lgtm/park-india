import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { Users, CreditCard, MapPin, TrendingUp, Car } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { adminStats, parkingAreas } from "@/data/mockData";
import { Badge } from "@/components/ui/badge";

const COLORS = ["hsl(38,92%,50%)", "hsl(217,91%,60%)", "hsl(142,71%,45%)", "hsl(0,72%,51%)", "hsl(280,60%,50%)", "hsl(190,80%,45%)"];

const StatCard = ({ icon: Icon, label, value, sub }: { icon: any; label: string; value: string; sub?: string }) => (
  <div className="rounded-xl border bg-card p-5 shadow-[var(--shadow-card)]">
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
        <Icon className="h-5 w-5 text-accent" />
      </div>
      <div>
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="font-display text-2xl font-bold text-foreground">{value}</p>
        {sub && <p className="text-xs text-muted-foreground">{sub}</p>}
      </div>
    </div>
  </div>
);

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-display text-2xl font-bold text-foreground md:text-3xl">Admin Dashboard</h1>
            <p className="mt-1 text-muted-foreground">Manage parking operations across India</p>
          </div>
          <Badge className="bg-accent text-accent-foreground">Admin</Badge>
        </div>

        {/* Stats */}
        <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
          <StatCard icon={CreditCard} label="Total Revenue" value={`₹${(adminStats.totalRevenue / 1000).toFixed(0)}K`} sub="All time" />
          <StatCard icon={Car} label="Total Bookings" value={adminStats.totalBookings.toLocaleString()} sub="Since launch" />
          <StatCard icon={Users} label="Active Users" value={adminStats.activeUsers.toLocaleString()} sub="Registered" />
          <StatCard icon={MapPin} label="Parking Areas" value={adminStats.parkingAreas.toString()} sub="6 cities" />
        </div>

        {/* Charts */}
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {/* Revenue Chart */}
          <div className="rounded-xl border bg-card p-6 shadow-[var(--shadow-card)]">
            <h2 className="mb-4 font-display text-lg font-bold text-foreground">Monthly Revenue (₹)</h2>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={adminStats.monthlyRevenue}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }} />
                <YAxis tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }} />
                <Tooltip
                  contentStyle={{
                    background: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                    color: "hsl(var(--foreground))",
                  }}
                  formatter={(value: number) => [`₹${value.toLocaleString()}`, "Revenue"]}
                />
                <Bar dataKey="revenue" fill="hsl(38,92%,50%)" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* City distribution */}
          <div className="rounded-xl border bg-card p-6 shadow-[var(--shadow-card)]">
            <h2 className="mb-4 font-display text-lg font-bold text-foreground">Bookings by City</h2>
            <ResponsiveContainer width="100%" height={280}>
              <PieChart>
                <Pie
                  data={adminStats.cityWise}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  dataKey="bookings"
                  nameKey="city"
                  label={({ city, percent }) => `${city} ${(percent * 100).toFixed(0)}%`}
                >
                  {adminStats.cityWise.map((_, i) => (
                    <Cell key={i} fill={COLORS[i % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Parking Areas Table */}
        <div className="mt-8 rounded-xl border bg-card shadow-[var(--shadow-card)]">
          <div className="p-6">
            <h2 className="font-display text-lg font-bold text-foreground">Parking Areas</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-t text-left text-sm text-muted-foreground">
                  <th className="px-6 py-3 font-medium">Name</th>
                  <th className="px-6 py-3 font-medium">City</th>
                  <th className="px-6 py-3 font-medium">Rate</th>
                  <th className="px-6 py-3 font-medium">Slots</th>
                  <th className="px-6 py-3 font-medium">Available</th>
                  <th className="px-6 py-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {parkingAreas.map((p) => (
                  <tr key={p.id} className="border-t">
                    <td className="px-6 py-4 font-medium text-foreground">{p.name}</td>
                    <td className="px-6 py-4 text-muted-foreground">{p.city}</td>
                    <td className="px-6 py-4 text-foreground">₹{p.pricePerHour}/hr</td>
                    <td className="px-6 py-4 text-foreground">{p.totalSlots}</td>
                    <td className="px-6 py-4">
                      <span className="font-semibold text-parking-available">{p.availableSlots}</span>
                    </td>
                    <td className="px-6 py-4">
                      <Badge className="bg-parking-available/10 text-parking-available">Active</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminDashboard;
