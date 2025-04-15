import express, { Request, Response } from 'express';
import OrderService from '../../services/order.service';
const router = express.Router();

router.post('/', async (req: Request, res: Response) => {
  try {
    const newOrder = await OrderService.createOrder(req.body);
    res.status(201).json(newOrder);
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ error: 'Failed to create order' });
  }
});

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const order = await OrderService.getOrderById(req.params.id);
    if (order) {
        res.json(order);
    } else {
      res.status(404).json({ error: 'Order not found' });
    }
  } catch (error) {
    console.error('Error getting order:', error);
    res.status(500).json({ error: 'Failed to get order' });
  }
});
// ... other routes

export default router;