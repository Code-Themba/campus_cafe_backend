const asyncHandler = require('express-async-handler')

const Product = require('../models/Product');

//Route     -   /api/products/
//Desc      -   Gets All Products from Database
//Access    -   Public
const getAllProducts = asyncHandler(async (req, res) => {
    const products = await Product.find();
    if (!products) {
        res.status(404);
        throw new Error('Products Not Found.');
    } else {
        return res.status(200).json({
            products,
        })
    }
});




module.exports = {
    getAllProducts,
}