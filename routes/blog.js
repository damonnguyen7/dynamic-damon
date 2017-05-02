var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('blog-list.ejs', { title: 'blog list' });
});

router.get('/this', function(req, res, next) {
  res.render('blog-item-detail/this.ejs', { title: 'About this'});
})

module.exports = router;
