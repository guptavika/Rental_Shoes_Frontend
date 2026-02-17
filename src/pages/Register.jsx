import { useState } from "react";
// import { api } from "../api";
import { useNavigate } from "react-router-dom";
import { api } from "../../api";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "", role: "user" });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async () => {
    try {
      await api.post("/register", form);
      alert("Registered successfully!");
      navigate("/login");
    } catch (err) {
      alert(err.response.data.error || "Registration failed");
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="password" placeholder="Password" type="password" onChange={handleChange} />
      {/* <select name="role" onChange={handleChange}>
        <option value="user">User</option>
        <option value="owner">Shoes Owner</option>
        <option value="admin">Admin</option>
      </select> */}
      <button onClick={submit}>Register</button>
    </div>
  );
}
