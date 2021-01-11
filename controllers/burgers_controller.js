const express = require('express');
const router = express.Router();

const burger = require('../models/burger');

router.get('/', (req, res) => {
    burger.selectAll((data) => {
        const burgersObject = {
            burgers: data,
        };
        // console.log(burgersObject);
        res.render('index', burgersObject);
    });
});

router.post('/api/burgers', (req, res) => {
    burger.insertOne([req.body.burger_name],(data) => {
        res.json({ id: data.insertId });
    });
});

module.exports = router;