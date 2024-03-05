import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';

export const Diet = sequelize.define('diets', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
});