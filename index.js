// Fungsi untuk render list mitra
function renderMitraList(mitraArray) {
  const mitraListDiv = document.getElementById("mitra-list");
  mitraListDiv.innerHTML = ""; // Kosongkan dulu isinya sebelum render ulang

  if (mitraArray.length === 0) {
    mitraListDiv.innerHTML = "<p>Tidak ada mitra yang ditemukan!</p>";
    return;
  }

  mitraArray.forEach((mitra) => {
    const mitraDiv = document.createElement("div");
    mitraDiv.classList.add("mitra-item");

    mitraDiv.innerHTML = `
          <img src="img/${mitra.picture}" alt="Foto ${mitra.nama}">
          <p>ID mitra: ${mitra.id_mitra}</p>
          <p>Nama: ${mitra.nama}</p>
          <button onclick="lihatDetail(${mitra.id})">Lihat Detail</button>
      `;

    mitraListDiv.appendChild(mitraDiv);
  });
}

// Render awal semua mitra
renderMitraList(mitraList);

// Fungsi lihat detail mitra
function lihatDetail(id) {
  window.location.href = `detail.html?id=${id}`;
}

// Fungsi pencarian mitra tanpa menggunakan fetch
function searchMitra() {
  const searchInput = document.getElementById("search-input").value.toLowerCase();

  // Filter mitra berdasarkan nama, id_mitra, atau lokasi
  const filteredMitra = mitraList.filter((mitra) => mitra.nama.toLowerCase().includes(searchInput) || mitra.id_mitra.toString().toLowerCase().includes(searchInput) || mitra.lokasi.toLowerCase().includes(searchInput));

  // Render ulang daftar mitra yang sesuai
  renderMitraList(filteredMitra);
}
