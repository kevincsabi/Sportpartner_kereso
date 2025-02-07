const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(require('../config/config').development);

const SportEvent = sequelize.define('SportEvent', {
  helyszin_nev: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Location,
      key: 'id',  // A helyszín tábla elsődleges kulcsa, amit idegen kulcsként használunk
    },
    validate: {
      notNull: { msg: 'Helyszín szükséges' },
    },
  },
  szervezo_nev: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: { msg: 'Szervező neve szükséges' },
      notEmpty: { msg: 'A szervező neve nem lehet üres' },
    },
  },
  sport_nev: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: { msg: 'Sport neve szükséges' },
      notEmpty: { msg: 'A sport neve nem lehet üres' },
    },
  },
  kezdo_ido: {
    type: DataTypes.DATE,
    allowNull: false,
    validate: {
      notNull: { msg: 'Kezdési idő szükséges' },
      isDate: { msg: 'Kezdési időnek érvényes dátumnak kell lennie' },
    },
  },
  zaro_ido: {
    type: DataTypes.DATE,
    allowNull: false,
    validate: {
      notNull: { msg: 'Záró idő szükséges' },
      isDate: { msg: 'Záró időnek érvényes dátumnak kell lennie' },
    },
  },
  szint: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: { msg: 'Szint szükséges' },
      notEmpty: { msg: 'A szint nem lehet üres' },
    },
  },
  maximum_eletkor: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      notNull: { msg: 'Maximális életkor szükséges' },
      isInt: { msg: 'A maximális életkor számnak kell lennie' },
      min: { args: [0], msg: 'A maximális életkor nem lehet negatív' },
    },
  },
  minimum_eletkor: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      notNull: { msg: 'Minimális életkor szükséges' },
      isInt: { msg: 'A minimális életkor számnak kell lennie' },
      min: { args: [0], msg: 'A minimális életkor nem lehet negatív' },
    },
  },
}, {
  timestamps: true, 
});

module.exports = SportEvent;
