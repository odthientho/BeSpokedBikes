const router = require('express').Router();
const customerRoutes = require('./customer-routes');
const productRoutes = require('./product-routes');
const salespersonRoutes = require('./salesperson-routes');

router.use('/customers', customerRoutes);
router.use('/products', productRoutes);
router.use('/salespersons', salespersonRoutes);

module.exports = router;
