var express = require('express');
var router = express.Router();
var mongo = require('mongodb').MongoClient;
var assert = require('assert')

var url = 'mongodb://localhost:27017';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'Form Validation', success: req.session.success, errors: req.session.errors});
  req.session.errors = null;
  req.session.success = null;
});

/* go to game test*/
router.get('/retribution_online', function(req, res, next) {
  res.render('retribution_online', {title: 'Retribution Online'});
});

/* go to database test*/
router.get('/mongodb_test', function(req, res, next) {
  res.render('mongodb_test', {title: 'mongodb test'});
});

/* get mongo data */
router.get('/get-data', function(req, res, next) {
  var resultArray = [];
  
  mongo.connect(url, function(err, client) {
    assert.equal(null, err);
    var db = client.db('test');

    var cursor = db.collection('user-data').find();
    cursor.forEach(function(doc, err) {
      assert.equal(null, err);
      resultArray.push(doc);
    
    }, function() {
      client.close();
      res.render('mongodb_test', {items: resultArray});
    });
  });
});

/* insert mongo data */
router.post('/insert', function(req, res, next) {
  var item = {
    title: req.body.title,
    content: req.body.content,
    author: req.body.author
  };

  mongo.connect(url, function(err, client) {
    assert.equal(null, err);
    var db = client.db('test');

    db.collection('user-data').insertOne(item, function(err, result) {
      assert.equal(null, err);
      console.log('Item inserted');
    });
    client.close();
  });

  res.render('mongodb_test', {title: 'insertion complete'});
});

router.post('/update', function(req, res, next) {
  
});

router.post('/delete', function(req, res, next) {
  
});

router.post('/submit', function(req, res, next) {
  req.check('email', 'Invalid email address').isEmail();
  req.check('password', 'Invalid password').isLength({min: 4}).equals(req.body.confirmPassword);

  var errors = req.validationErrors();
  if (errors) {
    req.session.errors = errors;
    req.session.success = false;
  } else {
    req.session.success = true;
  }
  res.redirect('/');
});

module.exports = router;
