import { useState } from "react";

const UserDashboard = () => {
  const [stats] = useState({
    totalShoes: 120,
    available: 80,
    rented: 40,
    users: 35,
    revenue: 25000
  });

  return (
    <div>
      <h1>UserDashboard</h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "20px",
        marginTop: "20px"
      }}>
        <Card title="Total Shoes" value={stats.totalShoes} />
        <Card title="Available Shoes" value={stats.available} />
        <Card title="Rented Shoes" value={stats.rented} />
        <Card title="Total Users" value={stats.users} />
        <Card title="Total Revenue" value={`₹${stats.revenue}`} />
      </div>
    </div>
  );
};

const Card = ({ title, value }) => {
  return (
    <div style={{
      background: "white",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
    }}>
      <h3>{title}</h3>
      <h2>{value}</h2>
    </div>
  );
};

export default UserDashboard;
