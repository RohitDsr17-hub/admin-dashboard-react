import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen p-5">
      <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
      <nav className="flex flex-col space-y-4">
        <Link to="/dashboard" className="hover:bg-gray-700 p-2 rounded">Dashboard</Link>
        <Link to="/users" className="hover:bg-gray-700 p-2 rounded">Users</Link>
        <Link to="/products" className="hover:bg-gray-700 p-2 rounded">Products</Link>
        <Link to="/settings" className="hover:bg-gray-700 p-2 rounded">Settings</Link>
      </nav>
    </div>
  );
}
