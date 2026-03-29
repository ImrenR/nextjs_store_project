import { Machine } from "@/types"
import { Card, CardContent, Chip, Stack, Typography } from "@mui/material"

type MachineCardProps = {
  machine: Machine;};

const MachineCard = ({machine}:MachineCardProps) => {
  return (
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
  color={machine.status === 'online'
    ? 'success'
    : 'error'
  }
  sx={{width:'fit-content', textTransform:'capitalize'}}
  />
  <Typography variant="body2">
     Products : {machine.products.length}
  </Typography>
</Stack>
    </CardContent>
  </Card>
  )
}

export default MachineCard