const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000/api';

export const api = {
  // Authentication
  login: async (credentials) => {
    const response = await fetch(`${BASE_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials)
    });
    return response.json();
  },

  // Songs
  getSongs: async () => {
    const response = await fetch(`${BASE_URL}/songs`);
    return response.json();
  },

  getSongById: async (id) => {
    const response = await fetch(`${BASE_URL}/songs/${id}`);
    return response.json();
  },

  // Playlists
  getPlaylists: async () => {
    const response = await fetch(`${BASE_URL}/playlists`);
    return response.json();
  },

  createPlaylist: async (playlistData) => {
    const response = await fetch(`${BASE_URL}/playlists`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(playlistData)
    });
    return response.json();
  },

  // User
  getUserProfile: async (userId) => {
    const response = await fetch(`${BASE_URL}/users/${userId}`);
    return response.json();
  },

  updateUserProfile: async (userId, profileData) => {
    const response = await fetch(`${BASE_URL}/users/${userId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(profileData)
    });
    return response.json();
  }
};

export default api;