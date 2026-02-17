import { useState } from "react";
// import { api } from "./api";
import { useNavigate } from "react-router-dom";
import { api } from "../../api";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async () => {
    try {
      const res = await api.post("/login", form);
      // Save in localStorage
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);
      localStorage.setItem("name", res.data.name);

      alert("Login successful!");

      // Redirect based on role
      if (res.data.role === "Admin") navigate("/Admin");
      else if (res.data.role === "owner") navigate("/owner");
      else navigate("/user");
    } catch (err) {
      alert(err.response.data.error || "Login failed");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="password" placeholder="Password" type="password" onChange={handleChange} />
      <button onClick={submit}>Login</button>
    </div>
  );
}
