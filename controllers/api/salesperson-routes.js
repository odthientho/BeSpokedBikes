const router = require('express').Router();
const Salesperson = require('../../models/Salesperson');
const { withAuth }  = require('../../utils/route-helpers');

router.get('/', withAuth, async (req, res) => {
    try {
        const salespersonData = await Salesperson.findAll();
        if (salespersonData.length > 0) {
            var salespersons = salespersonData.map((p) => p.get({ plain: true}));
            res.status(200).json(salespersons);
        } else res.status(400).json("Not Found");
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put('/:id', withAuth, async(req, res) => {
    try {
        var salespersonId = req.params.id;
        var updatingData = req.body;
        await Salesperson.update(updatingData, {
            where: {
                id: salespersonId
            }
        })
        res.status(200).json();
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;