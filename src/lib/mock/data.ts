import { Machine } from '@/types';

export const machines: Machine[] = [
  {
    id: '1',
    name: 'Machine Alpha',
    location: 'Porto Office',
    status: 'online',
    products: [
      { id: 'p1', name: 'Water', price: 1.2, stock: 10 },
      { id: 'p2', name: 'Chips', price: 1.8, stock: 3 },
    ],
  },
  {
    id: '2',
    name: 'Machine Beta',
    location: 'Lisbon Mall',
    status: 'offline',
    products: [
      { id: 'p3', name: 'Soda', price: 2.0, stock: 0 },
      { id: 'p4', name: 'Chocolate', price: 1.5, stock: 8 },
    ],
  },
];