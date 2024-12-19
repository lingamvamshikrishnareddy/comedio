const Music = require('../models/Music');

// Upload a new music track
const uploadMusic = async (req, res) => {
  try {
    const music = new Music(req.body);
    await music.save();
    res.status(201).json(music);
  } catch (error) {
    res.status(500).json({ message: 'Error uploading music', error });
  }
};

// Get all music in the library
const getMusicLibrary = async (req, res) => {
  try {
    const musicLibrary = await Music.find();
    res.json(musicLibrary);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching music library', error });
  }
};

// Delete a music track
const deleteMusic = async (req, res) => {
  try {
    await Music.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Error deleting music', error });
  }
};

module.exports = { uploadMusic, getMusicLibrary, deleteMusic };
