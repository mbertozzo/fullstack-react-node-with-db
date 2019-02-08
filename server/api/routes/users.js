const express = require('express');
const router = express.Router();

const { pick, hasProperties, isNumber } = require('./../../utils');

const { User } = require('../sequelize');

const defaultKeys = ['firstName', 'lastName', 'email', 'username', 'password'];

router.get('/', (req, res) => {
  User.findAll()
    .then(users => {
      const result = [];

      users.map(user =>
        result.push({
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          username: user.username,
          createdAt: user.createdAt,
        }),
      );
      return result;
    })
    .then(result => {
      if (result.length === 0) {
        res.status(404).json({
          message: 'Not found.',
        });
      } else {
        res.status(200).json(result);
      }
    });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  if (!isNumber(id)) {
    res.status(400).json({
      message: 'Bad request.',
    });
    return;
  }

  User.findAll({
    where: {
      id,
    },
  })
    .then(users => {
      const result = [];

      users.map(user =>
        result.push({
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          username: user.username,
          createdAt: user.createdAt,
        }),
      );
      return result;
    })
    .then(result => {
      if (result.length === 0) {
        res.status(404).json({
          message: 'No match for specified id.',
        });
      } else {
        res.status(200).json(result);
      }
    });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;

  if (!isNumber(id)) {
    res.status(400).json({
      message: 'Bad request.',
    });
    return;
  }

  // filter to pass sequelize only selected key/value pairs
  const data = pick(req.body, defaultKeys);

  User.update(data, {
    returning: true,
    where: {
      id,
    },
  }).then(response => {
    const affectedRows = response[1];
    if (affectedRows !== 0) {
      res.status(200).json({
        message: 'User edited successfully.',
        data,
      });
    } else {
      res.status(404).json({
        message: 'No match for specified id.',
      });
    }
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  if (!isNumber(id)) {
    res.status(400).json({
      message: 'Bad request.',
    });
    return;
  }

  User.destroy({
    returning: true,
    where: {
      id,
    },
  }).then(response => {
    const affectedRows = response;
    if (affectedRows !== 0) {
      res.status(200).json({
        message: 'User deleted successfully.',
      });
    } else {
      res.status(404).json({
        message: 'No match for specified id.',
      });
    }
  });
});

router.post('/add', (req, res) => {
  // filter to pass sequelize only selected key/value pairs
  const data = pick(req.body, defaultKeys);

  if (!hasProperties(data, defaultKeys)) {
    res.status(400).json({
      message: 'Bad request.',
    });
    return;
  }

  User.create(data)
    .then(() => {
      res.status(200).json({
        message: 'User created successfully.',
        data,
      });
    })
    .catch(() => {
      res.status(503).json({
        message: 'Error. Unable to complete the task.',
      });
    });
});

module.exports = router;
