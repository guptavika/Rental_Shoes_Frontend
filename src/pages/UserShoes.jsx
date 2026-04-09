// UserShoes.jsx
import { useEffect, useState } from "react";
import axios from "axios";
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
    const res = await axios.get("http://localhost:5000/api/shoes");
    setShoes(res.data);
  };

  useEffect(() => {
    fetchShoes();
  }, []);

  const bookShoe = async (shoeId) => {
    try {
      await axios.post("http://localhost:5000/api/bookings", {
        shoeId,
        user: localStorage.getItem("name")
      });

      alert("Booking successful!");
    } catch (err) {
      alert("Booking failed");
    }
  };

  return (
    <Box display="flex" flexWrap="wrap" gap={2}>
      {shoes.map((s) => (
        <Card key={s.id} sx={{ width: 250 }}>
          <img
            src={`http://localhost:5000/uploads/${s.image}`}
            height="150"
          />

          <CardContent>
            <Typography variant="h6">{s.name}</Typography>
            <Typography>{s.brand}</Typography>
            <Typography>₹{s.price}</Typography>

            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 1 }}
              onClick={() => bookShoe(s.id)}
            >
              Book Now
            </Button>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}