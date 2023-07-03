const {Router} = require('express');
const { getAllProducts } = require('../controllers/productController');
const pro_router = Router();

pro_router.get('/product',getAllProducts);

module.exports = pro_router;