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
            unique: true,
            allowNull: false,
        },
        manufacturer: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        style: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        purchase_price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        sale_price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        quantity_on_hand: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        commission_percentage: {
            type: DataTypes.DECIMAL(5, 2),
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