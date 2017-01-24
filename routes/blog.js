var express = require('express');
var router = express.Router();
var db = require('../db');
var mongoose = require('mongoose');
var ObjectId = require('mongoose').Types.ObjectId;
var BlogModel = mongoose.model('Blogs', db.blogSchema);


router.get('/', function(req, res) {
  BlogModel.find({}, function(queryError, blogs) {
    if (queryError) {
      res.render('error loading from database');
    } else {
      res.render('blog-list', {
        title: 'list of blogs',
        blogs: blogs
      });
    }
  });
});

router.get('/detail/:id', function(req, res) {
  BlogModel.findOne({_id: ObjectId(req.params.id)}, function(queryError, blog) {
    if (queryError) {
      res.render('error loading from database');
    } else {
      console.log('string date: ', JSON.stringify(blog.date));
      res.render('blog-list-item-detail', {
        title: blog.title,
        blog: blog
      });
    }
  });
});

module.exports = router;