import { Recipe } from "../models/Recipe.js";
import { Diet } from "../models/Diet.js";

export const getRecipes = async (req, res) => {
    try {
        const allRecipes = await Recipe.findAll({
            include: [{
                model: Diet
            }]
        });
        if (allRecipes.length === 0) return res.status(404).json({ message: "Recipes not found" });
        res.json(allRecipes);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    };
};

export const getRecipe = async (req, res) => {
    try {
        const { id } = req.params;
        const recipe = await Recipe.findOne({
            where: {
                id
            },
            include: {
                model: Diet
            },
        });
        if (!recipe) return res.status(404).json({ message: "Recipe not found" });
        res.json(recipe);
    } catch (error) {
        res.status(500).json({ message: error.message });
    };
};

export const createRecipe = async (req, res) => {
    try {
        const { name, summary, healthscore, readyInMinutes, servings, ingredients, steps, image, dietsId } = req.body;
        if (
            typeof name === 'string' &&
            typeof summary === 'string' &&
            typeof healthscore === 'number' &&
            typeof readyInMinutes === 'number' &&
            typeof servings === 'number' &&
            (Array.isArray(ingredients) && ingredients.length > 0) &&
            (Array.isArray(steps) && steps.length > 0) &&
            typeof image === 'string' &&
            (Array.isArray(dietsId) && dietsId.length > 0)
        ) {
            const newRecipe = await Recipe.create({
                name: name.toLowerCase(),
                summary,
                healthscore,
                readyInMinutes,
                servings,
                ingredients,
                steps,
                image
            });
            const diets = await Diet.findAll({
                where: {
                    id: dietsId
                }
            });
            await newRecipe.addDiets(diets);
            res.json(newRecipe);
        } else {
            return res.status(422).json({ message: 'Unprocessable Entity' });
        };
    } catch (error) {
        return res.status(500).json({ message: error.message });
    };
    
};