import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';
import { Recipe } from './Recipe.js';
import { Diet } from './Diet.js';

export const RecipeDiet = sequelize.define('RecipesDiets', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
});

Recipe.belongsToMany(Diet, {
    through: RecipeDiet
});

Diet.belongsToMany(Recipe, {
    through: RecipeDiet
});