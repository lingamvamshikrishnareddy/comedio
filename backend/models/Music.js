const mongoose = require('mongoose');

const MusicSchema = new mongoose.Schema({
  title: String,
  artist: String,
  album: String,
  duration: Number, // Duration in seconds
  genre: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Music', MusicSchema);
