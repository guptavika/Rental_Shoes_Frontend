import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import LandingPage from "./pages/LandingPage";

import AdminLayout from "./pages/AdminLayout";
import UserLayout from "./pages/UserLayout";

import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import Booking from "./pages/Booking";
import Reports from "./pages/Report";

import UserDashboard from "./pages/UserDashboard";
import UserShoes from "./pages/UserShoes";
import UserBookings from "./pages/UserBookings";

import PrivateRoute from "./components/PrivateRoute";
import Navbar from "./pages/Navbar";
// import Navbar from "./components/Navbar";

/* 🔥 Wrapper to use useLocation */
function AppContent() {
  const location = useLocation();

  // Hide navbar on auth pages
  const hideNavbar =
    location.pathname === "/login" ||
    location.pathname === "/register";

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* Admin Routes */}
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

        {/* User Routes */}
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
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}