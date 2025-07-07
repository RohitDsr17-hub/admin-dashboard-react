// src/components/dashboard/PieChart.jsx
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart() {
  const data = {
    labels: ['Electronics', 'Clothing', 'Groceries'],
    datasets: [
      {
        label: 'Category Sales',
        data: [40, 30, 30],
        backgroundColor: ['#f87171', '#60a5fa', '#34d399'],
      },
    ],
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-2">Sales by Category</h2>
      <Pie data={data} />
    </div>
  );
}
