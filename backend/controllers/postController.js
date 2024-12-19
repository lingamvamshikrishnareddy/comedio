const Post = require('../models/Post');

const getPosts = async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
};

const createPost = async (req, res) => {
  const post = new Post(req.body);
  await post.save();
  res.status(201).json(post);
};

const deletePost = async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);
  res.status(204).send();
};

module.exports = { getPosts, createPost, deletePost };
