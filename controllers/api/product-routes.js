const router = require('express').Router();
const Product = require('../../models/Product');
const { withAuth }  = require('../../utils/route-helpers');

router.get('/', withAuth, async (req, res) => {
    try {
        const productData = await Product.findAll();
        if (productData.length > 0) {
            var products = productData.map((p) => p.get({ plain: true}));
            res.status(200).json(products);
        } else res.status(400).json("Not Found");
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put('/:id', withAuth, async(req, res) => {
    try {
        var productId = req.params.id;
        var updatingData = req.body;
        await Product.update(updatingData, {
            where: {
                id: productId
            }
        })
        res.status(200).json();
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;