import OrderModel from '../models/order.model';
import Order from '../../interfaces/order';

class OrderRepository {
  async create(order: Order): Promise<Order> {
    const newOrder = new OrderModel(order);
    const savedOrder = await newOrder.save();
    return {
      id: savedOrder.id,
      ...savedOrder.toObject(),
    } as Order;
  }

  async findById(id: string): Promise<Order | null> {
    return await OrderModel.findOne({ id });
  }

  async findAll(): Promise<Order[]> {
    return await OrderModel.find({});
  }
}

export default new OrderRepository();