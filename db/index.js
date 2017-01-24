var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var blogSchema = new Schema({
  title: String,
  description: String,
  images: Buffer,
  date: { type: Date, default: Date.now}
});

module.exports = {
  blogSchema: blogSchema
}