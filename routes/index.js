var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
  res.redirect('home');
});
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/projetos', function(req, res, next) {
  res.render('projetos', { title: 'Express' });
});
router.get('/skills', function(req, res, next) {
  res.render('skills', { title: 'Express' });
});
router.get('/certificacoes', function(req, res, next) {
  res.render('certificacoes', { title: 'Express' });
});

module.exports = router;
