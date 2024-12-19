const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  userId: String,
  content: String,
  likes: Number,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Post', PostSchema);
