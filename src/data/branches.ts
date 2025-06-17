
export interface Branch {
  id: string;
  name: string;
  address: string;
  phone: string;
}

export const BRANCHES: Branch[] = [
  {
    id: 'pitakotte',
    name: 'Eco Touch Pitakotte',
    address: 'No. 123, High Level Road, Pitakotte',
    phone: '+94 77 123 4567'
  },
  {
    id: 'battaramulla',
    name: 'Eco Touch Battaramulla',
    address: 'No. 456, Battaramulla Road, Battaramulla',
    phone: '+94 77 123 4568'
  },
  {
    id: 'boralesgamuwa',
    name: 'Eco Touch Boralesgamuwa',
    address: 'No. 789, Boralesgamuwa Road, Boralesgamuwa',
    phone: '+94 77 123 4569'
  }
];
