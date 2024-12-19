import React from 'react';

const PlaylistCard = ({ playlist, onPlay }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <img
        src={playlist.coverImage}
        alt={playlist.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{playlist.name}</h3>
        <p className="text-gray-400 text-sm mb-4">{playlist.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-400">
            {playlist.songs.length} songs
          </span>
          <button
            onClick={() => onPlay(playlist)}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full"
          >
            Play
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlaylistCard;