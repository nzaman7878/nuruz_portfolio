const Contact = require('../models/Contact');

exports.submitContactForm = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Please provide all required fields' });
    }

    if (process.env.MONGODB_URI) {
      const newContact = new Contact({ name, email, message });
      await newContact.save();
    } else {
      // Mock success if no DB connected
      console.log('Received contact submission:', { name, email, message });
    }

    res.status(201).json({ success: true, message: 'Contact message received successfully' });
  } catch (error) {
    console.error('Error in contact form submission:', error);
    res.status(500).json({ error: 'Server error' });
  }
};
