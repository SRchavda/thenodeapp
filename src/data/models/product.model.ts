import mongoose, { Schema, Document } from 'mongoose';
import Product from '../../interfaces/product';

interface ProductDocument extends Product, Document {}

const productSchema = new Schema<ProductDocument>({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  compareAtPrice: { type: Number, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  image: { type: [String], required: false },
  stock: { type: Number, required: true },
  categories: { type: [String], required: true },
  weight: { type: Number, required: false },
  dimensions: {
    length: { type: Number, required: false },
    width: { type: Number, required: false },
    height: { type: Number, required: false },
  },
  variants: { type: [String], required: false },
  color: { type: [String], required: false },
  tags: { type: [String], required: false },
});

const ProductModel = mongoose.model<ProductDocument>('Product', productSchema);

export default ProductModel;