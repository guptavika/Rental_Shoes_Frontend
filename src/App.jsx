import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
 
import Admin from "./pages/Admin";
import User from "./pages/User";
import Login from "./pages/Login";
import AdminLayout from "./pages/AdminLayout";
import Dashboard from "./pages/Dashboard";
import ManageShoes from "./pages/ManagesShoes";
import Booking from "./pages/Booking";
import Reports from "./pages/Report";

// import { Login } from "@mui/icons-material";
// import Login from "./pages/Login";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Register/>}/>
          <Route path="/register" element={<Register />} />

        <Route path="/login" element={<Login/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/user" element={<User/>}/>
          <Route path="/adminlayout" element={<AdminLayout/>}>
          <Route path="dashboard" element={<Dashboard />} />
          {/* <Route path="add-shoes" element={<AddShoe />} /> */}
          <Route path="manage-shoes" element={<ManageShoes/>} />
          <Route path="bookings" element={<Booking />} />
          <Route path="users" element={<User />} />

          <Route path="reports" element={<Reports />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}
