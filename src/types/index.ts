export type Product = {
  id: string;
  name:string;
  price:number;
  stock:number;
  image?: string;
}

export type Machine = {
  id: string;
  name: string;
  location: string;
  status: 'online' | 'offline';
  products: Product[];
}