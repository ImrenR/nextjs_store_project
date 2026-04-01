import { Machine } from "@/types"
import { Container, Typography } from "@mui/material";
import ProductTable from "./ProductTable";

type MachineDetailsClientProps = {
  machine: Machine;
}

const MachineDetailsClient = ({machine}:MachineDetailsClientProps) => {
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
<ProductTable products={machine.products}/>
    </Container>
  )
}

export default MachineDetailsClient