import { Machine } from "@/types"
import { Card, CardContent, Chip, Typography } from "@mui/material"
import Link from "next/link"

type MachineCardProps = {
  machine: Machine;
};


const MachineCard = ({machine}:MachineCardProps) => {
  return (
    <Link href={`/machines/${machine.id}`}
    style={{textDecoration: 'none', display:'block'}}
    >
  <Card
  sx={{cursor: 'pointer', '&:hover' : {boxShadow:6}}}
  >
    <CardContent>
      <Typography variant="h6">
        {machine.name}
      </Typography>
      <Typography color="text.secondary">
        {machine.location}
      </Typography>
     <Chip
     label={machine.status}
     color={machine.status === "online" ? 'success' : 'error'}
     sx={{width:'fit-content', textTransform:'capitalize'}}
/>      <Typography>
        Products: {machine.products.length}
      </Typography>
    </CardContent>
  </Card>
  </Link>
  )
}

export default MachineCard