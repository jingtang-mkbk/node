const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
  title: String,
  director: String
});

const MovieModel = mongoose.model('movies', MovieSchema);

module.exports = MovieModel;