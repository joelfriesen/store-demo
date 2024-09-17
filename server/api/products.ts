// server/api/products.ts

import type { Product } from "~/types";
import { Category } from "~/types";  // Import the enum

// Mock API to return products
export default defineEventHandler(() => {
  const products: Product[] = [
    {
      id: 1,
      title: 'Product 1',
      price: 19.99,
      description: 'This is the first product description.',
      category: Category.Electronics,  // Use the enum value here
      image: '/images/product1.jpg',
      rating: {
        rate: 4.5,
        count: 120,
      },
      quantity: 10
    },
    {
      id: 2,
      title: 'Product 2',
      price: 29.99,
      description: 'This is the second product description.',
      category: Category.Jewelery,  // Use the enum value here
      image: '/images/product2.jpg',
      rating: {
        rate: 4.0,
        count: 85,
      },
      quantity: 5
    },
    {
      id: 3,
      title: 'Product 3',
      price: 39.99,
      description: 'This is the third product description.',
      category: Category.MenSClothing,  // Use the enum value here
      image: '/images/product3.jpg',
      rating: {
        rate: 3.8,
        count: 40,
      },
      quantity: 7
    }
  ];

  return products;
});