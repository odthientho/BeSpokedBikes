const router = require('express').Router();
const Sales = require('../../models/Sales');
const Product = require('../../models/Product');
const Customer = require('../../models/Customer');
const Salesperson = require('../../models/Salesperson');
const { withAuth }  = require('../../utils/route-helpers');

router.get('/', withAuth, async (req, res) => {
    try {
        const salesData = await Sales.findAll({
            include: [
                {
                    model: Product,
                }, 
                {
                    model: Customer,
                },
                {
                    model: Salesperson,
                }
            ]
        });
        if (salesData.length > 0) {
            var sales = salesData.map((p) => p.get({ plain: true}));
            console.log(sales);
            res.status(200).json(sales);
        } else res.status(400).json("Not Found");
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;