# Portofolio Pribadi — Muhamad Ridho Albukhori

## Identitas
- **Nama:** Muhamad Ridho Albukhori
- **NIM:** 2559201032
- **Program Studi:** Sistem dan Teknologi Informasi
- **Kampus:** Universitas Pertiba
- **Angkatan:** 2025

## Tema dan tujuan
Website portofolio pribadi untuk proyek UTS Pemrograman Web Dasar. Proyek dibuat menggunakan HTML, CSS, dan JavaScript murni dengan tema Gothic Dark: hitam, merah marun, dan perak.

## Halaman
1. **Beranda** — perkenalan singkat dan karya unggulan.
2. **Tentang** — profil, tujuan belajar, dan riwayat pendidikan.
3. **Karya** — katalog enam karya/latihan dalam bentuk kartu.
4. **Kontak** — email, GitHub, dan peta lokasi umum.

## Fitur dan penerapan materi
- Navigasi yang konsisten pada setiap halaman.
- HTML semantik: header, nav, main, section, article, dan footer.
- Tabel riwayat pendidikan menggunakan thead dan tbody.
- CSS eksternal dengan variabel warna, Flexbox, CSS Grid, media query, hover, transition, dan keyframes.
- Menu hamburger untuk tampilan layar kecil.
- Enam ilustrasi SVG lokal dengan ukuran kanvas 800 × 520 dan gaya visual yang seragam. Ilustrasi kalkulator C++ menampilkan kode serta hasil perhitungan.
- Halaman Kontak menampilkan email, GitHub, dan peta. Formulir kirim pesan sengaja dihilangkan sesuai keputusan desain.

## Struktur folder
```text
.
├── index.html
├── tentang.html
├── katalog.html
├── kontak.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── img/
│   ├── kalkulator.svg
│   ├── web-profil.svg
│   ├── latihan-web.svg
│   ├── css-layout.svg
│   ├── php-code.svg
│   └── python-code.svg
├── bukti/
│   └── README.txt
└── README.md
```

## Cara menjalankan
1. Buka folder proyek di VS Code.
2. Jalankan `index.html` di browser atau gunakan ekstensi Live Server.
3. Proyek tidak memerlukan framework atau instalasi package tambahan.
4. Peta pada halaman Kontak memerlukan koneksi internet.

## Penyesuaian foto profil
Beranda saat ini menggunakan placeholder inisial RA. Untuk memakai foto sendiri, simpan foto di folder `img/`, lalu ganti elemen `.profile-placeholder` di `index.html` dengan elemen gambar yang memiliki atribut alt deskriptif. Atur gambar menggunakan `width: 100%`, `height: 280px`, dan `object-fit: cover`.

## Pemeriksaan sebelum pengumpulan
- [x] Empat halaman dan tautan lokal sudah diperiksa keberadaannya.
- [x] Aset ilustrasi SVG lokal sudah tersedia.
- [ ] Uji tampilan di browser desktop dan HP.
- [ ] Validasi setiap halaman melalui https://validator.w3.org/nu/.
- [ ] Simpan tangkapan layar hasil validasi untuk empat halaman di folder `bukti/`.
- [ ] Pastikan seluruh isi profil dan riwayat pendidikan sudah benar.

Catatan: pemeriksaan tautan lokal dilakukan pada source file. Pengujian lintas browser dan validasi W3C belum diklaim selesai.
