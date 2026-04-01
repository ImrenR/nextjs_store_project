"use client"

import { Machine, Product } from "@/types"
import { Button, Container, Dialog, Typography } from "@mui/material";
import ProductTable from "./ProductTable";
import { useState } from "react";

type MachineDetailsClientProps = {
  machine: Machine;
}

const MachineDetailsClient = ({machine}:MachineDetailsClientProps) => {
  
  const [products, setProducts] = useState<Product[]>(machine.products)
  const [open, setOpen] = useState(false);

   
   
  
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
onClick={()=>setOpen(true)}>
  Add Product
</Button>
<Dialog open={open} onClose={() => setOpen(false)}>
  <div style={{ padding: 20 }}>Hello Dialog</div>
</Dialog>
<ProductTable products={products}/>
    </Container>
  )
}

export default MachineDetailsClient