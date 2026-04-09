import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";

import AdminLayout from "./pages/AdminLayout";
import UserLayout from "./pages/UserLayout";

import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import Booking from "./pages/Booking";
import Reports from "./pages/Report";

// ✅ Sahi imports
import UserDashboard from "./pages/UserDashboard";
import UserShoes from "./pages/UserShoes";
import UserBookings from "./pages/UserBookings";

import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  const name = localStorage.getItem("name");
  console.log("App Token:", token);
  console.log("App Role:", role);
  console.log("App Name:", name);
  return (
    <BrowserRouter>
      <Routes>

        {/* Auth Routes */}
        <Route path="/" element={<Register />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

   
        <Route
          path="/admin"
          element={
            <PrivateRoute role="Admin">
              <AdminLayout />
            </PrivateRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="manage-shoes" element={<Admin />} />
          <Route path="bookings" element={<Booking />} />
          <Route path="reports" element={<Reports />} />
        </Route>
    
     
      <Route
  path="/user"
  element={
    <PrivateRoute role="Users">
      <UserLayout />
    </PrivateRoute>
  }
>
  <Route index element={<UserDashboard />} />
  <Route path="dashboard" element={<UserDashboard />} />
  <Route path="shoes" element={<UserShoes />} />
  <Route path="bookings" element={<UserBookings />} />
</Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;