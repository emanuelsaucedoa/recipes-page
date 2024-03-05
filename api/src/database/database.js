import Sequelize from 'sequelize';

export const sequelize = new Sequelize('food', 'postgres', 'persona5112', {
    host: 'localhost',
    dialect: 'postgres'
})