import { Box, Button, Stack } from "@mui/material";
import { useState } from "react";
import ShoeList from "./ShoeList";
import Cart from "./Cart";
import RentalHistory from "./RentalHistory";

const UserDashboard = () => {
  const [tab, setTab] = useState("shoes");

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start", // ✅ not center (avoids navbar overlap)
        pt: { xs: "80px", md: "100px" }, // 🔥 SPACE FROM NAVBAR
        bgcolor: "#f5f5f5",
        px: 2
      }}
    >
      {/* 🔥 TABS */}
      <Stack direction="row" spacing={2} mb={4}>
        <Button
          variant={tab === "shoes" ? "contained" : "outlined"}
          onClick={() => setTab("shoes")}
        >
          Shoes
        </Button>

        <Button
          variant={tab === "cart" ? "contained" : "outlined"}
          onClick={() => setTab("cart")}
        >
          Cart
        </Button>

        <Button
          variant={tab === "history" ? "contained" : "outlined"}
          onClick={() => setTab("history")}
        >
          History
        </Button>
      </Stack>

      {/* 🔥 CONTENT BOX (CENTERED LOOK) */}
      <Box
        sx={{
          width: "100%",
          maxWidth: 800,
          display: "flex",
          justifyContent: "center"
        }}
      >
        {tab === "shoes" && <ShoeList />}
        {tab === "cart" && <Cart />}
        {tab === "history" && <RentalHistory />}
      </Box>
    </Box>
  );
};

export default UserDashboard;