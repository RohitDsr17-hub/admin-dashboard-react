export default function StatsCard({ title, value, color }) {
    return (
      <div className={`bg-${color}-100 text-${color}-800 p-4 rounded-lg shadow w-full`}>
        <h2 className="text-sm font-semibold">{title}</h2>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    );
  }