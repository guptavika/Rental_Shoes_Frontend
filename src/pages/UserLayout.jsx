import { Link, Outlet, useNavigate } from "react-router-dom";
import {
  Box, Drawer, List, ListItem, ListItemButton,
  ListItemText, Toolbar, Typography, Button, Divider
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import InventoryIcon from "@mui/icons-material/Inventory";

const drawerWidth = 240;

export default function UserLayout() {
  const navigate = useNavigate();
  const name = localStorage.getItem("name");

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            background: "#111",
            color: "#fff"
          }
        }}
      >
        <Toolbar>
          <Typography variant="h6">User Panel</Typography>
        </Toolbar>

        <Divider sx={{ background: "#333" }} />

        <List>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/user/dashboard"> {/* ✅ */}
              <DashboardIcon sx={{ mr: 1 }} />
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component={Link} to="/user/shoes"> {/* ✅ */}
              <InventoryIcon sx={{ mr: 1 }} />
              <ListItemText primary="Shoes" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component={Link} to="/user/bookings"> {/* ✅ */}
              <ShoppingCartIcon sx={{ mr: 1 }} />
              <ListItemText primary="My Bookings" />
            </ListItemButton>
          </ListItem>
        </List>
<ListItem disablePadding>
  <ListItemButton component={Link} to="/user/cart">
    <ShoppingCartIcon sx={{ mr: 1 }} />
    <ListItemText primary="My Cart" />
  </ListItemButton>
</ListItem>
        <Box sx={{ mt: "auto", p: 2 }}>
          <Typography>{name}</Typography>
          <Button fullWidth color="error" onClick={logout}>
            Logout
          </Button>
        </Box>
      </Drawer>

      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Outlet />
      </Box>
    </Box>
  );
}