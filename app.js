const express = require('express');

const sequelize = require('./util/database');

const adminRoutes = require('./routes/admin');
const dashboardRoutes = require('./routes/dashboard');
const configRouts = require('./routes/config');
const bodyParser = require('body-parser');

const app = express();
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

// CORS Headers => Required for cross-origin/ cross-server communication
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, OPTIONS'
  );
  next();
});

app.use(dashboardRoutes);
app.use(configRouts);

sequelize.sync()
  .then(result => {
    // console.log(result);
    app.listen(process.env.PORT || 5000); // start Node + Express server on port 5000
  })
  .catch(err => console.log(err));