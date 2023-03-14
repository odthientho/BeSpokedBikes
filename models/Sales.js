const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Sales extends Model {}

Sales.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        product_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'product',
                key: 'id',
              },
        }, 
        salesperson_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'salesperson',
                key: 'id',
              },
        },
        customer_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'customer', 
                key: 'id',
            }
        },
        sales_date: {
            type: DataTypes.DATEONLY,
            allowNull: true,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'sales',
    }
); 

module.exports = Sales; 