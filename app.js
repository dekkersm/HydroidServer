const express = require('express');

const adminRoutes = require('./routes/admin');
const dashboardRoutes = require('./routes/dashboard');
const configRouts = require('./routes/config');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: false}));

app.use(dashboardRoutes);
app.use(configRouts);

app.listen(3000);