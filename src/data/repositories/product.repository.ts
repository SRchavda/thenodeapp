import ProductModel from '../models/product.model';
import Product from '../../interfaces/product';

class ProductRepository {
  async create(product: Product): Promise<Product> {
    const newProduct = new ProductModel(product);
    return await newProduct.save();
  }

  async findById(id: string): Promise<Product | null> {
    return await ProductModel.findOne({ id });
  }
}

export default new ProductRepository();