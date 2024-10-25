// Ambil parameter dari URL
const urlParams = new URLSearchParams(window.location.search);
const idTabel = urlParams.get("id");

if (idTabel) {
  window.history.replaceState({}, "", `/mitra-kerjasama/${id}`);
}

// Cari data mitra berdasarkan id
const mitra = mitraList.find((mitra) => mitra.id == idTabel);

// Ambil elemen div untuk detail mitra
const mitraDetailDiv = document.getElementById("mitra-detail");

if (mitra) {
  mitraDetailDiv.innerHTML = `
        <img src="img/${mitra.picture}" alt="Foto ${mitra.nama}">
        <p>ID : <span style="font-weight: bold;">${mitra.id_mitra}</span></p>
        <p style="font-weight: bold;">${mitra.nama}</p>
        <p>Lokasi: ${mitra.lokasi}</p>
        <p>Bidang: ${mitra.bidang}</p>
        <p>Luas: ${mitra.luas / 10000} Ha</p>
        <p>Status Perjanjian: ${mitra.status}</p>
        <p>Awal Perjanjian: ${new Date(mitra.awal).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}</p>
        <p>Akhir Perjanjian: ${new Date(mitra.akhir).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}</p>
        <br>
        <p style="font-weight: bold;">Piutang :</p>

        <div class="iframe-container">
        <center><iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vR3OGuIO3SI6g3jT_AOTeg7WCRTalLNOInMHZ_uR6Eegjt68H9LBJ39PAZ16AeigdB9iglA7a1VrleI/pubhtml?gid=${
          mitra.piutang
        }&amp;single=true&amp;widget=true&amp;headers=false" width="100%" height="400"></iframe></center>
        </div>
      
        <button onclick="kembali()">Kembali</button>
    `;
} else {
  mitraDetailDiv.innerHTML = `<p>Mitra tidak ditemukan!</p>`;
}

// Fungsi untuk kembali ke halaman utama
function kembali() {
  window.location.href = "index.html";
}
