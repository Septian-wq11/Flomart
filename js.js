// Data sub kategori
const subKategoriData = {
    tanaman: ["Tanaman Hias", "Tanaman Buah"],
    benih: ["Benih Sayur", "Benih Buah"],
    pupuk: ["Pupuk Organik", "Pupuk Anorganik"]
};

// Pengaturan sub kategori
document.getElementById("kategori").addEventListener("change", function() {
    let kategori = this.value;
    let subSelect = document.getElementById("sub_kategori");

    subSelect.innerHTML = '<option value="">-- Pilih Sub Kategori --</option>';

    if (kategori !== "") {
        subKategoriData[kategori].forEach(function(sub) {
            let option = document.createElement("option");
            option.value = sub;
            option.text = sub;
            subSelect.appendChild(option);
        });
    }
});

// Fungsi cek hanya huruf dan spasi
function hanyaHuruf(text) {
    for (let i = 0; i < text.length; i++) {
        let char = text[i];

        // Cek apakah karakter bukan huruf dan bukan spasi
        if (!(char >= 'a' && char <= 'z') &&
            !(char >= 'A' && char <= 'Z') &&
            char !== ' ' && 
            char !== "'") {
            return false;
        }
    }
    return true;
}

// Validasi form
document.getElementById("formProduk").addEventListener("submit", function(event) {

    let namaProduk = document.getElementById("nama_produk").value.trim();
    let kategori = document.getElementById("kategori").value;
    let subKategori = document.getElementById("sub_kategori").value;
    let harga = document.getElementById("harga").value.trim();
    let stok = document.getElementById("stok").value;
    let iklim = document.getElementById("iklim_ideal").value;
    let tanah = document.getElementById("jenis_tanah").value;
    let garansi = document.getElementById("garansi_bulan").value;
    let deskripsi = document.getElementById("deskripsi").value.trim();
    let gambar = document.getElementById("gambar").files.length;

    if (gambar === 0) {
        alert("Gambar produk wajib diupload!");
        event.preventDefault();
        return;
    }

    if (namaProduk === "") {
        alert("Nama produk wajib diisi!");
        event.preventDefault();
        return;
    }

    if (!hanyaHuruf(namaProduk)) {
        alert("Nama produk hanya boleh berisi huruf dan spasi!");
        event.preventDefault();
        return;
    }

    if (kategori === "") {
        alert("Silakan pilih kategori!");
        event.preventDefault();
        return;
    }

    if (subKategori === "") {
        alert("Silakan pilih sub kategori!");
        event.preventDefault();
        return;
    }

    if (!hanyaHuruf(subKategori)) {
        alert("Sub kategori hanya boleh berisi huruf dan spasi!");
        event.preventDefault();
        return;
    }

    if (harga === "" || isNaN(harga)) {
        alert("Harga harus berupa angka!");
        event.preventDefault();
        return;
    }

    if (stok === "" || stok < 0) {
        alert("Stok tidak boleh kosong atau minus!");
        event.preventDefault();
        return;
    }

    if (iklim === "") {
        alert("Silakan pilih iklim ideal!");
        event.preventDefault();
        return;
    }

    if (tanah === "") {
        alert("Silakan pilih jenis tanah!");
        event.preventDefault();
        return;
    }

    if (garansi < 0) {
        alert("Garansi tidak boleh minus!");
        event.preventDefault();
        return;
    }

    if (deskripsi.length < 10) {
        alert("Deskripsi minimal 10 karakter!");
        event.preventDefault();
        return;
    }

    if (!hanyaHuruf(deskripsi)) {
        alert("Deskripsi hanya boleh berisi huruf dan spasi!");
        event.preventDefault();
        return;
    }

    event.preventDefault();
    alert("Produk berhasil disimpan!");
    document.getElementById("formProduk").reset();
});