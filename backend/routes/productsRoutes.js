const router = require('express').Router();

const {
    getAllProducts,
    getProductById,
    getProductByName
} = require('../controllers/productController');

router.get('/', getAllProducts)
// router.get('/product/:prod_name', getProductByName);

module.exports = router;