const express = require('express');
const orm = require('./config/orm');

// Select All from orm
orm.selectAll('burgers');

// Insert One from orm
orm.insertOne('burgers')

// Update One from orm
