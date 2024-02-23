const express = require('express');
require('dotenv').config();

//Import Database Connection
require('./backend/config/db')();

const app = express();
const port = process.env.PORT || 5000;

app.listen(port, console.log(`Server is running on port ${port}`));
