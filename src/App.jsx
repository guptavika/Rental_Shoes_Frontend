import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import User from "./pages/User";
// import Login from "./pages/Login";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/user" element={<User/>}/>
      </Routes>
    </BrowserRouter>
  );
}
