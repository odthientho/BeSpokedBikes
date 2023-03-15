const router = require('express').Router();
const customerRoutes = require('./customer-routes');
const productRoutes = require('./product-routes');
const salespersonRoutes = require('./salesperson-routes');
const salesRoutes = require('./sale-routes');

router.use('/customers', customerRoutes);
router.use('/products', productRoutes);
router.use('/salespersons', salespersonRoutes);
router.use('/sales', salesRoutes);

module.exports = router;
