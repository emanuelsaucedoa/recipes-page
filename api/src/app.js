import express from 'express';
import loadData from './loadData.js';
import recipesRoutes from './routes/recipes.routes.js';
import ordersRoutes from './routes/orders.routes.js';
import filterRoutes from './routes/filters.routes.js';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json())

app.use(loadData);
app.use(recipesRoutes);
app.use(ordersRoutes);
app.use(filterRoutes);


export default app;