let notificationMessage = "";

export default function handler(req, res) {
    if (req.method === 'GET') {
        // Mengembalikan notifikasi terbaru
        res.status(200).json({ message: notificationMessage });
    } else if (req.method === 'POST') {
        // Menyimpan pesan notifikasi yang dikirimkan dari UI
        const { message } = req.body;
        if (!message) {
            return res.status(400).json({ status: 'error', message: 'Pesan tidak boleh kosong.' });
        }
        notificationMessage = message;
        res.status(200).json({ status: 'success', message: 'Notifikasi berhasil dikirim!' });
    } else {
        res.status(405).json({ status: 'error', message: 'Method tidak didukung.' });
    }
}
