import { useState } from "react";
import { api } from "../../api";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  IconButton,
  InputAdornment
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function Auth() {
  const [form, setForm] = useState({});
  const [isLogin, setIsLogin] = useState(true);
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submit = async () => {
    try {
      setLoading(true);

      if (isLogin) {
        const res = await api.post("/login", form);
        localStorage.setItem("token", res.data.token);

        if (res.data.role === "admin") navigate("/admin");
        else if (res.data.role === "vendor") navigate("/vendor");
        else navigate("/user");
      } else {
        const res = await api.post("/register", form);
        localStorage.setItem("token", res.data.token);
        navigate("/admin");
      }
    } catch (err) {
      alert(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg,#667eea,#764ba2)"
      }}
    >
      <Card sx={{ width: 360, p: 2, borderRadius: 3 }}>
        <CardContent>
          <Typography variant="h5" textAlign="center" mb={2}>
            {isLogin ? "Login" : "Register"}
          </Typography>

          {!isLogin && (
            <TextField
              fullWidth
              label="Name"
              margin="normal"
              onChange={e =>
                setForm({ ...form, name: e.target.value })
              }
            />
          )}

          <TextField
            fullWidth
            label="Email"
            margin="normal"
            onChange={e =>
              setForm({ ...form, email: e.target.value })
            }
          />

          <TextField
            fullWidth
            label="Password"
            type={showPass ? "text" : "password"}
            margin="normal"
            onChange={e =>
              setForm({ ...form, password: e.target.value })
            }
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPass(!showPass)}
                  >
                    {showPass ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />

          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 2, py: 1.2 }}
            onClick={submit}
            disabled={loading}
          >
            {loading
              ? "Please wait..."
              : isLogin
              ? "Login"
              : "Register"}
          </Button>

          <Typography textAlign="center" mt={2}>
            {isLogin
              ? "New user?"
              : "Already have an account?"}{" "}
            <span
              style={{
                color: "#1976d2",
                cursor: "pointer",
                fontWeight: "bold"
              }}
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Register" : "Login"}
            </span>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
