
export enum ServiceCategory {
  VENUE = 'Venue',
  PHOTOGRAPHY = 'Photography',
  CATERING = 'Catering',
  DECORATION = 'Decoration',
  MUSIC = 'Music & DJ',
  PLANNER = 'Event Planner'
}

export interface Service {
  id: string;
  name: string;
  category: ServiceCategory;
  price: number;
  rating: number;
  reviewsCount: number;
  location: string;
  image: string;
  description: string;
  features: string[];
}

export interface CartItem extends Service {
  bookingDate?: string;
}

export interface User {
  name: string;
  location: string;
}
