const express = require('express');
require('dotenv').config();

//Import Database Connection
require('./backend/config/db')();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 
app.use('/api/account', require('./backend/routes/usersRoutes'));

app.listen(port, console.log(`Server is running on port ${port}`));
