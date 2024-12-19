import React from 'react';

const PostCard = ({ post }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-4 mb-4">
      <div className="flex items-center mb-4">
        <img
          src={post.userAvatar}
          alt={post.username}
          className="w-10 h-10 rounded-full mr-3"
        />
        <div>
          <h3 className="font-medium">{post.username}</h3>
          <p className="text-sm text-gray-400">{post.timestamp}</p>
        </div>
      </div>
      <p className="mb-4">{post.content}</p>
      {post.songShare && (
        <div className="bg-gray-700 rounded p-3 flex items-center">
          <img
            src={post.songShare.thumbnail}
            alt={post.songShare.title}
            className="w-16 h-16 rounded mr-3"
          />
          <div>
            <h4 className="font-medium">{post.songShare.title}</h4>
            <p className="text-sm text-gray-400">{post.songShare.artist}</p>
          </div>
        </div>
      )}
      <div className="flex space-x-4 mt-4">
        <button className="text-gray-400 hover:text-white">Like</button>
        <button className="text-gray-400 hover:text-white">Comment</button>
        <button className="text-gray-400 hover:text-white">Share</button>
      </div>
    </div>
  );
};

export default PostCard;