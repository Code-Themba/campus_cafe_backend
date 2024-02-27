const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
    items: {
        type: Array,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    totalAmount: {
        type: Number,
        required: true,
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }
}, {
    timestamp: true
});

const Order = mongoose.model('orders', OrderSchema);

module.exports = Order;