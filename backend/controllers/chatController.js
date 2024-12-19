const Message = require('../models/Message');

const sendMessage = async (req, res) => {
  const message = new Message(req.body);
  await message.save();
  res.status(201).json(message);
};

const getMessages = async (req, res) => {
  const messages = await Message.find({ chatId: req.params.chatId });
  res.json(messages);
};

module.exports = { sendMessage, getMessages };
