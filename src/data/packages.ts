
import { ServicePackage } from '../types/service';

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
  vehicleModels: ['Toyota Aqua'],
  priceLKR: 17500,
  description: 'Full Service with Oil & Oil Filter (OEM brands)',
  heroImage: '/img/packages/aqua.webp',
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
    'Hybrid system check',
  ],
};

export const SERVICE_PACKAGES = [PACKAGE_CHR, PACKAGE_AQUA];
