export const GET_MACHINES = `
  query GetMachines {
     
  machines {
  id
  name
  location
  status
  products {
  id
  name
  price
  stock
  
  }
  
  }
  
  }
`;

export const GET_MACHINE_BY_ID = `
query GetMachineById($id: ID!) {
machine(id:$id){
id
      name
      location
      status
      products {
        id
        name
        price
        stock
      }


}}



`;
