import { Recipe } from "../models/Recipe.js";
import { Diet } from "../models/Diet.js";

export const orderByHealthscore = async (req, res) => {
    try {
        const { orderBy } = req.query
        const { filterExist, data } = req.body

        if (orderBy === "ASC") {
            if (filterExist) {
                data.sort((a, b) => a.healthscore - b.healthscore)
                res.json(data)
            }
            if (!filterExist) {
                const allRecipes = await Recipe.findAll({
                    include: [{
                        model: Diet
                    }]
                });
                allRecipes.sort((a, b) => a.healthscore - b.healthscore)
                if (allRecipes.length === 0) return res.status(404).json({ message: "Recipes not found" });
                res.json(allRecipes)
            }
        }

        if (orderBy === "DESC") {
            if (filterExist) {
                data.sort((a, b) => b.healthscore - a.healthscore)
                res.json(data)
            }
            if (!filterExist) {
                const allRecipes = await Recipe.findAll({
                    include: [{
                        model: Diet
                    }]
                });
                allRecipes.sort((a, b) => b.healthscore - a.healthscore)
                if (allRecipes.length === 0) return res.status(404).json({ message: "Recipes not found" });
                res.json(allRecipes)
            }
        }
    } catch (error) {
        return res.status(500), json({ message: error.message });
    }
};