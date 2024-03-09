import { Recipe } from "../models/Recipe.js";
import { Diet } from "../models/Diet.js";
import { Op } from "sequelize";

export const filterByDiets = async (req, res) => {
    try {
        const { filterBy, recipes } = req.body;

        const dataFilter = recipes.filter((recipe) => {

            let isValid = false;

            for (let i = 0; i < recipe.diets.length; i++) {
                if (recipe.diets[i].name.includes(filterBy[0])) return isValid = true
            }

            return isValid;

        });

        res.json(dataFilter);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const filterBySearch = async (req, res) => {
    
    try {
        const { search } = req.query;
        const allRecipes = await Recipe.findAll({
            include: [{
                model: Diet
            }],
            where: {
                name: {
                    [Op.substring]: search.toLowerCase()
                } 
            }
        });
        if (allRecipes.length === 0) return res.status(404).json({ message: "Recipes not found" });
        res.json(allRecipes);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

}