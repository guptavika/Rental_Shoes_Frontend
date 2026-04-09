// UserBookings.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import { Typography } from "@mui/material";

export default function UserBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/bookings")
      .then((res) => setBookings(res.data));
  }, []);

  return (
    <>
      <Typography variant="h5">My Bookings</Typography>

      {bookings.map((b, i) => (
        <Typography key={i}>
          Shoe ID: {b.shoeId}
        </Typography>
      ))}
    </>
  );
}