document.getElementById('notifForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const notifText = document.getElementById('notifText').value;

    fetch('/api/notif', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            message: notifText,
        }),
    })
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                document.getElementById('statusMessage').innerText = 'Notifikasi berhasil dikirim!';
            } else {
                document.getElementById('statusMessage').innerText = 'Gagal mengirim notifikasi.';
            }
        })
        .catch(error => {
            document.getElementById('statusMessage').innerText = `Error: ${error}`;
        });
});
