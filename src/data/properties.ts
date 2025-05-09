import { Property } from '../types';

// Apartment properties
export const apartments: Property[] = [
  {
    id: 'apt-001',
    title: 'Modern Downtown Loft',
    type: 'Apartment',
    price: 2500,
    location: 'Downtown',
    bedrooms: 2,
    bathrooms: 2,
    squareFeet: 1200,
    imageUrl: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'apt-002',
    title: 'Luxury Highrise Apartment',
    type: 'Apartment',
    price: 3200,
    location: 'Financial District',
    bedrooms: 3,
    bathrooms: 2,
    squareFeet: 1500,
    imageUrl: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'apt-003',
    title: 'Cozy Studio Apartment',
    type: 'Apartment',
    price: 1800,
    location: 'Midtown',
    bedrooms: 1,
    bathrooms: 1,
    squareFeet: 800,
    imageUrl: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'apt-004',
    title: 'Riverside View Apartment',
    type: 'Apartment',
    price: 2800,
    location: 'Riverside',
    bedrooms: 2,
    bathrooms: 2,
    squareFeet: 1100,
    imageUrl: 'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'apt-005',
    title: 'Modern Garden Apartment',
    type: 'Apartment',
    price: 2200,
    location: 'Parkside',
    bedrooms: 2,
    bathrooms: 1,
    squareFeet: 950,
    imageUrl: 'https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

// Townhouse properties
export const townhouses: Property[] = [
  {
    id: 'twn-001',
    title: 'Classic Brownstone Townhouse',
    type: 'Townhouse',
    price: 4500,
    location: 'Historic District',
    bedrooms: 3,
    bathrooms: 2.5,
    squareFeet: 2200,
    imageUrl: 'https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'twn-002',
    title: 'Modern Family Townhome',
    type: 'Townhouse',
    price: 3800,
    location: 'Suburban Area',
    bedrooms: 4,
    bathrooms: 3,
    squareFeet: 2500,
    imageUrl: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'twn-003',
    title: 'Luxury Waterfront Townhouse',
    type: 'Townhouse',
    price: 5200,
    location: 'Waterfront',
    bedrooms: 4,
    bathrooms: 3.5,
    squareFeet: 3000,
    imageUrl: 'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'twn-004',
    title: 'Garden View Townhome',
    type: 'Townhouse',
    price: 3500,
    location: 'Garden District',
    bedrooms: 3,
    bathrooms: 2.5,
    squareFeet: 1800,
    imageUrl: 'https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

// Commercial properties
export const commercialProperties: Property[] = [
  {
    id: 'com-001',
    title: 'Downtown Office Suite',
    type: 'Commercial',
    price: 4800,
    location: 'Business District',
    bedrooms: 0,
    bathrooms: 2,
    squareFeet: 2500,
    imageUrl: 'https://images.pexels.com/photos/260931/pexels-photo-260931.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'com-002',
    title: 'Retail Storefront',
    type: 'Commercial',
    price: 3500,
    location: 'Shopping District',
    bedrooms: 0,
    bathrooms: 1,
    squareFeet: 1800,
    imageUrl: 'https://images.pexels.com/photos/264507/pexels-photo-264507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'com-003',
    title: 'Industrial Warehouse Space',
    type: 'Commercial',
    price: 5500,
    location: 'Industrial Park',
    bedrooms: 0,
    bathrooms: 2,
    squareFeet: 5000,
    imageUrl: 'https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'com-004',
    title: 'Modern Co-Working Space',
    type: 'Commercial',
    price: 3200,
    location: 'Innovation District',
    bedrooms: 0,
    bathrooms: 3,
    squareFeet: 2200,
    imageUrl: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

// Student properties
export const studentProperties: Property[] = [
  {
    id: 'stu-001',
    title: 'Campus View Apartment',
    type: 'Apartment',
    price: 1500,
    location: 'University Heights',
    bedrooms: 2,
    bathrooms: 1,
    squareFeet: 900,
    imageUrl: 'https://images.pexels.com/photos/1648771/pexels-photo-1648771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'stu-002',
    title: 'Student Living Townhouse',
    type: 'Townhouse',
    price: 2200,
    location: 'College Park',
    bedrooms: 4,
    bathrooms: 2,
    squareFeet: 1600,
    imageUrl: 'https://images.pexels.com/photos/1546166/pexels-photo-1546166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'stu-003',
    title: 'Scholar Studio Apartment',
    type: 'Apartment',
    price: 1200,
    location: 'Academic Village',
    bedrooms: 1,
    bathrooms: 1,
    squareFeet: 600,
    imageUrl: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

// Featured properties from all categories
export const featuredProperties: Property[] = [
  apartments[0],
  townhouses[0],
  commercialProperties[0],
  apartments[1],
  townhouses[1],
  studentProperties[0]
];

// All properties combined
export const allProperties: Property[] = [
  ...apartments,
  ...townhouses,
  ...commercialProperties,
  ...studentProperties
];