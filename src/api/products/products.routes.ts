import express, { Request, Response } from 'express';
import ProductService from '../../services/product.service';
const router = express.Router();

router.post('/', async (req: Request, res: Response) => {
  try {
    const newProduct = await ProductService.createProduct(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ error: 'Failed to create product' });
  }
});

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const product = await ProductService.getProductById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
  } catch (error) {
    console.error('Error getting product:', error);
    res.status(500).json({ error: 'Failed to get product' });
  }
});

export default router;