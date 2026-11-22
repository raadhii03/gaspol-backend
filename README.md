# GasPol Backend

REST API untuk aplikasi **GasPol**, dibangun menggunakan NestJS, PostgreSQL, dan Prisma ORM. API ini digunakan untuk mengelola data Stasiun Pengisian Bahan Bakar Umum (SPBU) dengan operasi CRUD.

## Teknologi yang Digunakan

- **NestJS** – Framework backend.
- **PostgreSQL** – Database relasional.
- **Prisma ORM** – Pengelolaan database dan query.
- **TypeScript** – Bahasa pemrograman.
- **Class Validator** – Validasi data request.

## Fitur

- Menambahkan data SPBU.
- Menampilkan seluruh data SPBU.
- Menampilkan detail SPBU berdasarkan ID.
- Memperbarui data SPBU.
- Menghapus data SPBU.
- Validasi input menggunakan DTO.
- Penyimpanan data secara permanen menggunakan PostgreSQL.

## Struktur Data SPBU

| Field | Tipe Data | Keterangan |
|---|---|---|
| id | Int | ID unik SPBU |
| nama | String | Nama SPBU |
| alamat | String | Alamat SPBU |
| kota | String | Kota lokasi SPBU |
| latitude | Float | Koordinat latitude |
| longitude | Float | Koordinat longitude |
| status | Boolean | Status SPBU |
| createdAt | DateTime | Waktu pembuatan |
| updatedAt | DateTime | Waktu pembaruan |

## API Endpoints

Base URL: `http://localhost:3000`

| Method | Endpoint | Fungsi |
|---|---|---|
| POST | `/spbu` | Menambahkan SPBU |
| GET | `/spbu` | Menampilkan semua SPBU |
| GET | `/spbu/:id` | Menampilkan detail SPBU |
| PATCH | `/spbu/:id` | Memperbarui data SPBU |
| DELETE | `/spbu/:id` | Menghapus data SPBU |

## Instalasi dan Menjalankan Project

### 1. Clone Repository

```bash
git clone https://github.com/raadhii03/gaspol-backend.git
cd gaspol-backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Konfigurasi Environment

Buat file `.env` di direktori utama project:

```env
DATABASE_URL="postgresql://postgres:PASSWORD@localhost:5432/gaspol_db?schema=public"
```

Ganti `PASSWORD` dengan password PostgreSQL milik masing-masing dan pastikan database `gaspol_db` sudah dibuat.

### 4. Jalankan Migration dan Generate Prisma Client

```bash
npx prisma migrate deploy
npx prisma generate
```

### 5. Jalankan Aplikasi

```bash
npm run start:dev
```

Server berjalan di:

`http://localhost:3000`

## Pengujian API

Pengujian endpoint dilakukan menggunakan HTTP request untuk memastikan seluruh operasi CRUD berjalan dengan baik, termasuk penambahan, pembacaan, pembaruan, dan penghapusan data SPBU.

## Repository

**GitHub:** https://github.com/raadhii03/gaspol-backend

---

**GasPol Backend – Implementasi REST API menggunakan PostgreSQL dan Prisma ORM.**
