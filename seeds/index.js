const { 
  Client, 
  Product, 
  Salesperson, 
  Customer,
  Sales,
  Discount 
} = require('../models/');
const clientData = require('./client_data.json');
const productData = require('./product_data.json');
const salespersonData = require('./salesperson_data.json');
const customerData = require('./customer_data.json');
const salesData = require('./sales_data.json');
const discountData = require('./discount_data.json');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  // start to seeding database
  await Client.bulkCreate(clientData, {
    individualHooks: true,
    returning: true,
  });

  await Product.bulkCreate(productData);
  await Salesperson.bulkCreate(salespersonData);
  await Customer.bulkCreate(customerData);
  await Sales.bulkCreate(salesData);
  await Discount.bulkCreate(discountData);

  process.exit(0);
};

seedAll();