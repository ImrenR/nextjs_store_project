import { machines } from "@/lib/mock/data";
import { Container, Typography } from "@mui/material";
import { notFound } from "next/navigation";

 type Props = {
   params: Promise<{id:string}>}


const MachineDetailsPage = async ({params}:Props) => {
  
  const {id} = await params; // paramstan id yi destruct ettik

  // find the machines by id

  const machine = machines.find((u)=> u.id === id);

  if(!machine) {
    notFound();
  }
  
  
  return (
    <Container sx={{py:4}}>
      <Typography variant="h4" fontWeight="bold">
{machine.name}
      </Typography>
      <Typography color="text.secondary">
        {machine.location}
      </Typography>
      <Typography>
        {machine.status}
      </Typography>
    </Container>
  )
}

export default MachineDetailsPage