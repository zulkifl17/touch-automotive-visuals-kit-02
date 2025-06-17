
export interface ServicePackage {
  id: string;
  title: string;
  vehicleModels: string[];
  priceLKR: number;
  description: string;
  heroImage: string;
  inclusions: string[];
}

export interface BookingForm {
  name: string;
  vehicle: string;
  branch: string;
  whatsapp: string;
  preferredDate: string;
  preferredTime: string;
}
