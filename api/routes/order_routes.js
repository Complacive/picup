const express = require('express');
const router = express.Router();

const Order = require('../models/order_model');

// string concatonate '/'
router.get('/get', function (req, res) {
    Order.prototype
        .get()
        .then(orders => {
            res.send(orders);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

router.post('/create', function (req, res) {
    Order.prototype
        .create(req.body)
        .then(users => {
            res.send(users);
        })
        .catch(err => { 
            res.status(400).send(err);
        })
});

router.post('/getById', function (req, res) {
    Order.prototype
        .getById(req.body.id)
        .then(users => {
            res.send(users);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});

router.post('/getByUserId', function (req, res) {
    Order.prototype
        .getByUserId(req.body.user_id)
        .then(users => {
            res.send(users);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});


router.post('/removeById', function (req, res) {
    Order.prototype
        .removeById(req.body.id)
        .then(users => {
            res.send(users);
        })
        .catch(err => {
            res.status(400).send(err);
        })
});

module.exports = router;