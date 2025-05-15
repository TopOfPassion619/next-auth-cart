export interface Products {
  id: number;
  name: string;
  price: number;
  image: string;
}

export const featuredProducts: Products[] = [
  {
    id: 1,
    name: 'Modern Sofa',
    price: 499.99,
    image: '/assets/img/hero-img1.png',
  },
  {
    id: 2,
    name: 'Wooden Dining Table',
    price: 799.99,
    image: '/assets/img/hero-img2.png',
  },
  {
    id: 3,
    name: 'Ergonomic Office Chair',
    price: 259.99,
    image: '/assets/img/hero-img3.png',
  },
];

export const reducedProducts: Products[] = [
  {
    id: 1,
    name: "Product1",
    price: 120,
    image: "reduced Product",
  }
]
