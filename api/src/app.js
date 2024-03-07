import express from 'express';
import loadData from './loadData.js';
const app = express();

app.use(express.json())

app.use(loadData);

export default app;