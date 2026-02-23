import { Link, Outlet, useNavigate } from "react-router-dom";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
  Divider
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import AddBoxIcon from "@mui/icons-material/AddBox";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import AssessmentIcon from "@mui/icons-material/Assessment";
import InventoryIcon from "@mui/icons-material/Inventory";

const drawerWidth = 240;

const AdminLayout = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <Box sx={{ display: "flex" }}>
      
      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#111",
            color: "#fff"
          }
        }}
      >
        <Toolbar>
          <Typography variant="h6" fontWeight="bold">
            Admin Panel
          </Typography>
        </Toolbar>

        <Divider sx={{ background: "#333" }} />

        <List>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="dashboard">
              <DashboardIcon sx={{ mr: 1 }} />
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component={Link} to="/admin">
              <AddBoxIcon sx={{ mr: 1 }} />
              <ListItemText primary="Add Shoes" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component={Link} to="manage-shoes">
              <InventoryIcon sx={{ mr: 1 }} />
              <ListItemText primary="Manage Shoes" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component={Link} to="bookings">
              <ShoppingCartIcon sx={{ mr: 1 }} />
              <ListItemText primary="Bookings" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component={Link} to="users">
              <PeopleIcon sx={{ mr: 1 }} />
              <ListItemText primary="Users" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component={Link} to="reports">
              <AssessmentIcon sx={{ mr: 1 }} />
              <ListItemText primary="Reports" />
            </ListItemButton>
          </ListItem>
        </List>

        <Box sx={{ mt: "auto", p: 2 }}>
          <Button
            variant="contained"
            color="error"
            fullWidth
            onClick={logout}
          >
            Logout
          </Button>
        </Box>
      </Drawer>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "#f4f6f8",
          p: 4,
          minHeight: "100vh"
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default AdminLayout;
