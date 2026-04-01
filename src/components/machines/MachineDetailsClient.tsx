"use client"

import { Machine, Product } from "@/types"
import { Button, Container, Typography } from "@mui/material";
import ProductTable from "./ProductTable";
import { useState } from "react";

type MachineDetailsClientProps = {
  machine: Machine;
}

const MachineDetailsClient = ({machine}:MachineDetailsClientProps) => {
  
  const [products, setProducts] = useState<Product[]>(machine.products)
  
  const handleButton = ()=> {
   
    const newProduct: Product = {
      id: crypto.randomUUID(),
      name: "New Product",
      price: 2.5,
      stock: 5,
    };

    setProducts((p) => [...p, newProduct]);
  };
  
  
  return (
    <Container sx={{py:4}}>
<Typography variant="h4" mb={1}>
  {machine.name}
</Typography>
<Typography color="text.secondary" mb={1}>
  {machine.location}
</Typography>
<Typography mb={2}>
 Status : {machine.status}
</Typography>

<Button variant="contained" sx={{mb:2}}
onClick={handleButton}>
  Add Product
</Button>

<ProductTable products={products}/>
    </Container>
  )
}

export default MachineDetailsClient