import { Card, CardContent, Typography } from "@mui/material";


type SummaryCardProps = {
  title: string;
  value:number
}



const SummaryCard = ({title,value}:SummaryCardProps) => {


  return (
  <Card>
<CardContent>
  <Typography variant="body2" color="text.secondary">
    {title}
  </Typography>
  <Typography variant="h4" fontWeight="bold">
    {value}
  </Typography>
</CardContent>


  </Card>
  )
}

export default SummaryCard