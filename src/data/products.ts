export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  features: string[];
  rating: number;
  reviews: number;
  stock: number;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Premium Wireless Headphones',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
    description: 'Experience crystal-clear sound with our premium wireless headphones. Features include active noise cancellation, 30-hour battery life, and premium comfort.',
    features: [
      'Active Noise Cancellation',
      '30-hour Battery Life',
      'Bluetooth 5.0',
      'Premium Comfort',
      'Built-in Microphone',
    ],
    rating: 4.5,
    reviews: 128,
    stock: 15,
  },
  {
    id: 2,
    name: 'Smart Watch Series 5',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500',
    description: 'Stay connected and track your fitness with our latest smart watch. Features include heart rate monitoring, GPS, and water resistance.',
    features: [
      'Heart Rate Monitoring',
      'GPS Tracking',
      'Water Resistant',
      'Sleep Tracking',
      'Smart Notifications',
    ],
    rating: 4.8,
    reviews: 256,
    stock: 20,
  },
  {
    id: 3,
    name: 'Professional DSLR Camera',
    price: 1299.99,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500',
    description: 'Capture stunning photos with our professional DSLR camera. Perfect for both beginners and professionals.',
    features: [
      '24.1MP Full-Frame Sensor',
      '4K Video Recording',
      'Dual Pixel Autofocus',
      'Built-in WiFi',
      'Weather Sealed Body',
    ],
    rating: 4.9,
    reviews: 342,
    stock: 8,
  },
  {
    id: 4,
    name: 'Gaming Laptop Pro',
    price: 1499.99,
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500',
    description: 'Powerful gaming laptop with high-end graphics and fast processing capabilities.',
    features: [
      'RTX 3070 Graphics',
      '16GB RAM',
      '1TB SSD',
      '144Hz Display',
      'RGB Keyboard',
    ],
    rating: 4.7,
    reviews: 189,
    stock: 12,
  },
  {
    id: 5,
    name: 'Wireless Earbuds',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=500',
    description: 'True wireless earbuds with premium sound quality and long battery life.',
    features: [
      'Active Noise Cancellation',
      '8-hour Battery Life',
      'Wireless Charging',
      'Water Resistant',
      'Touch Controls',
    ],
    rating: 4.6,
    reviews: 215,
    stock: 25,
  },
  {
    id: 6,
    name: 'Smart Home Hub',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=500',
    description: 'Control your entire smart home with this powerful hub. Compatible with all major smart home devices.',
    features: [
      'Voice Control',
      'Multiple Device Support',
      'Energy Monitoring',
      'Security Features',
      'Mobile App Control',
    ],
    rating: 4.4,
    reviews: 167,
    stock: 18,
  }
];

export const getProducts = () => products;
export const getProductById = (id: number) => products.find(product => product.id === id); 