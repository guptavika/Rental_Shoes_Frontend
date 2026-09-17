import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  Stack,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";

import { useNavigate, useLocation } from "react-router-dom";

const NAV_LINKS = [
  { label: "How It Works", path: "/how-it-works" },
  { label: "Collection", path: "/collection" },
  { label: "Why Us", path: "/why-us" },
];

// Pages jahan Navbar nahi dikhana
const HIDE_ON = ["/login", "/register"];

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll(); // initial check
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Login/Register pe navbar hide
  if (HIDE_ON.includes(location.pathname)) return null;

  const textColor = scrolled ? "text.primary" : "#fff";
  const accent = "#0288d1";

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <AppBar
        position="fixed"
        elevation={scrolled ? 3 : 0}
        sx={{
          bgcolor: scrolled ? "rgba(255,255,255,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          color: textColor,
          transition: "all 0.35s ease",
          borderBottom: scrolled
            ? "1px solid rgba(0,0,0,0.06)"
            : "1px solid transparent",
        }}
      >
        <Toolbar
          sx={{
            px: { xs: 2, sm: 4, md: 6 },
            justifyContent: "space-between",
            minHeight: { xs: 64, md: 72 },
          }}
        >
          {/* ---- LOGO ---- */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              userSelect: "none",
            }}
            onClick={() => navigate("/")}
          >
            <Box
              sx={{
                bgcolor: accent,
                width: 38,
                height: 38,
                borderRadius: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mr: 1.2,
                boxShadow: "0 4px 12px rgba(2,136,209,0.35)",
              }}
            >
              <DirectionsWalkIcon sx={{ color: "#fff", fontSize: 22 }} />
            </Box>

            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ letterSpacing: 0.3 }}
            >
              StepRent
            </Typography>
          </Box>

          {/* ---- DESKTOP NAV LINKS ---- */}
          <Stack
            direction="row"
            spacing={1}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            {NAV_LINKS.map(({ label, path }) => {
              const active = isActive(path);
              return (
                <Button
                  key={path}
                  onClick={() => navigate(path)}
                  disableRipple
                  sx={{
                    color: active ? accent : textColor,
                    fontWeight: active ? 700 : 500,
                    textTransform: "none",
                    borderRadius: 2,
                    px: 2,
                    position: "relative",
                    transition: "all 0.25s ease",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: 6,
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: active ? "60%" : "0%",
                      height: "2px",
                      bgcolor: accent,
                      transition: "width 0.3s ease",
                    },
                    "&:hover": {
                      color: accent,
                      bgcolor: "transparent",
                      "&::after": { width: "60%" },
                    },
                  }}
                >
                  {label}
                </Button>
              );
            })}
          </Stack>

          {/* ---- DESKTOP AUTH BUTTONS ---- */}
          <Stack
            direction="row"
            spacing={1.5}
            sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
          >
            <Button
              onClick={() => navigate("/login")}
              disableRipple
              sx={{
                color: textColor,
                textTransform: "none",
                fontWeight: 600,
                px: 2,
                transition: "all 0.25s ease",
                "&:hover": {
                  color: accent,
                  bgcolor: "transparent",
                },
              }}
            >
              Log In
            </Button>

            <Button
              variant="contained"
              onClick={() => navigate("/register")}
              sx={{
                textTransform: "none",
                fontWeight: 600,
                px: 2.5,
                py: 1,
                borderRadius: 2,
                boxShadow: "0 4px 14px rgba(2,136,209,0.3)",
                "&:hover": {
                  boxShadow: "0 6px 20px rgba(2,136,209,0.45)",
                },
              }}
            >
              Get Started
            </Button>
          </Stack>

          {/* ---- MOBILE MENU BUTTON ---- */}
          <IconButton
            sx={{
              display: { md: "none" },
              color: textColor,
              transition: "all 0.25s ease",
            }}
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* ================= MOBILE DRAWER ================= */}
      <Drawer
        anchor="right"
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        disableScrollLock
        PaperProps={{
          sx: {
            width: { xs: 260, sm: 300 },
            background: "#ffffff",
          },
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
          {/* Header */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: 2,
              py: 1.5,
              borderBottom: "1px solid #eee",
            }}
          >
            <Typography variant="h6" fontWeight="bold" color="text.primary">
              Menu
            </Typography>
            <IconButton onClick={() => setMenuOpen(false)} aria-label="Close menu">
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Links */}
          <List sx={{ pt: 1 }}>
            {NAV_LINKS.map(({ label, path }) => {
              const active = isActive(path);
              return (
                <ListItem key={path} disablePadding>
                  <ListItemButton
                    onClick={() => {
                      navigate(path);
                      setMenuOpen(false);
                    }}
                    sx={{
                      mx: 1,
                      borderRadius: 2,
                      bgcolor: active ? "rgba(2,136,209,0.08)" : "transparent",
                      "&:hover": {
                        bgcolor: "rgba(2,136,209,0.12)",
                      },
                    }}
                  >
                    <ListItemText
                      primary={label}
                      primaryTypographyProps={{
                        fontWeight: active ? 700 : 500,
                        color: active ? accent : "text.primary",
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              );
            })}

            <Divider sx={{ my: 1.5 }} />

            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  navigate("/login");
                  setMenuOpen(false);
                }}
                sx={{ mx: 1, borderRadius: 2 }}
              >
                <ListItemText
                  primary="Log In"
                  primaryTypographyProps={{ fontWeight: 500 }}
                />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding sx={{ mt: 1 }}>
              <Box sx={{ width: "100%", px: 1 }}>
                <Button
                  fullWidth
                  variant="contained"
                  onClick={() => {
                    navigate("/register");
                    setMenuOpen(false);
                  }}
                  sx={{
                    textTransform: "none",
                    fontWeight: 600,
                    borderRadius: 2,
                    py: 1.2,
                  }}
                >
                  Get Started
                </Button>
              </Box>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
}