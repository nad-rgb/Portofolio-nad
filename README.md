# Portfolio Nadila Anggraeni — Panduan Instalasi & Kustomisasi

Website ini sudah diisi dengan **data asli dari PDF portofolio kamu**: bio,
pendidikan, skill, 3 pengalaman kerja (XL Axiata, Maxtion, Communion Event),
dan proyek yang paling relevan untuk posisi **Social Media Specialist**
(pengelolaan Instagram, strategi konten, dan video). Foto-foto asli kamu dari
PDF juga sudah otomatis dimasukkan ke bagian hero, tentang saya, dan galeri
pengalaman/proyek.

## Isi folder

```
nadila-portfolio/
├── index.html
├── style.css
├── script.js
├── assets/
│   ├── profil/            → foto hero & tentang saya (sudah diisi)
│   ├── pengalaman/         → foto tiap pengalaman kerja (sudah diisi)
│   │   ├── maxtion/
│   │   ├── communion/
│   │   └── xlaxiata/
│   ├── proyek/             → foto tiap galeri proyek (sudah diisi)
│   │   ├── ig-xlsmart/
│   │   ├── ig-maxtion/
│   │   ├── video-hydroponix/
│   │   ├── campaign-iot/
│   │   └── event-content/
│   └── videos/             → KOSONG, isi dengan video asli kamu (lihat Langkah 4)
└── README.md
```

## ⚠️ Penting: cek ulang foto yang sudah dipasang

Foto diambil otomatis dari file PDF kamu. Sebagian besar sudah saya cocokkan
dengan konteksnya (foto hero & tentang saya, foto acara Communion, foto XL
Axiata, screenshot Instagram xlsmart_iot & Plaza Mebel). Tapi karena PDF tidak
memberi label per foto, **ada kemungkinan kecil urutan/pemasangan foto di
galeri "Pengalaman XL Axiata" (4 foto) meleset dari yang kamu maksud**.

Cara mengecek & memperbaiki jika perlu:
1. Buka folder `assets/pengalaman/xlaxiata/` — lihat 4 foto di dalamnya.
2. Kalau urutannya sudah pas, tidak perlu apa-apa.
3. Kalau ada yang mau ditukar, tinggal rename file (`foto-1.jpg`, `foto-2.jpg`,
   dst.) sesuai urutan yang kamu mau — `index.html` sudah memanggil nama file
   itu di section `#pengalaman`.

## Langkah 1 — Install VS Code & Extension

1. Unduh VS Code di https://code.visualstudio.com
2. Install extension **"Live Server"** (oleh Ritwick Dey) dari tab Extensions.

## Langkah 2 — Buka folder proyek di VS Code

1. Extract folder `nadila-portfolio` ke lokasi pilihanmu.
2. **File → Open Folder** → pilih folder `nadila-portfolio`.
3. Klik kanan `index.html` → **"Open with Live Server"**.

## Langkah 3 — Cek & sesuaikan teks

Data yang sudah dimasukkan dari PDF kamu:
- Bio ENFJ, pendidikan (SMAN 4 Garut, SMAN 11 Garut, Universitas Garut),
  skill teknis/desain/soft skill
- Pengalaman: XL Axiata (paling detail), Maxtion, Communion Event
- Kontak: [email protected], 085603554721, @nadilaanggrni

Kalau ada info yang ingin diperbarui (misalnya LinkedIn — belum ada di PDF
jadi belum saya cantumkan, atau update angka tahun), edit langsung di
`index.html`. Gunakan **Ctrl+F / Cmd+F** untuk mencari teks yang mau diubah.

## Langkah 4 — Memasukkan video asli kamu (dari laptop, bukan link)

Bagian **"Showcase Konten Video"** sudah punya 3 slot untuk video komersial
yang kamu sebutkan pernah dibuat (Hydroponix, RDD, HelloMet):

1. Taruh file video (`.mp4`, sebaiknya di bawah 20MB) ke folder
   `assets/videos/`.
2. Beri nama sesuai yang sudah dirujuk di `index.html`:
   - `assets/videos/hydroponix.mp4`
   - `assets/videos/rdd.mp4`
   - `assets/videos/hellomet.mp4`
3. Kalau nama file videomu beda, buka `index.html`, cari `<source src="assets/videos/...">`
   dan sesuaikan.
4. Video akan otomatis muncul dengan tombol play — tidak perlu link YouTube.

Kamu juga bisa menambah video di galeri klik-buka pada tiap kartu proyek (mis.
"Video Komersial Hydroponix") — edit bagian `videoHydroponix` di `script.js`
untuk menambahkan baris `{ type: 'video', src: '...' }`.

## Langkah 5 — Klik kartu Proyek untuk lihat galeri

Semua kartu di bagian **"Karya Unggulan"** bisa diklik dan membuka galeri foto/
video proyek tersebut — sudah terhubung ke folder `assets/proyek/`. Kalau mau
menambah foto ke galeri tertentu, taruh file baru di folder proyeknya, lalu
tambahkan barisnya di `projectsData` pada `script.js`.

## Langkah 6 — Publikasikan (gratis)

Setelah puas, upload gratis ke **Netlify Drop**: buka
https://app.netlify.com/drop lalu drag-and-drop folder `nadila-portfolio`.
Kamu akan dapat link publik untuk dicantumkan di CV/LinkedIn.
