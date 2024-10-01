export interface Product {
    id:          number;
    title:       string;
    price:       number;
    description: string;
    category:    Category;
    image:       string;
    rating:      Rating;
    quantity?: number
}

export enum Category {
    Books = "Books",
    ClassicBooks = "Classic Books",
    EssentialBooks = "Essential Books",
    FantasyBooks = "Fantasy Books",
    BronteBooks = "Brontë Books",
    Electronics = "Electronics",
    Jewelery = "Jewelery",
    Clothing = "Clothing",
}

export interface Rating {
    rate:  number;
    count: number;
}