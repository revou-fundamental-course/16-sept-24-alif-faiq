document.addEventListener('DOMContentLoaded', function() {
    const messageForm = document.getElementById('messageForm');
    const submittedInfo = document.getElementById('submittedInfo');
    const welcomeMessage = document.getElementById('welcomeMessage');

    if (messageForm && submittedInfo && welcomeMessage) {
        messageForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent form from submitting normally

            // Get form values
            const name = document.getElementById('nama').value;
            const date = document.getElementById('tgl').value;
            const gender = document.querySelector('input[name="jk"]:checked')?.value || 'Not specified';
            const message = document.getElementById('pesan').value;

            // Get current date and time
            const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
            const now = new Date();
            const day = days[now.getDay()];
            const currentDate = now.toLocaleDateString();
            const time = now.toLocaleTimeString();

            // Update welcome message
            welcomeMessage.textContent = `Hi ${name}, Welcome To Website`;

            // Create formatted info string
            const infoHTML = `
                <div class="info-item"><span class="info-label">Time :</span> <span class="info-value">${day}, ${time}, ${currentDate}</span></div>
                <br>
                <div class="info-item"><span class="info-label">Nama :</span> <span class="info-value">${name}</span></div>
                <div class="info-item"><span class="info-label">Tanggal :</span> <span class="info-value">${date}</span></div>
                <div class="info-item"><span class="info-label">Jenis Kelamin :</span> <span class="info-value">${gender}</span></div>
                <div class="info-item"><span class="info-label">Pesan :</span> <span class="info-value">${message}</span></div>
            `;

            // Update info box
            submittedInfo.innerHTML = infoHTML;
        });
    }
});