import { Router } from "express";
import { Recipe } from "./models/Recipe.js";
import { Diet } from "./models/Diet.js";
import { diets } from "./data/diets.js";
import fs from 'fs';

const router = Router();

const loadData = async (req, res) => {
    const processedDiets = [];
    for (let i = 0; i < diets.length; i++) {
        const diet = {
            name: diets[i],
        }
        processedDiets.push(diet);
    }
    await Diet.bulkCreate(processedDiets);

    const recipesJson = fs.readFileSync('./src/data/recipes.json');
    const recipes = JSON.parse(recipesJson);

    for (let i = 0; i < recipes.length; i++) {
        const obj = {};

        obj.name = recipes[i].name.toLowerCase();
        obj.summary = recipes[i].summary;
        obj.healthscore = recipes[i].healthscore;
        obj.readyInMinutes = recipes[i].readyInMinutes;
        obj.servings = recipes[i].servings;
        obj.ingredients = recipes[i].ingredients;
        obj.steps = recipes[i].steps;
        obj.image = recipes[i].image;

        const newRecipe = await Recipe.create(obj)
        const diets = await Diet.findAll({
            where: {
                name: recipes[i].diets
            }
        });

        await newRecipe.addDiets(diets);
    }

    res.json('Data loaded');
}

router.get('/loadData', loadData);

export default router;