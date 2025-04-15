import mongoose, { Schema, Document } from 'mongoose';
import Order from '../../interfaces/order';

interface OrderDocument extends Order, Document {}

const orderSchema = new Schema<OrderDocument>({
  id: { type: String, required: true, unique: true },
  customerId: { type: String, required: true },
  productId: { type: String, required: true },
  platform: { type: String, enum: ['Website', 'Instagram', 'WhatsApp'], required: true },
  quantity: { type: Number, required: true },
  total: { type: Number, required: true },
  date: { type: String, required: true },
  couponCode: { type: String, required: false },
  discount: { type: Number, required: false },
});

const OrderModel = mongoose.model<OrderDocument>('Order', orderSchema);

export default OrderModel;