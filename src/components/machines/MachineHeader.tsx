import { Box, Chip, Stack, Typography } from '@mui/material';
import { Machine } from '@/types';

type MachineHeaderProps = {
  machine: Machine;
};

export default function MachineHeader({ machine }: MachineHeaderProps) {
  return (
    <Box mb={4}>
      <Stack spacing={1}>
        <Typography variant="h4" fontWeight="bold">
          {machine.name}
        </Typography>

        <Typography variant="body1" color="text.secondary">
          Location: {machine.location}
        </Typography>

        <Chip
          label={machine.status}
          color={machine.status === 'online' ? 'success' : 'error'}
          sx={{ width: 'fit-content', textTransform: 'capitalize' }}
        />
      </Stack>
    </Box>
  );
}