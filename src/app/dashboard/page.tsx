import SummaryCard from '@/components/dashboard/SummaryCard';
import { machines } from '@/lib/mock/data';
import { Container, Grid, Typography } from '@mui/material';


const DashboardPge = () => {
   const totalMachines = machines.length;
  const onlineMachines = machines.filter(
    (machine) => machine.status === 'online'
  ).length;

  const lowStockProducts = machines.flatMap((machine) =>
    machine.products.filter((product) => product.stock <= 3)
  ).length;


  return (
    <Container sx={{py:4}}>
      <Typography variant='h4' fontWeight="bold" mb={3}>
        Smart Vending Dashboard
      </Typography>
      <Grid container spacing={2} mb={4}> 
         <Grid size={{ xs: 12, md: 4 }}>
          <SummaryCard title="Total Machines" value={totalMachines} />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <SummaryCard title="Online Machines" value={onlineMachines}/>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <SummaryCard title="Low Stock Products" value={lowStockProducts} />
        </Grid>
      </Grid>

      <Typography>
        Machines
      </Typography>
    </Container>
  )
}

export default DashboardPge