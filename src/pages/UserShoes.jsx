import { useEffect, useState } from "react";
import { api as API } from "../../api"; // ✅ axios direct nahi, api.js use kar
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button
} from "@mui/material";

export default function UserShoes() {
  const [shoes, setShoes] = useState([]);

  const fetchShoes = async () => {
    const res = await API.get("/shoes");
    setShoes(res.data);
  };

  useEffect(() => {
    fetchShoes();
  }, []);

  const addToCart = async (shoe_id) => {
    try {
      await API.post("/cart", { shoe_id }); // ✅ /api/cart pe ja raha hai
      alert("Cart mein add ho gaya! ✅");
    } catch (err) {
      alert("Error: " + err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <Box display="flex" flexWrap="wrap" gap={2}>
      {shoes.map((s) => (
        <Card key={s.id} sx={{ width: 250 }}>
          <img
            src={`http://localhost:5000/uploads/${s.image}`}
            height="150"
            width="100%"
          />

          <CardContent>
            <Typography variant="h6">{s.name}</Typography>
            <Typography>{s.brand}</Typography>
            <Typography>₹{s.price}</Typography>

            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 1 }}
              onClick={() => addToCart(s.id)} // ✅ cart mein add
            >
              Add to Cart 🛒
            </Button>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}