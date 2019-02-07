const express = require('express');
const router = express.Router();

const database = require('../sequelize');
const User = database.User;

router.get('/all', function (req,res){
  User
    .findAll()
    .then(users => {
      const result = [];

      users.map(user => {
        result.push({
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          username: user.username,
          createdAt: user.createdAt,
        })
      });
      return result;
    })
    .then(result => {
      res.status(200).json(result);
      return;
    })
})

router.post('/add', function (req,res){
  const data = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
  };

  User
    .create(data)
    .then(() => {
      res.status(200).json({
        message: 'User created successfully.',
        data: data
      });
      return;
    })
    .catch(err => {
      console.log(err)
      res.status(503).json({
        message: 'Error. Unable to complete the task.'
      })
      return;
    })
})

module.exports = router;