"use client";

import { useState } from "react";
import { Machine, Product } from "@/types";
import {
  Button,
  Dialog,
  TextField,
  Typography,
} from "@mui/material";
import ProductTable from "./ProductTable";
import PageContainer from "@/components/shared/PageContainer";

type MachineDetailsClientProps = {
  machine: Machine;
};

const MachineDetailsClient = ({ machine }: MachineDetailsClientProps) => {
  
  const [products, setProducts] = useState<Product[]>(machine.products);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");

  const isFormValid =
    name.trim() !== "" &&
    price !== "" &&
    stock !== "" &&
    Number(price) >= 0 &&
    Number(stock) >= 0;

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setName("");
    setPrice("");
    setStock("");
  };

  const handleAdd = () => {
    if (!isFormValid) return;
    const newProduct: Product = {
      id: crypto.randomUUID(),
      name: name.trim(),
      price: Number(price),
      stock: Number(stock),
    };
    setProducts((prevProducts) => [...prevProducts, newProduct]);
    handleClose();
  };

  return (
    <PageContainer>
      <Typography variant="h4" fontWeight="bold" mb={1}>
        {machine.name}
      </Typography>

      <Typography color="text.secondary" mb={1}>
        {machine.location}
      </Typography>

      <Typography mb={2}>Status: {machine.status}</Typography>

      <Button variant="contained" sx={{ mb: 2 }} onClick={handleOpen}>
        Add Product
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <div style={{ padding: 20, width: 320 }}>
          <Typography variant="h6" mb={2}>
            Add Product
          </Typography>

          <TextField
            label="Product Name"
            fullWidth
            margin="dense"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <TextField
            label="Price"
            type="number"
            fullWidth
            margin="dense"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
        
          />

          <TextField
            label="Stock"
            type="number"
            fullWidth
            margin="dense"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
       
          />

          <Button
            variant="contained"
            sx={{ mt: 2, mr: 1 }}
            onClick={handleAdd}
            disabled={!isFormValid}
          >
            Add
          </Button>

          <Button sx={{ mt: 2 }} onClick={handleClose}>
            Cancel
          </Button>
        </div>
      </Dialog>

      <ProductTable products={products} />
    </PageContainer>
  );
};

export default MachineDetailsClient;