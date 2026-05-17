var express = require('express');
var router = express.Router();

/* GET home page. */

//Main
router.get('/', function(req, res, next) {
  res.redirect('home');
});
router.get('/home', function(req, res, next) {
  res.render('main/index', { title: 'Express' });
});
router.get('/projetos', function(req, res, next) {
  res.render('main/projetos', { title: 'Express' });
});
router.get('/skills', function(req, res, next) {
  res.render('main/skills', { title: 'Express' });
});
router.get('/certificacoes', function(req, res, next) {
  res.render('main/certificacoes', { title: 'Express' });
});

//Ambiental
router.get('/login-ambiental', function(req, res, next) {
  res.render('ambiental/index', { title: 'Express' });
});
router.get('/projeto-ambiental', function(req, res, next) {
  res.render('ambiental/sust-ambiental', { title: 'Express' });
});
router.get('/chat-ambiental', function(req, res, next) {
  res.render('ambiental/chat', { title: 'Express' });
});
router.get('/contato-ambiental', function(req, res, next) {
  res.render('ambiental/contato', { title: 'Express' });
});
router.get('/sobre-ambiental', function(req, res, next) {
  res.render('ambiental/sobre', { title: 'Express' });
});
router.get('/cadastro-ambiental', function(req, res, next) {
  res.render('ambiental/cadastro', { title: 'Express' });
});
router.get('/tipos-ambiental', function(req, res, next) {
  res.render('ambiental/tipos', { title: 'Express' });
});
router.get('/como-ser-ambiental', function(req, res, next) {
  res.render('ambiental/como-ser', { title: 'Express' });
});
router.get('/guias-ambiental', function(req, res, next) {
  res.render('ambiental/guias', { title: 'Express' });
});
router.get('/pontos-ambiental', function(req, res, next) {
  res.render('ambiental/pontos', { title: 'Express' });
});

module.exports = router;
