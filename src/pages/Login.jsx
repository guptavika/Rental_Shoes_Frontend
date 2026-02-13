// import api from "../services/api";
import { useState } from "react";
import { api } from "../../api";

export default function Login() {
  const [form, setForm] = useState({});

  const login = async () => {
    const res = await api.post("/login", form);
    localStorage.setItem("token", res.data.token);

    if(res.data.role === "admin") window.location="/admin";
    else if(res.data.role === "vendor") window.location="/vendor";
    else window.location="/user";
  };

  return (
    <div>
      <h2>Login</h2>
      <input placeholder="Email" onChange={e=>setForm({...form,email:e.target.value})}/>
      <input type="password" placeholder="Password" onChange={e=>setForm({...form,password:e.target.value})}/>
      <button onClick={login}>Login</button>
    </div>
  );
}
