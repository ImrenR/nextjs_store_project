import MachineCard from "@/components/dashboard/MachineCard";
import SummaryCard from "@/components/dashboard/SummaryCard";
import { machines } from "@/lib/mock/data";
import { Container, Grid, Typography } from "@mui/material";

const DashboardPage = () => {

const totalMachines = machines.length;
const onlineStockMachines = machines.filter((machine)=> 
machine.status === 'online').length;
const lowStockMachines = machines.map((machine)=>
machine.products.filter((product)=> product.stock <=3)
).length;

  return (
 <Container sx={{py:6}}>
  <Typography variant="h4" fontWeight="bold">
    Smart vending Machine
  </Typography>
 <Grid container spacing={2} mb={4}>
<Grid size={{xs:12, md:4}}>
  <SummaryCard title='Total Machines' value={totalMachines}/>
</Grid>
<Grid size={{xs:12, md:4}}>
  <SummaryCard title='Online Machines' value={onlineStockMachines}/>
</Grid>
<Grid size={{xs:12, md:4}}>
  <SummaryCard title='Low Stock Machines' value={lowStockMachines}/>
</Grid>

 </Grid>


 <Typography variant="h5" mb={2}>
  Machines
 </Typography>

 <Grid container spacing={2}>
{machines.map((machine)=>(
  <Grid key={machine.id} size={{xs:12, md:6}}>
    <MachineCard machine={machine}/>
  </Grid>
))}
 </Grid>
 </Container>
  )
}

export default DashboardPage;