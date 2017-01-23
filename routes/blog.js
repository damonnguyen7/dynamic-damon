var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
  res.render('blog-list', {title: 'list of blogs'});
});

router.get('/detail', function(req, res) {
  res.render('blog-list-item-detail', {title: 'Blog Detail'});
});

module.exports = router;