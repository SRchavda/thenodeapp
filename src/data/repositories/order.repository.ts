import OrderModel from '../models/order.model';
import Order from '../../interfaces/order';

class OrderRepository {
  async create(order: Order): Promise<Order> {
    const newOrder = new OrderModel(order);
    return await newOrder.save();
  }

  async findById(id: string): Promise<Order | null> {
    return await OrderModel.findOne({ id });
  }
}

export default new OrderRepository();