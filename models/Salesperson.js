const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Salesperson extends Model {}

Salesperson.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        }, 
        last_name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        start_date: {
            type: DataTypes.DATEONLY,
            allowNull: true,
        },
        termination_date: {
            type: DataTypes.DATEONLY,
            allowNull: true,
        },
        manager: {
            type: DataTypes.STRING,
            allowNull: true,
        }, 
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'salesperson',
    }
);

module.exports = Salesperson; 