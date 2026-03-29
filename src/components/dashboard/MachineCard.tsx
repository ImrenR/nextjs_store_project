import { Card, CardContent, Chip, Typography, Stack } from '@mui/material';
import { Machine } from '@/types';
import Link from 'next/link';

type MachineCardProps = {
  machine: Machine;
};

export default function MachineCard({ machine }: MachineCardProps) {
  return (
    <Link href={`/machines/${machine.id}`}
    style={{textDecoration : 'none', display : 'block'}}>
    <Card>
      <CardContent>
        <Stack spacing={1}>
          <Typography variant="h6" fontWeight="bold">
            {machine.name}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {machine.location}
          </Typography>

          <Chip
            label={machine.status}
            color={machine.status === 'online' ? 'success' : 'error'}
            sx={{ width: 'fit-content', textTransform: 'capitalize' }}
          />

          <Typography variant="body2">
            Products: {machine.products.length}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
    </Link>
  );
}