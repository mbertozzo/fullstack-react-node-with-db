const Sequelize = require('sequelize');
const UserModel = require('./models/user');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    operatorsAliases: false,
    // pool: {
    //   max: 5,
    //   min: 0,
    //   acquire: 30000,
    //   idle: 10000
    // },
  }
)

const User = UserModel(sequelize, Sequelize);

module.exports = {
  sequelize: sequelize,
  User: User,
};