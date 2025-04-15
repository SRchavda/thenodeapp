interface Product {
  id: string;
  name: string;
  compareAtPrice: number;
  price: number;
  description: string;
  image?: string[];
  stock: number;
  categories: string[];
  weight?: number;
  dimensions?: {
    length: number;
    width: number;
    height: number;
  };
  variants?: string[];
  color?: string[];
  tags?: string[];
}
export default Product;