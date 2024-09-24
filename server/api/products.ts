// server/api/products.ts

import type { Product } from "~/types";
import { Category } from "~/types";  // Import the enum

// Mock API to return products
export default defineEventHandler(() => {
  const products: Product[] = [
    {
      id: 1,
      title: 'The Great Gatsby',
      price: 15.99,
      description: 'A classic novel by F. Scott Fitzgerald about the American dream.',
      category: Category.Books,
      image: '/images/gatsby.jpg',
      rating: {
        rate: 4.7,
        count: 5300,
      },
      quantity: 25
    },
    {
      id: 2,
      title: 'To Kill a Mockingbird',
      price: 12.99,
      description: 'Harper Lee’s timeless tale of a young girl growing up in the South.',
      category: Category.Books,
      image: '/images/mockingbird.jpg',
      rating: {
        rate: 4.8,
        count: 8700,
      },
      quantity: 15
    },
    {
      id: 3,
      title: '1984',
      price: 18.99,
      description: 'George Orwell’s dystopian masterpiece about a world under totalitarian rule.',
      category: Category.Books,
      image: '/images/1984.jpg',
      rating: {
        rate: 4.6,
        count: 9900,
      },
      quantity: 12
    },
    {
      id: 4,
      title: 'Moby Dick',
      price: 14.99,
      description: 'Herman Melville’s epic tale of obsession and revenge at sea.',
      category: Category.Books,
      image: '/images/mobydick.jpg',
      rating: {
        rate: 4.2,
        count: 4700,
      },
      quantity: 8
    },
    {
      id: 5,
      title: 'Pride and Prejudice',
      price: 11.99,
      description: 'Jane Austen’s romantic novel about manners and matrimonial machinations.',
      category: Category.Books,
      image: '/images/prideprejudice.jpg',
      rating: {
        rate: 4.9,
        count: 10200,
      },
      quantity: 20
    },
    {
      id: 6,
      title: 'The Catcher in the Rye',
      price: 13.49,
      description: 'J.D. Salinger’s classic about teenage alienation and angst.',
      category: Category.Books,
      image: '/images/catcher.jpg',
      rating: {
        rate: 4.1,
        count: 6200,
      },
      quantity: 17
    },
    {
      id: 7,
      title: 'The Hobbit',
      price: 16.99,
      description: 'J.R.R. Tolkien’s fantasy adventure that precedes The Lord of the Rings.',
      category: Category.Books,
      image: '/images/hobbit.jpg',
      rating: {
        rate: 4.8,
        count: 12800,
      },
      quantity: 22
    },
    {
      id: 8,
      title: 'War and Peace',
      price: 22.99,
      description: 'Leo Tolstoy’s historical epic about Russia during the Napoleonic era.',
      category: Category.Books,
      image: '/images/warpeace.jpg',
      rating: {
        rate: 4.3,
        count: 3800,
      },
      quantity: 6
    },
    {
      id: 9,
      title: 'Crime and Punishment',
      price: 19.49,
      description: 'Fyodor Dostoevsky’s psychological novel about guilt and redemption.',
      category: Category.Books,
      image: '/images/crimepunishment.png',
      rating: {
        rate: 4.5,
        count: 5200,
      },
      quantity: 14
    },
    {
      id: 10,
      title: 'The Odyssey',
      price: 17.99,
      description: 'Homer’s ancient Greek epic about the adventures of Odysseus.',
      category: Category.Books,
      image: '/images/odyssey.jpg',
      rating: {
        rate: 4.7,
        count: 7500,
      },
      quantity: 18
    },
    {
      id: 11,
      title: 'The Brothers Karamazov',
      price: 20.99,
      description: 'A profound exploration of faith, doubt, and family by Fyodor Dostoevsky.',
      category: Category.Books,
      image: '/images/karamazov.jpg',
      rating: {
        rate: 4.6,
        count: 4000,
      },
      quantity: 10
    },
    {
      id: 12,
      title: 'Don Quixote',
      price: 21.99,
      description: 'Miguel de Cervantes’ satirical tale of a man who becomes a knight.',
      category: Category.Books,
      image: '/images/quixote.jpg',
      rating: {
        rate: 4.4,
        count: 4500,
      },
      quantity: 9
    },
    {
      id: 13,
      title: 'The Divine Comedy',
      price: 24.99,
      description: 'Dante Alighieri’s epic poem exploring the afterlife and human destiny.',
      category: Category.Books,
      image: '/images/divinecomedy.jpg',
      rating: {
        rate: 4.9,
        count: 3600,
      },
      quantity: 7
    },
    {
      id: 14,
      title: 'Frankenstein',
      price: 12.99,
      description: 'Mary Shelley’s groundbreaking novel of scientific ambition and horror.',
      category: Category.Books,
      image: '/images/frankenstein.jpg',
      rating: {
        rate: 4.5,
        count: 8400,
      },
      quantity: 13
    },
    {
      id: 15,
      title: 'Brave New World',
      price: 16.49,
      description: 'Aldous Huxley’s vision of a future dystopia ruled by technology and control.',
      category: Category.Books,
      image: '/images/bravenewworld.jpg',
      rating: {
        rate: 4.4,
        count: 5300,
      },
      quantity: 11
    },
    {
      id: 16,
      title: 'The Lord of the Rings: The Fellowship of the Ring',
      price: 19.99,
      description: 'The first book in J.R.R. Tolkien’s epic fantasy series.',
      category: Category.Books,
      image: '/images/fellowship.gif',
      rating: {
        rate: 4.9,
        count: 21000,
      },
      quantity: 30
    },
    {
      id: 17,
      title: 'The Lord of the Rings: The Two Towers',
      price: 19.99,
      description: 'The second book in J.R.R. Tolkien’s epic fantasy series.',
      category: Category.Books,
      image: '/images/twotowers.gif',
      rating: {
        rate: 4.9,
        count: 18500,
      },
      quantity: 25
    },
    {
      id: 18,
      title: 'The Lord of the Rings: The Return of the King',
      price: 19.99,
      description: 'The final book in J.R.R. Tolkien’s epic fantasy series.',
      category: Category.Books,
      image: '/images/returnking.gif',
      rating: {
        rate: 4.9,
        count: 23000,
      },
      quantity: 27
    },
    {
      id: 19,
      title: 'The Iliad',
      price: 17.99,
      description: 'Homer’s ancient Greek epic about the Trojan War.',
      category: Category.Books,
      image: '/images/iliad.jpg',
      rating: {
        rate: 4.6,
        count: 5600,
      },
      quantity: 15
    },
    {
      id: 20,
      title: 'The Picture of Dorian Gray',
      price: 13.49,
      description: 'Oscar Wilde’s philosophical novel about vanity and corruption.',
      category: Category.Books,
      image: '/images/doriangray.jpg',
      rating: {
        rate: 4.5,
        count: 6200,
      },
      quantity: 14
    },
    {
      id: 21,
      title: 'Jane Eyre',
      price: 15.49,
      description: 'Charlotte Brontë’s novel about resilience and love in a young orphan’s life.',
      category: Category.Books,
      image: '/images/janeeyre.jpg',
      rating: {
        rate: 4.8,
        count: 7500,
      },
      quantity: 22
    },
    {
      id: 22,
      title: 'Wuthering Heights',
      price: 12.99,
      description: 'Emily Brontë’s intense and passionate tale of love and revenge.',
      category: Category.Books,
      image: '/images/wutheringheights.webp',
      rating: {
        rate: 4.4,
        count: 6700,
      },
      quantity: 18
    },
    {
      id: 111,
      title: 'Florg Backpack',
      price: 19.99,
      description: 'Store all the important things.',
      category: Category.Electronics,  // Use the enum value here
      image: '/images/product1.jpg',
      rating: {
        rate: 4.5,
        count: 120,
      },
      quantity: 10
    },
    {
      id: 112,
      title: 'Merch Shirt',
      price: 29.99,
      description: 'This is the official shirt of the UVic Bookstore',
      category: Category.Jewelery,  // Use the enum value here
      image: '/images/product2.jpg',
      rating: {
        rate: 4.0,
        count: 85,
      },
      quantity: 5
    },
  ];

  return products;
});