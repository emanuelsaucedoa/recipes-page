import { Router } from "express";
import { filterByDiets, filterBySearch } from "../controllers/filters.controllers.js";

const router = Router();

router.post('/filter/diets', filterByDiets);
router.get('/filter/search', filterBySearch);


export default router;