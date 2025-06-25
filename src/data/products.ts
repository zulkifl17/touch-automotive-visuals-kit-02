
export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  description: string;
  image: string;
  inStock: boolean;
  features: string[];
}

export interface ProductCategory {
  id: string;
  name: string;
  description: string;
}

export const productCategories: ProductCategory[] = [
  {
    id: 'all',
    name: 'All Products',
    description: 'Browse all our eco-friendly automotive products'
  },
  {
    id: 'car-wash',
    name: 'Car Wash Products',
    description: 'Premium car washing solutions'
  },
  {
    id: 'interior-care',
    name: 'Interior Care',
    description: 'Products for interior cleaning and protection'
  },
  {
    id: 'exterior-care',
    name: 'Exterior Care',
    description: 'Paint protection and exterior maintenance'
  },
  {
    id: 'engine-care',
    name: 'Engine Care',
    description: 'Engine cleaning and maintenance products'
  },
  {
    id: 'accessories',
    name: 'Accessories',
    description: 'Essential automotive accessories'
  }
];

export const products: Product[] = [
  {
    id: 'wash-001',
    name: 'ECO Premium Car Shampoo',
    category: 'car-wash',
    price: 2500,
    originalPrice: 3000,
    description: 'Biodegradable car shampoo with advanced foam technology for gentle yet effective cleaning.',
    image: '/placeholder.svg',
    inStock: true,
    features: ['Biodegradable formula', 'Rich foam action', 'Paint-safe', '500ml bottle']
  },
  {
    id: 'wash-002',
    name: 'Waterless Car Wash Spray',
    category: 'car-wash',
    price: 1800,
    description: 'Eco-friendly waterless wash solution perfect for quick cleaning without water.',
    image: '/placeholder.svg',
    inStock: true,
    features: ['Water-free cleaning', 'Streak-free finish', 'Eco-friendly', '750ml spray bottle']
  },
  {
    id: 'interior-001',
    name: 'Dashboard & Plastic Cleaner',
    category: 'interior-care',
    price: 1500,
    description: 'Specialized cleaner for dashboard, plastic trim, and interior surfaces.',
    image: '/placeholder.svg',
    inStock: true,
    features: ['UV protection', 'Anti-static formula', 'Matte finish', '400ml bottle']
  },
  {
    id: 'interior-002',
    name: 'Leather Care Kit',
    category: 'interior-care',
    price: 3500,
    originalPrice: 4200,
    description: 'Complete leather cleaning and conditioning kit for premium interior care.',
    image: '/placeholder.svg',
    inStock: true,
    features: ['Cleaner & conditioner', 'Microfiber cloths', 'Leather protection', 'Complete kit']
  },
  {
    id: 'exterior-001',
    name: 'Ceramic Coating Spray',
    category: 'exterior-care',
    price: 4500,
    description: 'Easy-apply ceramic coating for long-lasting paint protection and shine.',
    image: '/placeholder.svg',
    inStock: true,
    features: ['6-month protection', 'Hydrophobic coating', 'UV protection', '250ml bottle']
  },
  {
    id: 'exterior-002',
    name: 'Premium Car Wax',
    category: 'exterior-care',
    price: 2800,
    description: 'High-quality carnauba wax for deep shine and paint protection.',
    image: '/placeholder.svg',
    inStock: false,
    features: ['Carnauba wax', 'Deep gloss finish', '3-month protection', '300g tin']
  },
  {
    id: 'engine-001',
    name: 'Engine Bay Cleaner',
    category: 'engine-care',
    price: 2200,
    description: 'Safe and effective engine bay degreaser and cleaner.',
    image: '/placeholder.svg',
    inStock: true,
    features: ['Degreasing action', 'Safe for plastics', 'Biodegradable', '500ml bottle']
  },
  {
    id: 'accessories-001',
    name: 'Microfiber Cloth Set',
    category: 'accessories',
    price: 1200,
    description: 'Premium microfiber cloths for streak-free cleaning and drying.',
    image: '/placeholder.svg',
    inStock: true,
    features: ['Ultra-soft fibers', 'Lint-free', 'Machine washable', '5-piece set']
  },
  {
    id: 'accessories-002',
    name: 'Foam Cannon Attachment',
    category: 'accessories',
    price: 5500,
    description: 'Professional foam cannon for pressure washers, creates thick cleaning foam.',
    image: '/placeholder.svg',
    inStock: true,
    features: ['Adjustable foam density', 'Brass fittings', 'Easy attachment', '1L capacity']
  },
  {
    id: 'wash-003',
    name: 'Tire & Rim Cleaner',
    category: 'car-wash',
    price: 1900,
    description: 'Powerful yet safe cleaner for tires and rims, removes brake dust and grime.',
    image: '/placeholder.svg',
    inStock: true,
    features: ['Brake dust removal', 'Safe for all rims', 'Non-acidic formula', '650ml spray']
  }
];
