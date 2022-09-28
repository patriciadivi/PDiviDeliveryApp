const express = require('express');
require('express-async-errors');
const cors = require('cors');
const loginRoute = require('../routes/login.routes');
const registerRoute = require('../routes/register.routes');
const producstRoute = require('../routes/product.routes');
const salesRoute = require('../routes/sales.routes');
const globalError = require('../err/globalError');

const app = express();

app.use(express.json());
app.use(cors());
app.use('/login', loginRoute);
app.use('/register', registerRoute);
app.use('/products', producstRoute);
app.use('/sale', salesRoute);
app.use(globalError.handle);

module.exports = app;
