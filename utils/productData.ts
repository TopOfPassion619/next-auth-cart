export interface Products {
  id: number;
  name: string;
  price: number;
  rate?: number;
  image: string;
}

export const featuredProducts: Products[] = [
  {
    id: 1,
    name: 'Modern Sofa',
    price: 499.99,
    rate: 5.0,
    image: '/assets/img/hero-img1.png',
  },
  {
    id: 2,
    name: 'Wooden Dining Table',
    price: 799.99,
    rate: 4.6,
    image: '/assets/img/furnitures/furniture4.png',
  },
  {
    id: 3,
    name: 'Ergonomic Office Chair',
    price: 259.99,
    rate: 4.3,
    image: '/assets/img/hero-img3.png',
  },
];

export interface ReducedProduct extends Products {
  originalPrice: number;
  discountedPrice: number;
  isLimitedTimeOffer?: boolean;
  discountPercentage?: number;
  inStock?: boolean;
}

export const reducedProducts: ReducedProduct[] = [
  {
    id: 101,
    name: "Luxury Sectional Sofa",
    price: 899.99,
    originalPrice: 1299.99,
    discountedPrice: 899.99,
    image: "/assets/img/furnitures/furniture1.png",
    discountPercentage: 31,
    isLimitedTimeOffer: true,
    inStock: true,
  },
  {
    id: 102,
    name: "Mid-Century Accent Chair",
    price: 179.99,
    originalPrice: 249.99,
    discountedPrice: 179.99,
    image: "/assets/img/furnitures/furniture2.png",
    discountPercentage: 28,
    inStock: true,
  },
  {
    id: 103,
    name: "Convertible Sleeper Bed",
    price: 699.99,
    originalPrice: 999.99,
    discountedPrice: 699.99,
    image: "/assets/img/furnitures/furniture3.png",
    discountPercentage: 30,
    isLimitedTimeOffer: true,
    inStock: true,
  },
  {
    id: 104,
    name: "Rustic Bookshelf",
    price: 129.99,
    originalPrice: 189.99,
    discountedPrice: 129.99,
    image: "/assets/img/furnitures/furniture4.png",
    discountPercentage: 32,
    inStock: false,
  },
  {
    id: 105,
    name: "Modern TV Stand",
    price: 249.99,
    originalPrice: 349.99,
    discountedPrice: 249.99,
    image: "/assets/img/furnitures/furniture5.png",
    discountPercentage: 29,
    isLimitedTimeOffer: false,
    inStock: true,
  },
  {
    id: 106,
    name: "Ergonomic Study Desk",
    price: 219.99,
    originalPrice: 299.99,
    discountedPrice: 219.99,
    image: "/assets/img/furnitures/furniture6.png",
    discountPercentage: 27,
    inStock: true,
  },
  {
    id: 107,
    name: "Vintage Coffee Table",
    price: 159.99,
    originalPrice: 229.99,
    discountedPrice: 159.99,
    image: "/assets/img/hero-img1.png",
    discountPercentage: 30,
    isLimitedTimeOffer: true,
    inStock: true,
  },
  {
    id: 108,
    name: "Compact Shoe Cabinet",
    price: 89.99,
    originalPrice: 129.99,
    discountedPrice: 89.99,
    image: "/assets/img/hero-img2.png",
    discountPercentage: 31,
    inStock: false,
  }
]
