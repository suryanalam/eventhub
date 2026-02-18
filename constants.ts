
import { Service, ServiceCategory } from './types';

export const MOCK_SERVICES: Service[] = [
  {
    id: '1',
    name: 'The Grand Ballroom',
    category: ServiceCategory.VENUE,
    price: 45000,
    rating: 4.8,
    reviewsCount: 124,
    location: 'Indiranagar, Bangalore',
    image: 'https://picsum.photos/seed/venue1/800/600',
    description: 'A luxurious ballroom perfect for weddings and large corporate events. Features state-of-the-art acoustics and mood lighting.',
    features: ['Valet Parking', 'AC Hall', 'Power Backup', 'In-house Catering']
  },
  {
    id: '2',
    name: 'Pixel Perfect Frames',
    category: ServiceCategory.PHOTOGRAPHY,
    price: 15000,
    rating: 4.9,
    reviewsCount: 89,
    location: 'Koramangala, Bangalore',
    image: 'https://picsum.photos/seed/photo1/800/600',
    description: 'Capturing your candid moments with artistic precision. Specialized in wedding and pre-wedding shoots.',
    features: ['Drone Shots', '4K Video', 'Candid Experts', 'Fast Delivery']
  },
  {
    id: '3',
    name: 'Spice Route Catering',
    category: ServiceCategory.CATERING,
    price: 800,
    rating: 4.7,
    reviewsCount: 210,
    location: 'HSR Layout, Bangalore',
    image: 'https://picsum.photos/seed/food1/800/600',
    description: 'Authentic multi-cuisine catering service. We pride ourselves on hygiene and taste.',
    features: ['Live Counters', 'Veg & Non-Veg', 'Customizable Menu', 'Premium Cutlery']
  },
  {
    id: '4',
    name: 'Bloom Decorators',
    category: ServiceCategory.DECORATION,
    price: 25000,
    rating: 4.6,
    reviewsCount: 56,
    location: 'Whitefield, Bangalore',
    image: 'https://picsum.photos/seed/decor1/800/600',
    description: 'Transforming spaces into dreamscapes. We specialize in floral and theme-based decorations.',
    features: ['Theme Design', 'Eco-friendly', 'Stage Setup', 'Lighting Effects']
  },
  {
    id: '5',
    name: 'Skylight Rooftop',
    category: ServiceCategory.VENUE,
    price: 30000,
    rating: 4.5,
    reviewsCount: 78,
    location: 'MG Road, Bangalore',
    image: 'https://picsum.photos/seed/venue2/800/600',
    description: 'Breathtaking city views from our premium rooftop lounge. Ideal for cocktail parties.',
    features: ['Open Air', 'Bar Counter', 'DJ System', 'Sunset View']
  },
  {
    id: '6',
    name: 'Flashback Studio',
    category: ServiceCategory.PHOTOGRAPHY,
    price: 12000,
    rating: 4.4,
    reviewsCount: 45,
    location: 'Jayanagar, Bangalore',
    image: 'https://picsum.photos/seed/photo2/800/600',
    description: 'High-energy photography for birthday parties and small gatherings.',
    features: ['Photo Booth', 'Instant Prints', 'Social Media Edits']
  }
];

export const CATEGORIES = [
  { id: ServiceCategory.VENUE, label: 'Venues', icon: '🏛️' },
  { id: ServiceCategory.PHOTOGRAPHY, label: 'Photography', icon: '📸' },
  { id: ServiceCategory.CATERING, label: 'Catering', icon: '🍲' },
  { id: ServiceCategory.DECORATION, label: 'Decor', icon: '✨' },
  { id: ServiceCategory.MUSIC, label: 'Music', icon: '🎸' },
  { id: ServiceCategory.PLANNER, label: 'Planners', icon: '📋' }
];
