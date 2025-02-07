const express = require('express');
const { Sequelize } = require('sequelize');
const dbConfig = require('./config/config.js');
const User = require('./model/user');
const userRoutes = require('./routes/userroute.js');
const bodyParser = require('body-parser');
const helyszin = require('./model/helyszin.js');
const app = express();
const port = 3000;

// Set up Sequelize with the database configuration
const sequelize = new Sequelize(dbConfig.development);

// Authenticate the connection to the database and sync the models
sequelize.authenticate()
  .then(async () => {
    console.log('Connection to the development database has been established successfully.');
    
    // Sync the User model (force: true will drop and recreate the table)
    await User.sync({ force: true });
    await helyszin.sync({force: true});
    console.log('The table for the User model was just (re)created!');
    
    // Middleware and routing
    app.use(bodyParser.json()); // Parse incoming JSON requests
    app.use('/api', userRoutes); // Use the routes from userRoutes

    // Start the Express server
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Unable to connect to the development database:', error);
  });
