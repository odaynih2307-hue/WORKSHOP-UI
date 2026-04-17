

document.getElementById("formData").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah reload halaman

    // Ambil data dari input
    let nama = document.getElementById("nama").value;
    let email = document.getElementById("email").value;
    let pesan = document.getElementById("pesan").value;

    // Tampilkan hasil
    let outputDiv = document.getElementById("output");
    outputDiv.style.display = "block";
    outputDiv.innerHTML = `
        <h3>Data Berhasil Dikirim!</h3>
        <p><strong>Nama:</strong> ${nama}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Pesan:</strong> ${pesan}</p>
    `;
});