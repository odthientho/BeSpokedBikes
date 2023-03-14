const router = require('express').Router();
const Customer = require('../../models/Customer');
const { withAuth }  = require('../../utils/route-helpers');

router.get('/', withAuth, async (req, res) => {
    try {
        const customerData = await Customer.findAll();
        if (customerData.length > 0) {
            var customers = customerData.map((p) => p.get({ plain: true}));
            res.status(200).json(customers);
        } else res.status(400).json("Not Found");
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;