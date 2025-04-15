import express, { Request, Response } from 'express';
import CustomerService from '../../services/customer.service';
const router = express.Router();

router.post('/', async (req: Request, res: Response) => {
  try {
    const newCustomer = await CustomerService.createCustomer(req.body);
    res.status(201).json(newCustomer);
  } catch (error) {
    console.error('Error creating customer:', error);
    res.status(500).json({ error: 'Failed to create customer' });
  }
});

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const customer = await CustomerService.getCustomerById(req.params.id);
    if (customer) {
        res.json(customer);
    } else {
      res.status(404).json({ error: 'Customer not found' });
    }
  } catch (error) {
    console.error('Error getting customer:', error);
    res.status(500).json({ error: 'Failed to get customer' });
  }
});

export default router;