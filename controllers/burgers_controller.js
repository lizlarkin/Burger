const express = require('express');
const router = express.Router();

const burger = require('../models/burger');

router.get('/', (req, res) => {
    burger.selectAll((data) => {
        let burgersObject = {
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

router.put('/api/burgers/:id', (req, res) => {
  let condition = `id = ${req.params.id}`;
  
    console.log('condition', condition);
  
    burger.updateOne(
      {
        devoured: req.body.devoured,
      },
      condition,
      (result) => {
        if (result.changedRows === 0) {
          return res.status(404).end();
        }
        res.status(200).end();
      }
    );
  });

module.exports = router;