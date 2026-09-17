import { useState } from "react";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import InventoryIcon from "@mui/icons-material/Inventory";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import StorefrontRoundedIcon from "@mui/icons-material/StorefrontRounded";

const drawerWidth = 256;

const navItems = [
  { label: "Dashboard", to: "/user/dashboard", icon: <DashboardIcon fontSize="small" /> },
  { label: "Shoes", to: "/user/shoes", icon: <InventoryIcon fontSize="small" /> },
  { label: "My Bookings", to: "/user/bookings", icon: <ReceiptLongIcon fontSize="small" /> },
  { label: "My Cart", to: "/user/cart", icon: <ShoppingCartIcon fontSize="small" /> },
];

export default function UserLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = useState(false);

  const name = localStorage.getItem("name") || "User";
  const initial = name.trim().charAt(0).toUpperCase();

  const hour = new Date().getHours();
  const greeting =
    hour < 12 ? "Good morning" : hour < 17 ? "Good afternoon" : "Good evening";

  const activeItem = navItems.find((i) => location.pathname.startsWith(i.to));

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  /* ---------------- Sidebar content ---------------- */
  const drawerBody = (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      {/* Brand */}
      <Stack direction="row" spacing={1.5} alignItems="center" sx={{ px: 2.5, py: 2.5 }}>
        <Box
          sx={{
            width: 40,
            height: 40,
            borderRadius: 2.5,
            display: "grid",
            placeItems: "center",
            background: "linear-gradient(135deg,#6366f1,#a855f7)",
            boxShadow: "0 10px 22px -10px #6366f1",
          }}
        >
          <StorefrontRoundedIcon sx={{ color: "#fff", fontSize: 22 }} />
        </Box>
        <Box>
          <Typography sx={{ color: "#fff", fontWeight: 700, fontSize: 16, lineHeight: 1.15 }}>
            ShoeStore
          </Typography>
          <Typography
            sx={{ color: "#7c8aa5", fontSize: 10.5, letterSpacing: 1.4, fontWeight: 600 }}
          >
            USER PANEL
          </Typography>
        </Box>
      </Stack>

      <Divider sx={{ borderColor: "rgba(255,255,255,0.08)" }} />

      <Typography
        sx={{ px: 3, pt: 2.5, pb: 1, fontSize: 10.5, letterSpacing: 1.4, color: "#64748b", fontWeight: 700 }}
      >
        MENU
      </Typography>

      {/* Nav */}
      <List sx={{ px: 1.5 }}>
        {navItems.map((item) => {
          const active = location.pathname.startsWith(item.to);
          return (
            <ListItem key={item.to} disablePadding sx={{ mb: 0.75 }}>
              <ListItemButton
                component={Link}
                to={item.to}
                onClick={() => isMobile && setOpen(false)}
                sx={{
                  borderRadius: 2.5,
                  py: 1.1,
                  color: active ? "#fff" : "#94a3b8",
                  background: active
                    ? "linear-gradient(90deg,#6366f1,#8b5cf6)"
                    : "transparent",
                  boxShadow: active ? "0 10px 22px -12px #6366f1" : "none",
                  transition: "all .2s ease",
                  "&:hover": {
                    background: active
                      ? "linear-gradient(90deg,#6366f1,#8b5cf6)"
                      : "rgba(255,255,255,0.06)",
                    color: "#fff",
                  },
                }}
              >
                <ListItemIcon sx={{ color: "inherit", minWidth: 38 }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontSize: 14.5,
                    fontWeight: active ? 600 : 500,
                  }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>

      {/* User card + logout */}
      <Box sx={{ mt: "auto", p: 1.5 }}>
        <Box
          sx={{
            p: 1.75,
            borderRadius: 3,
            bgcolor: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 1.5 }}>
            <Avatar
              sx={{
                width: 38,
                height: 38,
                fontSize: 15,
                fontWeight: 700,
                background: "linear-gradient(135deg,#6366f1,#a855f7)",
              }}
            >
              {initial}
            </Avatar>
            <Box sx={{ minWidth: 0 }}>
              <Typography noWrap sx={{ color: "#fff", fontSize: 14, fontWeight: 600 }}>
                {name}
              </Typography>
              <Typography sx={{ color: "#7c8aa5", fontSize: 11.5 }}>Customer</Typography>
            </Box>
          </Stack>

          <Button
            fullWidth
            onClick={logout}
            startIcon={<LogoutRoundedIcon sx={{ fontSize: 18 }} />}
            sx={{
              justifyContent: "flex-start",
              textTransform: "none",
              fontSize: 13.5,
              fontWeight: 600,
              color: "#fca5a5",
              borderRadius: 2,
              py: 0.9,
              "&:hover": { bgcolor: "rgba(239,68,68,0.12)", color: "#fecaca" },
            }}
          >
            Logout
          </Button>
        </Box>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "#f5f6fa" }}>
      {/* Sidebar */}
      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        open={isMobile ? open : true}
        onClose={() => setOpen(false)}
        ModalProps={{ keepMounted: true }}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            borderRight: "none",
            background: "linear-gradient(180deg,#0f172a 0%,#161f33 100%)",
            color: "#e2e8f0",
          },
        }}
      >
        {drawerBody}
      </Drawer>

      {/* Main area */}
      <Box
        component="main"
        sx={{ flexGrow: 1, minWidth: 0, display: "flex", flexDirection: "column" }}
      >
        {/* Topbar */}
        <Box
          sx={{
            position: "sticky",
            top: 0,
            zIndex: 20,
            px: { xs: 2, sm: 3 },
            py: 1.5,
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            bgcolor: "rgba(255,255,255,0.78)",
            backdropFilter: "blur(12px)",
            borderBottom: "1px solid #e9ecf3",
          }}
        >
          {isMobile && (
            <IconButton onClick={() => setOpen(true)} size="small">
              <MenuRoundedIcon />
            </IconButton>
          )}

          <Box sx={{ flexGrow: 1, minWidth: 0 }}>
            <Typography noWrap sx={{ fontWeight: 700, fontSize: 17, color: "#0f172a" }}>
              {activeItem?.label ?? "Dashboard"}
            </Typography>
            <Typography noWrap sx={{ fontSize: 12.5, color: "#8792a8" }}>
              {greeting}, {name} 👋
            </Typography>
          </Box>

          <Avatar
            sx={{
              width: 38,
              height: 38,
              fontSize: 15,
              fontWeight: 700,
              background: "linear-gradient(135deg,#6366f1,#a855f7)",
            }}
          >
            {initial}
          </Avatar>
        </Box>

        {/* Page content */}
        <Box sx={{ p: { xs: 2, sm: 3 }, flexGrow: 1 }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}