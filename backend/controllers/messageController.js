import Message from '../models/Message.js';

// @desc    Create a message
// @route   POST /api/messages
// @access  Public
export const createMessage = async (req, res) => {
  try {
    const { name, email, reason, message } = req.body;

    const newMessage = new Message({
      name,
      email,
      reason,
      message,
    });

    const createdMessage = await newMessage.save();
    res.status(201).json(createdMessage);
  } catch (error) {
    res.status(400).json({ message: 'Invalid message data' });
  }
};
