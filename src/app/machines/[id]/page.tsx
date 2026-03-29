import { Container, Typography } from '@mui/material';
import { notFound } from 'next/navigation';
import { machines } from '@/lib/mock/data';
import MachineHeader from '@/components/machines/MachineHeader';
import ProductTable from '@/components/machines/ProductTable';

type MachineDetailsPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function MachineDetailsPage({
  params,
}: MachineDetailsPageProps) {
  const { id } = await params;

  const machine = machines.find((machine) => machine.id === id);

  if (!machine) {
    notFound();
  }

  return (
    <Container sx={{ py: 4 }}>
      <MachineHeader machine={machine} />

      <Typography variant="h5" fontWeight="bold" mb={2}>
        Inventory
      </Typography>

      <ProductTable products={machine.products} />
    </Container>
  );
}