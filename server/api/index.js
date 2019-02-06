const express = require('express');
const router = express.Router();

router.get('/', function (req, res){
  res.status(200).send({
    message: 'Hello from custom API',
  });
})

router.get('/dbtest', function (req,res){
  var db = req.db;
  db
  .authenticate()
  .then(() => {
    res.status(200).send({
      message: 'Connection to DB established correctly.'
    })
  })
  .catch(err => {
    res.status(503).send({
      message: 'Unable to connect to the database.'
    })
  });
})

module.exports = router;