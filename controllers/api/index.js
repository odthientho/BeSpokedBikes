const router = require('express').Router();
const customerRoutes = require('./customer-routes');
const productRoutes = require('./product-routes');

router.use('/customers', customerRoutes);
router.use('/products', productRoutes);

module.exports = router;
