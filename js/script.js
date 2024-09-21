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

            // Update welcome message
            welcomeMessage.textContent = `Hi ${name}, Welcome To Website`;

            // Create formatted info string
            const infoHTML = `
                <div class="info-item"><span class="info-label">Nama :</span> <span class="info-value">${name}</span></div>
                <div class="info-item"><span class="info-label">Tanggal :</span> <span class="info-value">${date}</span></div>
                <div class="info-item"><span class="info-label">Jenis Kelamin :</span> <span class="info-value">${gender}</span></div>
                <div class="info-item"><span class="info-label">Pesan:</span> <span class="info-value">${message}</span></div>
            `;

            // Update info box
            submittedInfo.innerHTML = infoHTML;
        });
    }
});