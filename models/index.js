const Client = require('./Client'); 
const Product = require('./Product'); 
const Salesperson = require('./Salesperson'); 
const Customer = require('./Customer'); 
const Sales = require('./Sales'); 
const Discount = require('./Discount'); 

Product.hasMany(Discount, {
    foreignKey: 'product_id',
});

Sales.belongsTo(Product, {
    foreignKey: "product_id",
});

Sales.belongsTo(Salesperson, {
    foreignKey: "salesperson_id",
});

Sales.belongsTo(Customer, {
    foreignKey: "customer_id",
});

Product.hasMany(Sales, {
    foreignKey: "product_id",
    onDelete: 'CASCADE',
});

Salesperson.hasMany(Sales, {
    foreignKey: "salesperson_id",
    onDelete: 'CASCADE',
});

Customer.hasMany(Sales, {
    foreignKey: "customer_id",
    onDelete: 'CASCADE',
});

module.exports = { 
    Client, 
    Product, 
    Salesperson, 
    Customer,
    Sales,
    Discount
}; 

