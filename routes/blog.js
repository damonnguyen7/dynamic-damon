var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('blog-list.ejs', { title: 'blog list' });
});

router.get('/this', function(req, res, next) {
  res.render('blog-item-detail/this.ejs', { title: 'About this'});
});

router.get('/ajax', function(req, res, next) {
  res.render('blog-item-detail/ajax.ejs', { title: 'About Ajax'});
});

router.get('/closure', function(req, res, next) {
  res.render('blog-item-detail/closure.ejs', { title: 'About Closure'});
});

router.get('/FCC-basic-algos', function(req, res, next) {
  res.render('blog-item-detail/FCC-basic-algos.ejs', { title: 'FCC basic algorithms'});
});

module.exports = router;
