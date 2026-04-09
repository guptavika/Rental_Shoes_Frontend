import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children, role }) => {
  const token = localStorage.getItem("token");
  const userRole = localStorage.getItem("role");
  const location = useLocation();

  // ❌ login nahi hai
  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // ❌ role galat hai
  if (role && role !== userRole) {
    return <Navigate to="/login" replace />;
  }

  // ✅ sab sahi
  return children;
};

export default PrivateRoute;