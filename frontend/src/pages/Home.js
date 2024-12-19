import React from 'react';
import PlaylistCard from '../components/PlaylistCard';
import PostCard from '../components/PostCard';

const Home = () => {
  const featuredPlaylists = [
    {
      id: 1,
      name: "Today's Top Hits",
      description: "The biggest hits right now.",
      coverImage: "/placeholder/playlist1.jpg",
      songs: Array(20).fill({})
    },
    // Add more playlists...
  ];

  const recentPosts = [
    {
      id: 1,
      username: "MusicLover",
      userAvatar: "/placeholder/avatar1.jpg",
      timestamp: "2 hours ago",
      content: "Can't stop listening to this new album! 🎵",
      songShare: {
        title: "Amazing Song",
        artist: "Great Artist",
        thumbnail: "/placeholder/song1.jpg"
      }
    },
    // Add more posts...
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h2 className="text-2xl font-bold mb-6">Featured Playlists</h2>
        <div className="grid gap-6">
          {featuredPlaylists.map(playlist => (
            <PlaylistCard
              key={playlist.id}
              playlist={playlist}
              onPlay={() => console.log('Playing playlist:', playlist.id)}
            />
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-6">Music Feed</h2>
        {recentPosts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Home;