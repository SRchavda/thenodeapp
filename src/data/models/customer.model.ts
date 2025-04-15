import mongoose, { Schema, Document, Types } from "mongoose";
import Customer from "../../interfaces/customer";

interface CustomerDocument extends Omit<Customer, "id">, Document {
  _id: Types.ObjectId; // Override the id property to match the type in Customer
}

const customerSchema = new Schema<CustomerDocument>({
  _id: { type: mongoose.Schema.Types.ObjectId, required: true, auto: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  address: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: String, required: true },
  },
});

const CustomerModel = mongoose.model<CustomerDocument>(
  "Customer",
  customerSchema
);

export default CustomerModel;
