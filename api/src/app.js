import express from 'express';
import loadData from './loadData.js';
import recipesRoutes from './routes/recipes.routes.js';
import ordersRoutes from './routes/orders.routes.js';

const app = express();

app.use(express.json())

app.use(loadData);
app.use(recipesRoutes);
app.use(ordersRoutes);

export default app;