// api/notification.js
export default function handler(req, res) {
    if (req.method === 'GET') {
        const notifications = [
            { message: 'Notifikasi 1: Anda memiliki pesan baru.' },
            { message: 'Notifikasi 2: Pembaruan sistem telah dilakukan.' }
        ];
        res.status(200).json(notifications);
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
