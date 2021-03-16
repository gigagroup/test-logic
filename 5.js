// Start
// Buat Fungsi
// kondisi true hanya bisa menerima string
// buat loopiing untuk menampilkan semua string
// jika sting kurang dari 3 karakter maka false
// buat variabel "data" untuk menapung data
// target index ke 0 dan terakhir
// lalu tidak perlu eksekusi untuk index yang ke 0 dan terkhir
function deleteChars(words) {
  let inputan = words;
  if (typeof inputan == "string") {
    console.log("Ini adalah string");
  } else {
    console.log("Inputan harus string");
  }
}

console.log(deleteChars("Skilvul"));
