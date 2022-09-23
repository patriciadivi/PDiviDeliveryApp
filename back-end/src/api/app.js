const express = require('express');
require('express-async-errors');
const cors = require('cors');
const loginRoute = require('../routes/login.routes');
const globalError = require('../err/globalError');

const app = express();

app.use(express.json());
app.use(cors());
app.use('/login', loginRoute);
app.use(globalError.handle);

module.exports = app;
