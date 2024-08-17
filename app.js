const express = require('express');

const adminRoutes = require('./routes/admin');
const dashboardRoutes = require('./routes/dashboard');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: false}));

app.use(dashboardRoutes);

app.listen(3000);