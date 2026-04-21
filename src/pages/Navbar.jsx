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
  ListItemText,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Check if current path is active
  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <AppBar
        position="fixed"
        elevation={scrolled ? 4 : 0}
        sx={{
          bgcolor: scrolled ? "white" : "transparent",
          color: scrolled ? "black" : "white",
          transition: "all 0.3s",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* LOGO */}
          <Box
            sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            <Box
              sx={{
                bgcolor: "#0288d1",
                px: 1.5,
                py: 1,
                borderRadius: 2,
                mr: 1,
              }}
            >
              👟
            </Box>

            <Typography variant="h6" fontWeight="bold">
              StepRent
            </Typography>
          </Box>

          {/* DESKTOP LINKS - SHOW ON ALL PAGES */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
            <Button
              onClick={() => navigate("/how-it-works")}
              sx={{
                fontWeight: isActive("/how-it-works") ? 700 : 500,
                borderBottom: isActive("/how-it-works") ? "2px solid #0288d1" : "none",
                borderRadius: 0,
                '&:hover': {
                  borderBottom: "2px solid #0288d1",
                }
              }}
            >
              How It Works
            </Button>

            <Button
              onClick={() => navigate("/collection")}
              sx={{
                fontWeight: isActive("/collection") ? 700 : 500,
                borderBottom: isActive("/collection") ? "2px solid #0288d1" : "none",
                borderRadius: 0,
                '&:hover': {
                  borderBottom: "2px solid #0288d1",
                }
              }}
            >
              Collection
            </Button>

            <Button
              onClick={() => navigate("/why-us")}
              sx={{
                fontWeight: isActive("/why-us") ? 700 : 500,
                borderBottom: isActive("/why-us") ? "2px solid #0288d1" : "none",
                borderRadius: 0,
                '&:hover': {
                  borderBottom: "2px solid #0288d1",
                }
              }}
            >
              Why Us
            </Button>
          </Box>

          {/* DESKTOP BUTTONS */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            <Button 
              onClick={() => navigate("/login")}
              sx={{
                color: scrolled ? "black" : "white",
              }}
            >
              Log In
            </Button>

            <Button 
              variant="contained" 
              onClick={() => navigate("/register")}
            >
              Get Started
            </Button>
          </Box>

          {/* MOBILE MENU BUTTON */}
          <IconButton
            sx={{ display: { md: "none" } }}
            onClick={() => setMenuOpen(true)}
          >
            <MenuIcon
              sx={{
                color: scrolled ? "black" : "white",
              }}
            />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer anchor="right" open={menuOpen} onClose={() => setMenuOpen(false)}>
        <Box sx={{ width: 250, p: 2 }}>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton onClick={() => setMenuOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>

          <List>
            {/* Navigation Links - Always visible in mobile menu */}
            <ListItem
              button
              onClick={() => {
                navigate("/how-it-works");
                setMenuOpen(false);
              }}
              sx={{
                bgcolor: isActive("/how-it-works") ? "rgba(2, 136, 209, 0.1)" : "transparent",
              }}
            >
              <ListItemText 
                primary="How It Works" 
                primaryTypographyProps={{
                  fontWeight: isActive("/how-it-works") ? 700 : 400,
                  color: isActive("/how-it-works") ? "#0288d1" : "inherit",
                }}
              />
            </ListItem>

            <ListItem
              button
              onClick={() => {
                navigate("/collection");
                setMenuOpen(false);
              }}
              sx={{
                bgcolor: isActive("/collection") ? "rgba(2, 136, 209, 0.1)" : "transparent",
              }}
            >
              <ListItemText 
                primary="Collection" 
                primaryTypographyProps={{
                  fontWeight: isActive("/collection") ? 700 : 400,
                  color: isActive("/collection") ? "#0288d1" : "inherit",
                }}
              />
            </ListItem>

            <ListItem
              button
              onClick={() => {
                navigate("/why-us");
                setMenuOpen(false);
              }}
              sx={{
                bgcolor: isActive("/why-us") ? "rgba(2, 136, 209, 0.1)" : "transparent",
              }}
            >
              <ListItemText 
                primary="Why Us" 
                primaryTypographyProps={{
                  fontWeight: isActive("/why-us") ? 700 : 400,
                  color: isActive("/why-us") ? "#0288d1" : "inherit",
                }}
              />
            </ListItem>

            {/* Divider */}
            <Box sx={{ my: 1, borderTop: "1px solid #e0e0e0" }} />

            <ListItem
              button
              onClick={() => {
                navigate("/login");
                setMenuOpen(false);
              }}
            >
              <ListItemText primary="Log In" />
            </ListItem>

            <ListItem
              button
              onClick={() => {
                navigate("/register");
                setMenuOpen(false);
              }}
            >
              <ListItemText primary="Get Started" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
}