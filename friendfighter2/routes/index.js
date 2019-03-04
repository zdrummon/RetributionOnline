var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Zax party', cheeseArray: ['gouda', 'swiss', 'havarti'], booleanTest: true});
});

module.exports = router;
