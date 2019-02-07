const express = require('express');
const router = express.Router();

const database = require('./sequelize');
const sequelize = database.sequelize;
const User = database.User;

router.get('/', function (req, res){
  res.status(200).json({
    message: 'Hello from custom API',
  });
})

router.get('/test-db', function (req, res){
  sequelize
    .authenticate()
    .then(() => {
      res.status(200).send({
        message: 'Connection to DB established correctly.'
      });
      return;
    })
    .catch(err => {
      res.status(503).json({
        message: 'Unable to connect to the database.'
      });
      return;
    });
})

router.get('/create-table', function (req, res){
  User
  .sync({force: true})
  .then(() => {
    res.status(200).json({
      message: 'DB table created successfully.'
    });
    return;
  })
  .catch(err => {
    res.status(503).json({
      message: 'Error creating DB table.'
    });
    return;
  })
})

router.use('/users', require('./routes/users'));

module.exports = router;