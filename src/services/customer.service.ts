import CustomerRepository from '../data/repositories/customer.repository';
import Customer from '../interfaces/customer';

class CustomerService {
  async createCustomer(customerData: Customer): Promise<Customer> {
    return CustomerRepository.create(customerData);
  }

  async getCustomerById(id: string): Promise<Customer | null> {
    return CustomerRepository.findById(id);
  }
}

export default new CustomerService();