import CustomerModel from '../models/customer.model';
import Customer from '../../interfaces/customer';

class CustomerRepository {
  async create(customer: Customer): Promise<Customer> {
    const newCustomer = new CustomerModel(customer);
    return await newCustomer.save();
  }

  async findById(id: string): Promise<Customer | null> {
    return await CustomerModel.findOne({ id });
  }
}

export default new CustomerRepository();