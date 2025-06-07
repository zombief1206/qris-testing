/*
  TTTTT  III  GGG   EEEEE  RRRR     DDDD   EEEEE  V   V  SSSS
    T     I   G      E      R   R    D   D  E      V   V  S
    T     I   G  GG  EEEE   RRRR     D   D  EEEE   V   V  SSS
    T     I   G   G  E      R  R     D   D  E      V   V     S
    T    III  GGGG   EEEEE  R   R    DDDD   EEEEE  VVV   SSSS

               QRIS API TIGER_DEVS X PRESTIGE v.1
*/

// Konfigurasi QRIS API TIGER X PRESTIGE v.1

const CONFIGQRIS = (() => {
  return {
    siteName: "fanta168",

    status: "ON", // Harus Huruf Besar (ON / OFF)

    showbuttonqris: "ON", // Harus Huruf Besar (ON / OFF)

    qrisbank: [
      "BANKNEO",
      "KOSPIN",
      "MAYBANK",
      "MEGA",
      "OCBC",
      "BANKPAPUA",
      "SINARMAS",
      "SUMUT",
      "PANIN",
    ], // HARUS HURUF Besar Untuk nama2 bank

    minimalDeposit: 10000,
    qrisbtntext: "Qris New Auto",
    qrisIcon:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Logo_QRIS.svg/2560px-Logo_QRIS.svg.png",
    qrisIconWidth: 200,
    qrisIconHeight: 0,
    durasipending: 5, // Durasi Pakai Menit
    noticeText:
      "Agar Pembayaran bisa berjalan lancar, Mohon di isi nominal deposit yang berbeda per transaksi!",
    successqris: "Silahkan isi depositnya dengan scan QRIS diatas.",
    pendingqris:
      "Deposit anda masih pending, Silahkan melakukan pembayaran ini agar bisa menikmati permainan kami.",
    successdepo:
      "Deposit sudah berhasil diproses. Selamat bermain, sukses selalu untuk bosku",

    qriscssfile: "css/qris-api.css", // JANGAN DIUBAH
    apiurl: "https://api.link.com", // JANGAN DI UBAH
    env: "DEBUG", // JANGAN DI UBAH
    elementSelector: "#qris-tiger-prestige", // JANGAN DI UBAH
    elementPendingSelector: "#qris-tiger-prestige", // JANGAN DI UBAH
  };
})();
