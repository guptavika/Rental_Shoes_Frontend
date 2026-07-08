import { useEffect, useState } from "react";
import { api as API } from "../../api";
import {
  Box,
  Typography,
  Button,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export default function UserCart() {
  const [cart, setCart] = useState([]);

  const fetchCart = async () => {
    try {
      const res = await API.get("/cart");
      setCart(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const removeItem = async (id) => {
    try {
      await API.delete(`/cart/${id}`);
      fetchCart();
    } catch (err) {
      console.log(err);
    }
  };

  // Quantity Increase
  const increaseQty = async (id, qty) => {
    try {
      await API.put(`/cart/${id}`, {
        quantity: qty + 1,
      });
      fetchCart();
    } catch (err) {
      console.log(err);
    }
  };

  // Quantity Decrease
  const decreaseQty = async (id, qty) => {
    if (qty <= 1) return;

    try {
      await API.put(`/cart/${id}`, {
        quantity: qty - 1,
      });
      fetchCart();
    } catch (err) {
      console.log(err);
    }
  };

  const checkout = async () => {
    try {
      await API.post("/bookings");
      alert("Booking Successful ✅");
      fetchCart();
    } catch (err) {
      console.log(err);
    }
  };

  const grandTotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <Box p={3}>
      <Typography variant="h4" mb={3} fontWeight="bold">
        🛒 My Cart
      </Typography>

      <TableContainer component={Paper} elevation={5}>
        <Table>
          <TableHead sx={{ bgcolor: "#1976d2" }}>
            <TableRow>
              <TableCell sx={{ color: "#fff" }}>#</TableCell>
              <TableCell sx={{ color: "#fff" }}>Image</TableCell>
              <TableCell sx={{ color: "#fff" }}>Product</TableCell>
              <TableCell sx={{ color: "#fff" }}>Brand</TableCell>
              <TableCell sx={{ color: "#fff" }}>Price</TableCell>
              <TableCell sx={{ color: "#fff" }}>Quantity</TableCell>
              <TableCell sx={{ color: "#fff" }}>Total</TableCell>
              <TableCell sx={{ color: "#fff" }}>Action</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {cart.length > 0 ? (
              cart.map((item, index) => (
                <TableRow key={item.id}>
                  <TableCell>{index + 1}</TableCell>

                  <TableCell>
                    <img
                      src={`http://localhost:5000/uploads/${item.image}`}
                      alt={item.name}
                      width={70}
                      height={70}
                      style={{
                        objectFit: "cover",
                        borderRadius: 8,
                      }}
                    />
                  </TableCell>

                  <TableCell>{item.name}</TableCell>

                  <TableCell>{item.brand}</TableCell>

                  <TableCell>₹{item.price}</TableCell>

                  <TableCell>
                    <IconButton
                      color="error"
                      onClick={() =>
                        decreaseQty(item.id, item.quantity)
                      }
                    >
                      <RemoveIcon />
                    </IconButton>

                    <strong>{item.quantity}</strong>

                    <IconButton
                      color="primary"
                      onClick={() =>
                        increaseQty(item.id, item.quantity)
                      }
                    >
                      <AddIcon />
                    </IconButton>
                  </TableCell>

                  <TableCell>
                    ₹{item.price * item.quantity}
                  </TableCell>

                  <TableCell>
                    <Button
                      variant="contained"
                      color="error"
                      startIcon={<DeleteIcon />}
                      onClick={() => removeItem(item.id)}
                    >
                      Remove
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell align="center" colSpan={8}>
                  Cart is Empty
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {cart.length > 0 && (
        <Box
          mt={3}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h5" fontWeight="bold">
            Grand Total : ₹{grandTotal}
          </Typography>

          <Button
            variant="contained"
            color="success"
            size="large"
            onClick={checkout}
          >
            Checkout
          </Button>
        </Box>
      )}
    </Box>
  );
}