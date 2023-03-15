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