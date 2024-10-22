// Fungsi untuk render list karyawan
function renderKaryawanList(karyawanArray) {
  const karyawanListDiv = document.getElementById("karyawan-list");
  karyawanListDiv.innerHTML = ""; // Kosongkan dulu isinya sebelum render ulang

  if (karyawanArray.length === 0) {
    karyawanListDiv.innerHTML = "<p>Tidak ada karyawan yang ditemukan!</p>";
    return;
  }

  karyawanArray.forEach((karyawan) => {
    const karyawanDiv = document.createElement("div");
    karyawanDiv.classList.add("karyawan-item");

    karyawanDiv.innerHTML = `
          <img src="${karyawan.foto}" alt="Foto ${karyawan.nama}">
          <p>ID Karyawan: ${karyawan.id_karyawan}</p>
          <p>Nama: ${karyawan.nama}</p>
          <button onclick="lihatDetail(${karyawan.id})">Lihat Detail</button>
      `;

    karyawanListDiv.appendChild(karyawanDiv);
  });
}

// Render awal semua karyawan
renderKaryawanList(karyawanList);

// Fungsi lihat detail karyawan
function lihatDetail(id) {
  window.location.href = `detail.html?id=${id}`;
}

// Fungsi pencarian karyawan tanpa menggunakan fetch
function searchKaryawan() {
  const searchInput = document.getElementById("search-input").value.toLowerCase();

  // Filter karyawan berdasarkan nama, id_karyawan, atau bagian
  const filteredKaryawan = karyawanList.filter((karyawan) => karyawan.nama.toLowerCase().includes(searchInput) || karyawan.id_karyawan.toString().toLowerCase().includes(searchInput) || karyawan.bagian.toLowerCase().includes(searchInput));

  // Render ulang daftar karyawan yang sesuai
  renderKaryawanList(filteredKaryawan);
}
