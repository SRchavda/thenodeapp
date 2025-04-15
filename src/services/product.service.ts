import ProductRepository from '../data/repositories/product.repository';
import Product from '../interfaces/product';

class ProductService {
  async createProduct(productData: Product): Promise<Product> {
    return ProductRepository.create(productData);
  }

  async getProductById(id: string): Promise<Product | null> {
    return ProductRepository.findById(id);
  }
}

export default new ProductService();