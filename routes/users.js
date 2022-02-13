var express = require('express');
const { send } = require('process');
var router = express.Router();
let User = require('../models/users')


// Create a user
router.post('/create', function (req, res, next) {

  let tempUser = new User(
    {
      name: req.body.name,
      user_name: req.body.user_name,
      directory: req.body.directory
    })

  tempUser.save()
  res.send(req.body.name);
})



// Find info on a user
router.get('/info', function (req, res, next) {
  let tempUser = User.findOne({ user_name: req.body.user_name });

  res.send(req.body).status(200)
});

module.exports = router;
