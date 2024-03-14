const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    ingredients: {
        type: Array,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true,
    },
    prep_time: {
        type: String,
        required: true,
    },
    category: {
        type: Array,
        required: true,
    },
    size: {
        type: Array,
        required: true,
    },
});

const Product = mongoose.model('products', ProductSchema);

module.exports = Product;