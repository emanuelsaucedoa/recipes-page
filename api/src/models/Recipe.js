import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';

export const Recipe = sequelize.define('recipes', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    summary: {
        type: DataTypes.TEXT
    },
    healthscore: {
        type: DataTypes.INTEGER
    },
    readyInMinutes: {
        type: DataTypes.INTEGER
    },
    servings: {
        type: DataTypes.INTEGER
    },
    ingredients: {
        type: DataTypes.ARRAY(DataTypes.TEXT),
        defaultValue: [],
    },
    steps: {
        type: DataTypes.ARRAY(DataTypes.TEXT),
        defaultValue: [],
    },
    image: {
        type: DataTypes.STRING
    },
});