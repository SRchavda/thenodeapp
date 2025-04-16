import OrderRepository from '../data/repositories/order.repository';
import Order from '../interfaces/order';
import CustomerService from './customer.service';
import ProductService from './product.service';

class OrderService {
  async createOrder(orderData: Order): Promise<Order> {
    const customer = await CustomerService.getCustomerById(orderData.customerId);
    if (!customer) {
      throw new Error('Customer not found');
    }
    const product = await ProductService.getProductById(orderData.productId);
    if (!product) {
        throw new Error('Product not found');
    }
    return OrderRepository.create(orderData);
  }

  async getOrderById(id: string): Promise<Order | null> {
      return OrderRepository.findById(id);
  }

  async getAllOrders(): Promise<Order[]> {
    return OrderRepository.findAll();
  }
}

export default new OrderService();