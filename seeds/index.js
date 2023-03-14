const { 
  Client, 
  Product, 
  Salesperson, 
  Customer,
  Sales,
  Discount 
} = require('../models/');
const clientData = require('./client_data.json');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  // start to seeding database
  await Client.bulkCreate(clientData, {
    individualHooks: true,
    returning: true,
  });

  // await Service.bulkCreate(serviceData);
  // await Appointment.bulkCreate(appointmentData);
  // await Booking.bulkCreate(bookingData);
  
  process.exit(0);
};

seedAll();