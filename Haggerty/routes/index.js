var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'trevors mini' });
});


router.get('/tictactoe', function(req, res, next){
  res.render('tictactoe', { title: 'tictactoe'})
})

router.get('/checkers', function(req, res, next){
  res.render('checkers', { title: 'checkers'})
})

router.get('/rasterizer', function(req, res, next){
  res.render('rasterizer', { title: 'rasterizer'})
})

router.get('/caveExplorer001', function(req, res, next){
  res.render('caveExplorer001', { title: 'caveExplorer001'})
})


router.get('/test/:id', function(req, res, next) {
  res.render('test', {output: req.params.id})
});


router.post('/test/submit', function(req, res, next){
  var id = req.body.id;
  res.redirect('/test/' + id);
})

module.exports = router;
