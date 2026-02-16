const submit = async () => {
  try {
    const res = await api.post("/login", {
      email: form.email,
      password: form.password,
    });

    localStorage.setItem("token", res.data.token);

    // 👇 YAHI LOGIC HAI
    if (res.data.role === "admin") {
      navigate("/admin");
    } else if (res.data.role === "user") {
      navigate("/user");
    }

  } catch (err) {
    alert("Invalid credentials");
  }
};
