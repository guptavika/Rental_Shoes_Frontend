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
  ListItemText
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const isLanding = location.pathname === "/";

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
        elevation={scrolled || !isLanding ? 4 : 0}
        sx={{
          bgcolor: scrolled || !isLanding ? "white" : "transparent",
          color: scrolled || !isLanding ? "black" : "white",
          transition: "all 0.3s"
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
                mr: 1
              }}
            >
              👟
            </Box>

            <Typography variant="h6" fontWeight="bold">
              StepRent
            </Typography>
          </Box>

          {/* DESKTOP LINKS */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
            {isLanding && (
              <>
                <Button href="#how-it-works" color="inherit">
                  How It Works
                </Button>
                <Button href="#collection" color="inherit">
                  Collection
                </Button>
                <Button href="#why-us" color="inherit">
                  Why Us
                </Button>
              </>
            )}
          </Box>

          {/* DESKTOP BUTTONS */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            <Button onClick={() => navigate("/login")}>
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
                color: scrolled || !isLanding ? "black" : "white"
              }}
            />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer
        anchor="right"
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
      >
        <Box sx={{ width: 250, p: 2 }}>

          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton onClick={() => setMenuOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>

          <List>
            {isLanding && (
              <>
                <ListItem button component="a" href="#how-it-works">
                  <ListItemText primary="How It Works" />
                </ListItem>
                <ListItem button component="a" href="#collection">
                  <ListItemText primary="Collection" />
                </ListItem>
                <ListItem button component="a" href="#why-us">
                  <ListItemText primary="Why Us" />
                </ListItem>
              </>
            )}

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