import { ServicePackage } from '../types';

export const PACKAGE_CHR: ServicePackage = {
  id: 'full-service-chr',
  title: 'Full Service –Diamond Shine Package',
  vehicleModels: ['Renault Kwid','Viva ELITE','Suzuki Celerio','KIA Picanto','Hyundai EON','Wagon R','Japan Alto','Suzuki Hustler'],
  priceLKR: 15900,
  description: 'Full Service with Oil & Oil Filter (OEM brands)',
  heroImage: 'https://abtmaruti.com/image/catalog/model-colours/alto/Alto800_Blazing_Red_new%20(1).jpg',
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
  title: 'Full Service – Platinum Protection Package',
  vehicleModels: ['Toyota Aqua', 'Toyota Prius', 'Toyota Vitz', 'Toyota Passo', 'Honda Fit GP5', 'Honda Grace', 'Toyota Axio'],
  priceLKR: 18900,
  description: 'Eco-Hybrid Full Service with Premium Care',
  heroImage: 'https://www.toyota-global.com/company/history_of_toyota/75years/vehicle_lineage/car/id60017505/images/m1.png',
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

// Premium packages for the packages selector
export const PREMIUM_PACKAGES = [PACKAGE_CHR, PACKAGE_AQUA];

// Extended structure for the booking form - keeping for backward compatibility
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
