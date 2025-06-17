
import { ServicePackage } from '../types';

export const PACKAGE_CHR: ServicePackage = {
  id: 'full-service-chr',
  title: 'Full Service – Toyota C‑HR',
  vehicleModels: ['Toyota C-HR'],
  priceLKR: 19900,
  description: 'Full Service with Oil & Oil Filter (OEM brands)',
  heroImage: '/img/packages/c-hr.webp',
  inclusions: [
    'Using original oil filter & Can Oil',
    'Engine degreasing',
    'Tar removing',
    'Under wash',
    'Body wash',
    'Vacuum interior',
    'Würth wax finish',
    'Brake fluid condition check',
    'Coolant condition check',
    'General inspection report',
    'Mechanical inspection report',
    'Würth door hinges treatment',
    'Würth battery terminal protection',
    'Full scanning report',
  ],
};

export const PACKAGE_AQUA: ServicePackage = {
  id: 'full-service-aqua',
  title: 'Full Service – Toyota Aqua',
  vehicleModels: ['Toyota Aqua', 'Toyota Prius'],
  priceLKR: 17500,
  description: 'Eco-Hybrid Full Service with Premium Care',
  heroImage: '/img/packages/aqua.webp',
  inclusions: [
    'Hybrid system inspection',
    'Using original oil filter & Eco Oil',
    'Engine degreasing',
    'Tar removing',
    'Under wash',
    'Body wash',
    'Vacuum interior',
    'Würth eco wax finish',
    'Brake fluid condition check',
    'Coolant condition check',
    'Battery health check',
    'Mechanical inspection report',
    'Würth door hinges treatment',
    'Full hybrid scanning report',
  ],
};

// Extended structure for the booking form
export const SERVICE_PACKAGES = [
  {
    ...PACKAGE_CHR,
    name: 'Full Service – Toyota C‑HR',
    price: {
      hatchback: 17500,
      sedan: 19900,
      suv: 22500,
      truck: 25000
    }
  },
  {
    ...PACKAGE_AQUA,
    name: 'Full Service – Toyota Aqua',
    price: {
      hatchback: 15000,
      sedan: 17500,
      suv: 20000,
      truck: 22500
    }
  }
];
