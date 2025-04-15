import mongoose, { Schema, Document } from 'mongoose';
import Customer from '../../interfaces/customer';

interface CustomerDocument extends Customer, Document {}

const customerSchema = new Schema<CustomerDocument>({
  id: { type: String, required: true, unique: true },
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

const CustomerModel = mongoose.model<CustomerDocument>('Customer', customerSchema);

export default CustomerModel;