const express = require('express');
const cookieParser = require('cookie-parser');
require('dotenv').config();

//Import Database Connection
require('./backend/config/db')();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// 
app.use('/api/account', require('./backend/routes/usersRoutes'));
app.use('/api/products', require('./backend/routes/productsRoutes'));
app.listen(port, console.log(`Server is running on port ${port}`));
