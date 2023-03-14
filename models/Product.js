const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Product extends Model {}

Product.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        manufacturer: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        style: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        purchase_price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        sale_price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        quantity_on_hand: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        commission_percentage: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'product',
    }
);

module.exports = Product; 