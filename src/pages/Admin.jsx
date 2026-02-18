import axios from "axios";
import { useEffect, useState } from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Box,
  Typography
} from "@mui/material";

export default function Admin() {
  const [form, setForm] = useState({
    id: "",
    name: "",
    brand: "",
    price: "",
    sizes: ""
  });

  const [image, setImage] = useState(null);
  const [shoes, setShoes] = useState([]);
  const [open, setOpen] = useState(false);

  const fetchShoes = async () => {
    const res = await axios.get("http://localhost:5000/api/shoes");
    setShoes(res.data);
  };

  useEffect(() => {
    fetchShoes();
  }, []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleOpen = () => {
    setForm({ id: "", name: "", brand: "", price: "", sizes: "" });
    setImage(null);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleSubmit = async () => {
    const fd = new FormData();
    fd.append("name", form.name);
    fd.append("brand", form.brand);
    fd.append("price", form.price);
    fd.append("sizes", form.sizes);
    fd.append("image", image);

    if (form.id) {
      await axios.put(
        `http://localhost:5000/api/shoes/${form.id}`,
        fd
      );
    } else {
      await axios.post("http://localhost:5000/api/shoes/add", fd);
    }

    fetchShoes();
    handleClose();
  };

  const deleteShoe = async (id) => {
    await axios.delete(`http://localhost:5000/api/shoes/${id}`);
    fetchShoes();
  };

  const editShoe = (s) => {
    setForm(s);
    setOpen(true);
  };

  return (
    <Box p={4}>
      <Typography variant="h4" mb={2}>
        Admin Shoes Panel
      </Typography>

      <Button variant="contained" onClick={handleOpen}>
        Add Shoe
      </Button>

      {/* TABLE */}
      <Table sx={{ mt: 3 }}>
        <TableHead>
          <TableRow>
            <TableCell>Image</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Brand</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Sizes</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {shoes.map((s) => (
            <TableRow key={s.id}>
              <TableCell>
                <img
                  src={`http://localhost:5000/uploads/${s.image}`}
                  width="60"
                />
              </TableCell>
              <TableCell>{s.name}</TableCell>
              <TableCell>{s.brand}</TableCell>
              <TableCell>₹{s.price}</TableCell>
              <TableCell>{s.sizes}</TableCell>
              <TableCell>
                <Button size="small" onClick={() => editShoe(s)}>
                  Edit
                </Button>
                <Button
                  size="small"
                  color="error"
                  onClick={() => deleteShoe(s.id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* MODAL */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          {form.id ? "Edit Shoe" : "Add Shoe"}
        </DialogTitle>

        <DialogContent>
          <TextField
            fullWidth
            margin="dense"
            label="Name"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="dense"
            label="Brand"
            name="brand"
            value={form.brand}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="dense"
            label="Price"
            name="price"
            value={form.price}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="dense"
            label="Sizes"
            name="sizes"
            value={form.sizes}
            onChange={handleChange}
          />

          <input
            type="file"
            style={{ marginTop: 15 }}
            onChange={(e) => setImage(e.target.files[0])}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained" onClick={handleSubmit}>
            {form.id ? "Update" : "Add"}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
