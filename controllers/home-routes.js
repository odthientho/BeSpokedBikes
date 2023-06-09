const router = require('express').Router();
const { Client, Product, Customer, Salesperson, Sales } = require('../models');

router.get('/', async (req, res) => {
    if (!req.session.logged_in) {
        res.redirect('/login');
        return;
    }
    res.render('home', {
        logged_in: req.session.logged_in,
    });
});

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
    res.render('login');
});

router.post('/login', async (req, res) => {
    try {
        const clientData = await Client.findOne({ where: { email: req.body.email } });
        if (!clientData) {
            res
                .status(400)
                .json({ message: 'No emails found, please try again' });
            return;
        }
        const validPassword = await clientData.checkPassword(req.body.password);
        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect password, please try again' });
            return;
        } else
        req.session.save(() => {
            req.session.logged_in = true;
            res.status(200).json({ client: clientData, message: 'You are now logged in!' });
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

router.get('/report', async (req, res) => {
    if (req.session.logged_in) {
        try {
            const salespersonData = await Salesperson.findAll();
            if (salespersonData.length > 0) {
                var salespersons = salespersonData.map((p) => p.get({ plain: true}));
                console.log(salespersons);
                res.render('report', {
                    salespersons,
                    logged_in: req.session.logged_in,
                })
                return;
            }
        } catch (err) {
            res.status(400).json(err);
        }
    }
    res.render('login');
});

router.get('/salesnew', async (req, res) => {
    if (req.session.logged_in) {
        try {
            const customerData = await Customer.findAll();
            var customers = customerData.map((p) => p.get({ plain: true}));
            const productData = await Product.findAll();
            var products = productData.map((p) => p.get({ plain: true}));
            const salespersonData = await Salesperson.findAll();
            var salespersons = salespersonData.map((p) => p.get({ plain: true}));
            res.render('salesnew', {
                customers,
                products,
                salespersons,
                logged_in: req.session.logged_in,
            });
            return;
        } catch (err) {
            res.status(400).json(err);
        }
    }
    res.render('login');
});

router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;