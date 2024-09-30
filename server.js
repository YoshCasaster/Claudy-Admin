const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

let notifications = "";

app.post('/send-notification', (req, res) => {
    const { message } = req.body;
    if (message) {
        notifications = message;
        return res.status(200).json({ success: true, message: "Notification sent!" });
    } else {
        return res.status(400).json({ success: false, message: "Message cannot be empty!" });
    }
});

app.get('/get-notification', (req, res) => {
    return res.status(200).json({ notification: notifications });
});

module.exports = app;
