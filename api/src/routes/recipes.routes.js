import { Router } from "express";
import { getRecipes, getRecipe, createRecipe } from "../controllers/recipes.controllers.js";

const router = Router();

router.get('/recipes', getRecipes);
router.get('/recipes/:id', getRecipe);
router.post('/recipes', createRecipe);

export default router;