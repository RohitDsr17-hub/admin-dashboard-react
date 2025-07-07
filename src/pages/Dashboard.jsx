// src/pages/Dashboard.jsx
import StatsCard from '../components/dashboard/StatsCard';
import BarChart from '../components/dashboard/BarChart';
import PieChart from '../components/dashboard/PieChart';

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard title="Total Users" value="1,250" color="blue" />
        <StatsCard title="Revenue" value="$9,500" color="green" />
        <StatsCard title="Orders" value="320" color="yellow" />
        <StatsCard title="Pending Issues" value="8" color="red" />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <BarChart />
        <PieChart />
      </div>
    </div>
  );
}
