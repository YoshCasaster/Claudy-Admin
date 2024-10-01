// server.js

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

let currentNotification = "";

// Endpoint untuk menerima notifikasi baru
app.post('/api/notif', (req, res) => {
    const { message } = req.body;
    if (!message) {
        return res.status(400).json({ error: "Notifikasi tidak boleh kosong" });
    }
    
    // Simpan pesan notifikasi
    currentNotification = message;
    console.log("Notifikasi diterima:", message);

    return res.status(200).json({ success: true, message: "Notifikasi berhasil dikirim!" });
});

// Endpoint untuk mengambil notifikasi
app.get('/api/notif', (req, res) => {
    if (currentNotification) {
        return res.json({ message: currentNotification });
    } else {
        return res.json({ message: "" });
    }
});

app.listen(3000, () => {
    console.log('Server berjalan di port 3000');
});
