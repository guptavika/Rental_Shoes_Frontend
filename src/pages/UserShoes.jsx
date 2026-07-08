import { useEffect, useState } from "react";
import { api as API } from "../../api";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CircularProgress,
} from "@mui/material";

export default function UserShoes() {
  const [shoes, setShoes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchShoes = async () => {
    try {
      const res = await API.get("/shoes");
      setShoes(res.data);
    } catch (err) {
      console.error("Error fetching shoes:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchShoes();

    // Refresh every 5 seconds
    const interval = setInterval(fetchShoes, 5000);

    return () => clearInterval(interval);
  }, []);

  const addToCart = async (shoe_id) => {
    try {
      await API.post("/cart", { shoe_id });
      alert("Added to Cart ✅");
    } catch (err) {
      alert(err.response?.data?.message || "Something went wrong");
    }
  };

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        mt={5}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box p={3}>
      <Typography variant="h4" mb={3} fontWeight="bold">
        Available Shoes
      </Typography>

      <Box display="flex" flexWrap="wrap" gap={3}>
        {shoes.length > 0 ? (
          shoes.map((shoe) => (
            <Card key={shoe.id} sx={{ width: 280 }}>
              <CardMedia
                component="img"
                height="180"
                image={`http://localhost:5000/uploads/${shoe.image}`}
                alt={shoe.name}
              />

              <CardContent>
                <Typography variant="h6">{shoe.name}</Typography>

                <Typography color="text.secondary">
                  Brand: {shoe.brand}
                </Typography>

                <Typography fontWeight="bold" mt={1}>
                  ₹{shoe.price}
                </Typography>

                <Typography mt={1}>
                  Sizes: {shoe.sizes}
                </Typography>

                <Button
                  fullWidth
                  variant="contained"
                  sx={{ mt: 2 }}
                  onClick={() => addToCart(shoe.id)}
                >
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))
        ) : (
          <Typography>No Shoes Available</Typography>
        )}
      </Box>
    </Box>
  );
}