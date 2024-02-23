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
        res.status(200).json({
            products,
        })
    }
});


//Route     -   /api/products/product?q={id}
//Desc      -   Gets Product With Specific Id from Database
//Access    -   Public
const getProductById = asyncHandler(async (req, res) => { 
    // const product = await Product.findById(req.params.prod_id);
    // res.status(200).json({
    //     message: req.params.prod_id
    // })
});


//Route     -   /api/products/product?q={name}
//Desc      -   Gets Product With Specific name from Database
//Access    -   Public
const getProductByName = asyncHandler(async (req, res) => { 
    res.status(200).json({
        message: 'Getting All That Specific Product...'
    })
});


module.exports = {
    getAllProducts,
    getProductById,
    getProductByName
}