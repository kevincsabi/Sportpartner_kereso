const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(require('../config/config').development);

const helyszin = sequelize.define('helyszin', {
  nev: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notNull: { msg: 'Helyszín neve szükséges' },
      notEmpty: { msg: 'A helyszín neve nem lehet üres' },
    },
  },
  cim: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: { msg: 'Cím szükséges' },
      notEmpty: { msg: 'A cím nem lehet üres' },
    },
  },
  telepules: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: { msg: 'Település szükséges' },
      notEmpty: { msg: 'A település neve nem lehet üres' },
    },
  },
  iranyitoszam: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: { msg: 'Irányítószám szükséges' },
      notEmpty: { msg: 'Az irányítószám nem lehet üres' },
      isNumeric: { msg: 'Az irányítószám csak számokat tartalmazhat' },
    },
  },
  googlemaps: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      isUrl: { msg: 'A Google Maps linknek érvényes URL-nek kell lennie' },
    },
  },
  fedett: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,  // Az alapértelmezett érték kültéri
  },
  oltozo: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,  // Az alapértelmezett érték nincs öltöző
  },
  parkolas: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      notEmpty: { msg: 'Parkolási információk nem lehetnek üresek' },
    },
  },
  leiras: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
}, {
  timestamps: true,  // Ha szükséges az időbélyeg, hogy mikor lett létrehozva vagy módosítva a helyszín
});

module.exports = helyszin;
