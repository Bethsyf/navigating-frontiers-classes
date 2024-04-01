const express = require('express');
const petController = require('../controller/pets');
const router = express.Router();

router.get('/pets', petController.getAll);

router.get('/pets/:name', petController.get);

router.post('/pets', petController.create);

module.exports = router;
