var express = require('express');
var router = express.Router();
var path = require("path");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.resolve("./views/home.html"))
});

router.get('/profile', function(req, res, next) {
  res.sendFile(path.resolve("./views/profile.html"))
});

router.get('/register', function(req, res, next) {
  res.sendFile(path.resolve("./views/register.html"))
});
module.exports = router;
