const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Discount extends Model {}

Discount.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        product_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'product',
                key: 'id',
              },
        },
        begin_date: {
            type: DataTypes.DATEONLY,
            allowNull: true,
        },
        end_date: {
            type: DataTypes.DATEONLY,
            allowNull: true,
        },
        discount_percentage: {
            type: DataTypes.DECIMAL(5,2),
            allowNull: true,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'discount',
    }
); 

module.exports = Discount;