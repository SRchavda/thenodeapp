import express from 'express';
import customerRoutes from './api/customers/customers.routes';
import productRoutes from './api/products/products.routes';
import orderRoutes from './api/orders/orders.routes';

const app = express();

app.use(express.json());
app.use('/api/customers', customerRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

export default app;