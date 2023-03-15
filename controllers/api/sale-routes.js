const router = require('express').Router();
const Sales = require('../../models/Sales');
const Product = require('../../models/Product');
const Customer = require('../../models/Customer');
const Salesperson = require('../../models/Salesperson');
const { withAuth }  = require('../../utils/route-helpers');
const { Op } = require('sequelize');

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

router.post('/', withAuth, async (req, res) => {
    try {
        var salespersonId = req.body.salespersonId;
        var startDate = new Date(req.body.startDate);
        var endDate = new Date(req.body.endDate);
        const salesData = await Sales.findAll({
            where: {
                salesperson_id: salespersonId,
                sales_date: { 
                    [Op.between]: [startDate, endDate]
                }
            },
            include: [
                {
                    model: Product,
                }, 
            ]
        });
        if (salesData.length > 0) {
            var sales = salesData.map((p) => p.get({ plain: true}));
            res.status(200).json(sales);
        } else res.status(400).json("Not Found");
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;