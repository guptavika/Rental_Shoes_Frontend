import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../api";

import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  IconButton,
  InputAdornment,
  Divider,
} from "@mui/material";

import { Visibility, VisibilityOff, CheckCircle } from "@mui/icons-material";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });

  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async () => {
    try {
      setLoading(true);
      await api.post("/register", form);
      alert("Registered successfully!");
      navigate("/login");
    } catch (err) {
      alert(err?.response?.data?.error || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  const perks = [
    "Access to 500+ premium shoe styles",
    "Free delivery on orders over $30",
    "Flexible rentals",
    "Sanitized shoes guaranteed",
  ];

  return (
    // 🔵 Main Container: 50-50 Split with Flexbox
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        flexDirection: { xs: "column", md: "row" }, // Mobile: Column, Desktop: Row
      }}
    >
      {/* 🔵 LEFT SIDE (50% Width on Desktop) */}
      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          display: { xs: "none", md: "flex" }, // Mobile par hide
          position: "relative",
          backgroundImage:
            "url(https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(2,136,209,0.85), rgba(0,0,0,0.85))",
          }}
        />

        <Box
          sx={{
            position: "relative",
            color: "white",
            p: { xs: 4, md: 8 }, // Responsive padding
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Typography variant="h4" fontWeight="bold">
            StepRent 👟
          </Typography>

          <Box>
            <Typography
              variant="h3"
              fontWeight="bold"
              mb={2}
              fontSize={{ xs: "2rem", md: "3rem" }} // Responsive font size
            >
              Join Smart Shoe Renters
            </Typography>

            <Typography sx={{ mb: 4, opacity: 0.9, fontSize: { xs: "1rem", md: "1.1rem" } }}>
              Experience premium footwear without commitment.
            </Typography>

            {perks.map((perk, i) => (
              <Box key={i} sx={{ display: "flex", mb: 1.5 }}>
                <CheckCircle sx={{ mr: 1.5 }} />
                <Typography>{perk}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* ⚪ RIGHT SIDE (50% Width on Desktop) */}
      <Box
        sx={{
          width: { xs: "100%", md: "50%" }, // Exact 50% on desktop
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "#f4f6f8",
          p: 3,
        }}
      >
        <Paper
          elevation={6}
          sx={{
            p: { xs: 3, sm: 5 }, // Responsive padding
            width: "100%",
            maxWidth: 420,
            borderRadius: 4,
          }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            mb={1}
            fontSize={{ xs: "1.75rem", md: "2.125rem" }}
          >
            Create Account
          </Typography>

          <Typography color="text.secondary" mb={3}>
            Start your journey with StepRent
          </Typography>

          <TextField
            fullWidth
            label="Full Name"
            name="name"
            margin="normal"
            onChange={handleChange}
          />

          <TextField
            fullWidth
            label="Email"
            name="email"
            margin="normal"
            onChange={handleChange}
          />

          <TextField
            fullWidth
            label="Password"
            name="password"
            type={showPass ? "text" : "password"}
            margin="normal"
            onChange={handleChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPass(!showPass)}>
                    {showPass ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Button
            fullWidth
            variant="contained"
            size="large"
            sx={{
              mt: 3,
              py: 1.5,
              borderRadius: 2,
              textTransform: "none",
              fontWeight: "bold",
            }}
            onClick={submit}
            disabled={loading}
          >
            {loading ? "Creating Account..." : "Create Account"}
          </Button>

          <Divider sx={{ my: 3 }}>OR</Divider>

          <Typography textAlign="center">
            Already have an account?{" "}
            <span
              style={{
                color: "#0288d1",
                cursor: "pointer",
                fontWeight: 600,
              }}
              onClick={() => navigate("/login")}
            >
              Login
            </span>
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
}