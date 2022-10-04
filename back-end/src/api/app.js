const express = require('express');
require('express-async-errors');
const cors = require('cors');
const loginRoute = require('../routes/login.routes');
const registerRoute = require('../routes/register.routes');
const producstRoute = require('../routes/product.routes');
const salesRoute = require('../routes/sales.routes');
const ordersRoute = require('../routes/orders.routes');
const checkoutRoute = require('../routes/checkout.routes');
const globalError = require('../err/globalError');

const app = express();

app.use(express.json());
app.use(cors());
app.use('/login', loginRoute);
app.use('/register', registerRoute);
app.use('/customer/products', producstRoute);
app.use('/customer/orders', ordersRoute);
app.use('/checkout', checkoutRoute);
app.use('/sales', salesRoute);
app.use('/images', express.static('public'));
app.use(globalError.handle);

module.exports = app;
