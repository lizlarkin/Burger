const express = require('express');
const router = express.Router();

const burger = require('../models/burger');

router.get('/', (req, res) => {
    burger.selectAll((data) => {
        const burgersObject = {
            burgers: data,
        };
        console.log(burgersObject);
        res.render('index', burgersObject);
    });
});

// router.post('/api/burgers', (req, res) => {
//     burger.create(['name', 'devoured'], 
//     [req.body.name,
//     req.body.devoured],
//     (err, data) => {
//         if(err) throw err;
//         console.log(data);
//     });
// });

module.exports = router;