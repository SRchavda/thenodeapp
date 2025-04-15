import mongoose, { Schema, Document, Types } from "mongoose";
import Order from "../../interfaces/order";

interface OrderDocument extends Omit<Order, "id">, Document {
  _id: Types.ObjectId; // Override the id property to match the type in Order
}

const orderSchema = new Schema<OrderDocument>({
  _id: { type: mongoose.Schema.Types.ObjectId, required: true, auto: true },
  customerId: { type: String, required: true },
  productId: { type: String, required: true },
  platform: {
    type: String,
    enum: ["Website", "Instagram", "WhatsApp"],
    required: true,
  },
  quantity: { type: Number, required: true },
  total: { type: Number, required: true },
  date: { type: String, required: true },
  couponCode: { type: String, required: false },
  discount: { type: Number, required: false },
});

const OrderModel = mongoose.model<OrderDocument>("Order", orderSchema);

export default OrderModel;
