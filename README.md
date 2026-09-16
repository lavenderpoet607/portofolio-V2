# DevPortfolio — Ridho

### Full-Stack Web & Flutter Mobile Developer Portfolio

Website portofolio developer modern berkinerja tinggi yang dirancang khusus menggunakan arsitektur **Bento Grid** dan estetika **Dark Bento Glass** (translucent frosted panels dengan aksen neon Electric Indigo, Cyber Cyan, dan Warm Amber). Website ini dibangun untuk memamerkan keahlian rekayasa perangkat lunak multi-platform mencakup Flutter (iOS & Android), Web Architecture, Point of Sale (POS) & ERP, serta ekosistem E-Commerce.

---

## Daftar Isi

- [Ikhtisar Proyek](#ikhtisar-proyek)
- [Fitur Utama](#fitur-utama)
- [Arsitektur & Desain Sistem](#arsitektur--desain-sistem)
- [Teknologi yang Digunakan](#teknologi-yang-digunakan)
- [Struktur Direktori](#struktur-direktori)
- [Cara Menjalankan](#cara-menjalankan)
- [Daftar Proyek Unggulan](#daftar-proyek-unggulan)
- [Kontak & Kolaborasi](#kontak--kolaborasi)
- [Lisensi](#lisensi)

---

## Ikhtisar Proyek

Website ini dirancang secara mandiri (_standalone_), ringan, cepat diakses, dan sepenuhnya responsif di semua perangkat (Desktop, Tablet, dan Mobile Smartphone). Seluruh aset media disimpan secara lokal di dalam folder `assets/images/` untuk menjamin keandalan pemuatan gambar secara instan tanpa ketergantungan CDN eksternal.

---

## Fitur Utama

### 1. Header & Navigasi Cerdas

- **Fixed Glass Navbar**: Bilah navigasi melayang dengan efek `backdrop-blur-xl`, border tipis elegan, dan breadcrumb monospaced `DevPortfolio / Eka / Developer`.
- **Active Scrollspy (IntersectionObserver)**: Otomatis mendeteksi bagian halaman yang sedang dilihat pengguna dan menyorot menu navigasi yang sesuai secara real-time.
- **Mobile Responsive Drawer**: Menu navigasi responsif yang dapat dibuka/tutup dengan mulus di perangkat layar kecil.
- **Modal Unduh CV**: Dialog interaktif untuk melihat ringkasan Curriculum Vitae dengan opsi cetak langsung atau simpan ke PDF.

### 2. Hero Section Berdaya Tarik Tinggi

- **Live Status Beacon**: Indikator cyan berkedip (_pulsing badge_) `Tersedia untuk Proyek Baru & Full-time`.
- **Headline Gradien**: Tipografi berbobot tebal (_Inter 800_) dengan gradien visual `Cepat, Skalalabel, dan Berdampak`.
- **Terminal Status Pill**: Telemetri singkat `$ stack --status Flutter 3.x, React 19, Laravel 11, Node.js` dan status `⚡ Ready for Production`.
- **Bento Profile Card**: Kartu profil developer terintegrasi dengan foto asli beresolusi tinggi, lencana terverifikasi `Verified Lead Dev`, status `Cross-Platform Specialist`, dan metrik performa (3+ Tahun Pengalaman, 10+ Proyek Selesai, 99% Kepuasan Klien).

### 3. Bagian Tentang Saya (Bento Grid)

- Modul kartu terstruktur yang menjelaskan prinsip rekayasa:
  - **Dari Konsep hingga Produksi**: Alur kerja dari perancangan arsitektur, basis data, API hingga rilis.
  - **Clean Architecture**: Penerapan prinsip SOLID & DRY, memisahkan business logic dari presentation layer.
  - **Pixel-Perfect UI**: Presisi rendering 60–120 FPS di Flutter iOS & Android serta web responsif.
  - **Database & API**: Kueri teroptimasi, token JWT aman, dan latensi minimum.
  - **Penerbitan Google Play Store & Cloud**: Pengalaman App Signing, VPS Ubuntu, Docker, dan CDN.

### 4. Tingkat Pendidikan Berjenjang

Menampilkan dokumentasi visual foto asli institusi pendidikan:

- **Sekolah Dasar (SD)** (2008 — 2014) — _Tahap Fondasi & Karakter_.
- **SMP Global Islamic School** (2014 — 2017) — _Logika Matematika, Sains Terapan, & Wawasan Global_.
- **Pendidikan Tinggi (S1) Rekayasa Perangkat Lunak / Teknik Informatika** — _Spesialisasi Software Engineering, Distributed Systems, dan Mobile Flutter_.

### 5. Pengalaman Kerja & Rekam Jejak

- **Lead Mobile & Full-Stack Developer** (2023 — Sekarang) — Memimpin perancangan multi-platform Flutter dan REST API.
- **Full-Stack Web Developer** (2021 — 2023) — Membangun modul E-Commerce dan POS inventory multi-cabang.
- **Mobile Application Engineer Intern** (2020 — 2021) — Implementasi UI/UX Flutter, SQLite cache lokal, dan Firebase.

### 6. Proyek Unggulan Interaktif

- **Filter Kategori Dinamis**: Tombol filter instan (`Semua`, `Web`, `Mobile`, `ERP/POS`) dengan transisi animasi yang halus.
- **Modal Pratinjau Detail**: Menampilkan popup beresolusi tinggi dengan ringkasan fitur unggulan dan daftar teknologi yang digunakan saat kartu proyek diklik.
- **Simulasi Interaktif Smartphone Flutter**: Mockup perangkat bergerak dengan tombol _Tap Simulasikan Sync Data_ yang menambahkan transaksi simulasi real-time ke layar antarmuka.

### 7. Keahlian & Tech Stack Matrix

Daftar perangkat teknologi terbagi dalam 4 pilar industri:

- **Mobile Development**: Flutter, Dart, Android SDK, iOS Swift Basics, Riverpod, BLoC, SQLite, Hive.
- **Frontend Web**: JavaScript (ES6+), TypeScript, React, Next.js, Vue.js, Tailwind CSS, HTML5, CSS3.
- **Backend & Database**: Laravel, PHP, Node.js, Express, RESTful API, MySQL, PostgreSQL, Firebase.
- **Tools & Workflow**: Git, GitHub Actions, Docker, Figma, Postman, Linux VPS, Nginx.

### 8. Formulir Kontak Bergaya Command-Line Terminal

- Antarmuka formulir bertema terminal `contact_terminal.sh` dengan indikator `ONLINE`.
- Field input interaktif: `$ input --name`, `$ input --email`, `$ input --subject`, dan `$ input --message`.
- Simulasi pengiriman payload dengan indikator status HTTP 200 OK.
- Tautan kontak langsung ke WhatsApp (`+62 813-1168-5803`), Email profesional, LinkedIn, dan GitHub.

---

## Arsitektur & Desain Sistem

Website ini mengadopsi standar sistem desain yang tertuang dalam perancangan modern:

- **Background Utama**: `#0b1326` (Deep Void Slate Canvas).
- **Primary Accent**: `#c0c1ff` / `#6366F1` (Electric Indigo).
- **Secondary Accent**: `#4cd7f6` / `#06B6D4` (Cyber Cyan).
- **Tertiary Accent**: `#ffb95f` / `#F59E0B` (Warm Amber).
- **Surfaces**: Translucent Dark Bento Cards dengan `rgba(23, 31, 51, 0.75)`, `backdrop-filter: blur(16px)`, dan perimeter stroke `1px solid rgba(255, 255, 255, 0.07)`.
- **Tipografi**:
  - Teks Heading & Narasi: **Inter** (400, 500, 600, 700, 800)
  - Telemetri Kode & Label: **JetBrains Mono** (400, 500, 600)

---

## Teknologi yang Digunakan

- **HTML5**: Struktur semantik modern yang aksesibel dan SEO-friendly.
- **Tailwind CSS (CDN)**: Utility-first CSS framework dengan kustomisasi token warna desain sistem.
- **Vanilla JavaScript (ES6+)**: Logika interaktif murni tanpa framework eksternal yang berat (cepat dan efisien).
- **Google Fonts**: Inter & JetBrains Mono.
- **Material Symbols Outlined**: Ikonografi modern dari Google Fonts.
- **CSS3 Kustom (`assets/css/style.css`)**: Glassmorphism, efek glow, grid pattern, animasi denyut, dan kustomisasi scrollbar.

---

## Struktur Direktori

```
d:\pelatihan\project\portofolio\
├── index.html                     # Halaman utama portofolio
├── README.md                      # Dokumentasi komprehensif proyek
└── assets/
    ├── css/
    │   └── style.css              # Custom styling, glow effects, & glassmorphism
    ├── js/
    │   └── main.js                # Logika filter, modal detail, drawer menu, & scrollspy
    └── images/
        ├── profile.jpg            # Foto profil asli developer
        ├── edu_sd.jpg             # Dokumentasi Sekolah Dasar
        ├── edu_smp.jpg            # Dokumentasi Perguruan Global Islamic School
        ├── edu_s1.jpg             # Dokumentasi Kampus S1 Teknik Informatika
        ├── project_codeinko.png   # Tangkapan layar CodeIn LMS Course Platform
        ├── project_evacollection.png # Tangkapan layar Eva Collection E-Commerce
        ├── project_evapos.png     # Tangkapan layar Eva POS & ERP Dashboard
        └── project_webtopup.png   # Tangkapan layar WebTopup Game Online
```

---

## Cara Menjalankan

Proyek ini tidak memerlukan kompilasi rumit karena menggunakan arsitektur statis modern. Anda dapat menjalankannya dengan beberapa opsi di bawah ini:

### Opsi 1: Buka Langsung File HTML

Klik ganda file `index.html` pada File Explorer, atau buka melalui browser pilihan Anda (Google Chrome, Microsoft Edge, Mozilla Firefox, dsb.).

### Opsi 2: Menggunakan Python HTTP Server (Direkomendasikan)

Buka terminal pada direktori proyek, lalu jalankan:

```bash
python -m http.server 8080
```

Buka peramban di URL: **http://localhost:8080**

### Opsi 3: Menggunakan Node.js

Jika Anda memiliki Node.js terpasang:

```bash
npx serve .
```

atau:

```bash
npx http-server -p 8080
```

### Opsi 4: Menggunakan VS Code Live Server

1. Buka folder proyek di Visual Studio Code.
2. Klik kanan pada file `index.html`.
3. Pilih **Open with Live Server**.

---

## Daftar Proyek Unggulan

| Nama Proyek                 | Kategori              | Deskripsi Singkat                                                                                                   | Teknologi Kunci                                      |
| :-------------------------- | :-------------------- | :------------------------------------------------------------------------------------------------------------------ | :--------------------------------------------------- |
| **CodeIn Course Platform**  | Web Learning LMS      | Platform edukasi online interaktif terarah dengan video learning, progress tracker materi, dan kuis validasi.       | React / Next.js, Tailwind CSS, Node.js, PostgreSQL   |
| **Eva Collection**          | Fashion E-Commerce    | Etalase busana online stylish dengan filter produk multi-varian, keranjang cerdas, dan checkout terintegrasi.       | Web E-Commerce, PHP Laravel, Midtrans Gateway, MySQL |
| **Eva POS & ERP Dashboard** | Point of Sale & ERP   | Sistem kasir POS dan manajemen inventaris stok real-time, rekonsiliasi kasir harian, dan laporan laba rugi.         | Laravel 11, Vue.js, Chart.js, MySQL                  |
| **WebTopup Game Online**    | High-Traffic Engine   | Layanan top-up voucher game instan (MLBB, PUBG, FF) dengan validasi akun otomatis dan auto-dispatch &lt; 10 detik.  | Flutter Web/Mobile, Tripay/Midtrans, Redis Queue     |
| **Flutter Mobile Engine**   | Mobile Cross-Platform | Arsitektur aplikasi mobile lintas platform dengan pola state terstruktur, kapabilitas offline-first, dan biometrik. | Flutter, Dart, BLoC, Riverpod, SQLite, Firebase      |

---

## Kontak & Kolaborasi

Tertarik bekerja sama atau ingin mendiskusikan implementasi proyek web/mobile? Silakan hubungi:

- **Nama**: Ridho
- **Peran**: Full-Stack Web & Flutter Mobile Developer
- **WhatsApp**: [+62 813-1168-5803](https://wa.me/6281311685803)
- **Email**: [eka.developer@example.com](mailto:eka.developer@example.com)
- **GitHub**: [github.com](https://github.com)
- **LinkedIn**: [linkedin.com](https://linkedin.com)

---

## Lisensi

Proyek ini dilisensikan di bawah lisensi [MIT License](https://opensource.org/licenses/MIT). Anda bebas memodifikasi dan mengembangkan portofolio ini untuk keperluan pribadi maupun profesional.
