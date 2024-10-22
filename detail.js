// Ambil parameter dari URL
const urlParams = new URLSearchParams(window.location.search);
const idTabel = urlParams.get("id");

// Cari data karyawan berdasarkan id
const karyawan = karyawanList.find((karyawan) => karyawan.id == idTabel);

// Ambil elemen div untuk detail karyawan
const karyawanDetailDiv = document.getElementById("karyawan-detail");

if (karyawan) {
  karyawanDetailDiv.innerHTML = `
        <img src="${karyawan.foto}" alt="Foto ${karyawan.nama}">
        <p>ID Karyawan: ${karyawan.id_karyawan}</p>
        <p>Nama: ${karyawan.nama}</p>
        <p>Bagian: ${karyawan.bagian}</p>
        <p>Tanggal Lahir: ${karyawan.tanggal_lahir}</p>
        <br>
        <p style="font-weight: bold;">Iuran :</p>
        <center><iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR3_enajojneRADf6LQMFalGi_MHtOljxyN9QLv85_r42FlNmccJeSAO2gPOifglQ/pubhtml?gid=${karyawan.iuran}&single=true&amp;widget=true&amp;headers=false"></iframe></center>;
        
        <button onclick="kembali()">Kembali</button>
    `;
} else {
  karyawanDetailDiv.innerHTML = `<p>Karyawan tidak ditemukan!</p>`;
}

// Fungsi untuk kembali ke halaman utama
function kembali() {
  window.location.href = "index.html";
}
