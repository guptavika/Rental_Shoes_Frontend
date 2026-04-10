import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../api";

import {
  Box,
  Grid,
  TextField,
  Button,
  Typography,
  Paper,
  IconButton,
  InputAdornment,
  Divider
} from "@mui/material";

import {
  Visibility,
  VisibilityOff,
  ArrowBack
} from "@mui/icons-material";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await api.post("/login", form);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);
      localStorage.setItem("name", res.data.name);

      if (res.data.role === "Admin") navigate("/admin/dashboard");
      else if (res.data.role === "owner") navigate("/owner");
      else navigate("/user/dashboard");

    } catch (err) {
      setError(err?.response?.data?.error || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Grid container sx={{ minHeight: "100vh" }}>

      {/* 🔵 LEFT SIDE */}
      <Grid
        item
        md={6}
        sx={{
          display: { xs: "none", md: "flex" },
          position: "relative",
          backgroundImage:
            "url(https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        {/* Gradient Overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(2,136,209,0.9), rgba(0,0,0,0.9))"
          }}
        />

        {/* Content */}
        <Box
          sx={{
            position: "relative",
            p: 10,
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%"
          }}
        >
          <Typography variant="h3" fontWeight="bold">
            StepRent 👟
          </Typography>

          <Box>
            <Typography
              variant="h4"
              fontWeight={300}
              sx={{ lineHeight: 1.4, mb: 4 }}
            >
              Wear premium shoes  
              <br /> without paying premium prices.
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Box
                component="img"
                src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
                sx={{ width: 45, height: 45, borderRadius: "50%" }}
              />
              <Box>
                <Typography fontWeight="bold">Sophia Chen</Typography>
                <Typography fontSize={12} color="#90caf9">
                  Verified Member
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Grid>

      {/* ⚪ RIGHT SIDE */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "#f8fafc",
          p: 3
        }}
      >
        <Paper
          elevation={0}
          sx={{
            p: 5,
            width: "100%",
            maxWidth: 420,
            borderRadius: 4,
            backdropFilter: "blur(10px)",
            background: "rgba(255,255,255,0.8)",
            boxShadow: "0 10px 40px rgba(0,0,0,0.1)"
          }}
        >
          {/* Back */}
          <Button
            startIcon={<ArrowBack />}
            onClick={() => navigate("/")}
            sx={{ mb: 3, textTransform: "none", color: "gray" }}
          >
            Back
          </Button>

          {/* Heading */}
          <Typography variant="h4" fontWeight="bold" mb={1}>
            Welcome back 👋
          </Typography>

          <Typography color="text.secondary" mb={3}>
            Login to continue your journey
          </Typography>

          {/* Error */}
          {error && (
            <Box
              sx={{
                mb: 2,
                p: 2,
                bgcolor: "#fdecea",
                borderRadius: 2,
                color: "#d32f2f",
                fontSize: 14
              }}
            >
              {error}
            </Box>
          )}

          {/* FORM */}
          <form onSubmit={submit}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              margin="normal"
              onChange={handleChange}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2
                }
              }}
            />

            <TextField
              fullWidth
              label="Password"
              name="password"
              type={showPass ? "text" : "password"}
              margin="normal"
              onChange={handleChange}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2
                }
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPass(!showPass)}>
                      {showPass ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />

            <Button
              fullWidth
              type="submit"
              variant="contained"
              size="large"
              sx={{
                mt: 3,
                py: 1.5,
                borderRadius: 2,
                fontWeight: "bold",
                textTransform: "none",
                background:
                  "linear-gradient(135deg, #0288d1, #42a5f5)"
              }}
              disabled={loading}
            >
              {loading ? "Signing in..." : "Sign In"}
            </Button>
          </form>

          <Divider sx={{ my: 3 }} />

          <Typography textAlign="center">
            Don’t have an account?{" "}
            <span
              style={{
                color: "#0288d1",
                cursor: "pointer",
                fontWeight: 600
              }}
              onClick={() => navigate("/register")}
            >
              Create one
            </span>
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}