const express = require('express')
const {
    genTable,
    data
} = require('../lab_5/tools');
const apiVerRouter = express.Router();

module.exports = {
    apiVerRouter
};

// перенести сюда все запросы и потом они добавляются в порядке импорта