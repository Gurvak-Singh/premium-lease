export interface Property {
  id: string;
  title: string;
  type: 'Apartment' | 'Townhouse' | 'Commercial';
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  imageUrl: string;
  description?: string;
  features?: string[];
  available?: boolean;
}