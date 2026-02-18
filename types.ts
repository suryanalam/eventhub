
export enum ServiceCategory {
  VENUE = 'Venue',
  PHOTOGRAPHY = 'Photography',
  CATERING = 'Catering',
  DECORATION = 'Decoration',
  MUSIC = 'Music & DJ',
  PLANNER = 'Event Planner'
}

export interface City {
  id: string;
  name: string;
  state: string;
  illustration: string;
  lat: number;
  lng: number;
}

export interface Service {
  id: string;
  name: string;
  category: ServiceCategory;
  price: number;
  rating: number;
  reviewsCount: number;
  location: string;
  cityId: string;
  image: string;
  description: string;
  features: string[];
  isAvailable: boolean;
}

export interface CartItem extends Service {
  bookingDate?: string;
}

export interface User {
  name: string;
  location: string;
}
