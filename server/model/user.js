const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(require('../config/config').development); 

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,  
    validate: {
      notNull: { msg: 'Username is required' },
      notEmpty: { msg: 'Username cannot be empty' },
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: { msg: 'Password is required' },
      notEmpty: { msg: 'Password cannot be empty' },
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,  
    validate: {
      notNull: { msg: 'Email is required' },
      isEmail: { msg: 'Please provide a valid email address' },
    },
  },
}, {
 
  timestamps: true,
});

module.exports = User;
