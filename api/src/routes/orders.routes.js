import { Router } from "express";
import { orderByHealthscore } from "../controllers/orders.controllers.js";

const router = Router();

router.post('/order/healthscore', orderByHealthscore);


export default router;