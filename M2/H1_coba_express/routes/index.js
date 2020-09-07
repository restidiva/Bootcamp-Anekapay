var express = require('express');
const { path } = require('../app');
var router = express.Router();
var view = __dirname;
var pat = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/kalendar', function (req, res) {
  res.render('kalendar')
})
router.get('/logo', function (req, res) {
  res.render('logo')
})
router.get('/halo', function (req, res) {
  res.send('halo')
})
router.get('/kalkulator', function (req, res) {
  res.sendFile(pat.join(view + "/kalkulator.html"))
})
router.get('/kalkulator', function (req, res) {
  res.render('kalkulator')
})

module.exports = router;