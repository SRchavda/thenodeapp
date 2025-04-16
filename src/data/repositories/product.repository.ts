import ProductModel from "../models/product.model";
import Product from "../../interfaces/product";

class ProductRepository {
  async create(product: Product): Promise<Product> {
    const newProduct = new ProductModel(product);
    const savedProduct = await newProduct.save();
    return {
      id: savedProduct.id,
      ...savedProduct.toObject(),
    } as Product;
  }

  async findById(id: string): Promise<Product | null> {
    return await ProductModel.findOne({ id });
  }
}

export default new ProductRepository();
