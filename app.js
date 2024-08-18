
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// MongoDB setup (replace with your connection string)
mongoose.connect('mongodb://localhost:27017/wentteamDB', { useNewUrlParser: true, useUnifiedTopology: true });

// Mongoose Schemas
const keywordSchema = new mongoose.Schema({
    source: String,
    medium: String,
    campaign: String,
    term: String,
    timestamp: { type: Date, default: Date.now }
});

const messageSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    message: String,
    timestamp: { type: Date, default: Date.now }
});

const Keyword = mongoose.model('Keyword', keywordSchema);
const Message = mongoose.model('Message', messageSchema);

// Routes
app.post('/track-keywords', (req, res) => {
    const newKeyword = new Keyword(req.body);
    newKeyword.save().then(() => res.status(200).send('Dane zebrane'));
});

app.post('/send-message', (req, res) => {
    const newMessage = new Message(req.body);
    newMessage.save().then(() => res.redirect('/'));
});

// Start Server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
