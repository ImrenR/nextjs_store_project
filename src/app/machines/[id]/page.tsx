import MachineDetailsClient from "@/components/machines/MachineDetailsClient";
import { machines } from "@/lib/mock/data";
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
 <MachineDetailsClient machine={machine}/>
  )
}

export default MachineDetailsPage