# latihan

# Soal 1

Buatlah sebuah function untuk mengkoversi tahun menjadi abad / century contohnya seperti berikut tahun 1700 adalah abad 17, atau tahun 2010 adalah abad 21 
Dengan keterangan sebagai berikut :
- fungsi tersebut hanya bisa menerima tipe data number
- kembalian nilai juga harus berupa number

contoh pengujian :
1. 2010 // output 21
2. 1699 // output 17
3. 1700 // output 17
4. 1 // output 1
5. 100 // output 2

# Soal 2
**palindrome** adalah sebuah kata, frasa, angka maupun susunan lainnya yang dapat dibaca dengan sama baik dari depan maupun belakang (spasi antara huruf-huruf biasanya diperbolehkan). seperti katak atau kasurrusak atau kutuk, tiga kata tersebut jika dibalik akan sama saja urutan penulisannya, katak jika dibalik tetap katak, ini yang disebut palindrome

buatlah fungsi untuk mengecek apakah kata tersebut termasuk palindrome atau tidak
- kembalikan nilai true jika kata tersebut adalah palindrome, dan kembalikan false jika tidak
- fungsi ini hanya bisa menerima argumen berupa tipe data string, tidak yang lain

contoh pengujian:
1. "katak" // true
2. "kasurrusak" // true
3. "ketemu" // false

# Soal 3
buatlah sebuah fungsi untuk mengubah time conversion dari 12 jam menjadi 24 jam.
dengan keterangan sebagai berikut :
- fungsi tersebut hanya bisa menerima tipe data string
- kembalian nilai juga harus berupa string

contoh pengujian:
1. 07:05:45PM // 19:05:45
2. 02:05:45AM // 02:05:45
3. 12:45:00AM // 00:45:00

# Soal 4

Buatlah sebuah fungsi yang akan membalik urutan kata dari sebuah kalimat.

rules : 

- fungsi hanya bisa memproses string

- jika sting hanya terdiri dari 1 kata, tampilkan kata tersebut




Contoh :

```javascript
reverseWords("Belajar javascript itu menyenangkan sekali") // "sekali menyenangkan itu javascript Belajar"
reverseWords("Skilvul") // "Skilvul"
reverseWords("Impact Byte") // "Byte Impact"

```

# Soal 5

Buatlah sebuah fungsi yang akan menghapus karakter pertama dan karakter terakhir pada sebuah string

rules : 

- fungsi hanya bisa memproses string
- jika string kurang dari 3 karakter, maka kembalikan nilai false

Contoh :

```javascript
deleteChars("Belajar javascript itu menyenangkan sekali") // "elajar javascript itu menyenangkan sekal"
deleteChars("Skilvul") // "kilvu"
deleteChars("yo") // false

```

# Soal 6

Buatlah sebuah fungsi yang akan mengembalikan jumlah total dari element array yang bernilai positif

rules:

- fungsi hanya bisa memproses input berupa array of number

Contoh

```javascript
sumPositive([1,-4,7,12]) // 20
sumPositive([-1,-4,-7,-12]) // 0
sumPositive([-1,-4,"7",-12]) // false

```

# Soal 7

Buatlah sebuah fungsi untuk membandingkan 2 buah array dan mengembalikan element yang tidak ada di dalam salah satu array tersebut

rules:

- fungsi hanya bisa memproses input berupa 2 buah array
- jika ada element yang tidak ada di salah satu array pembanding, maka kembalikan nilai 0
- jika ada element yang tidak ada di salah satu array pembanding, kembalikan semua element tersebut dalam format array

```javascript
checkArray([1,2,3,4,5], [1,2,3,4]) // [5]
checkArray([1,2,3,5], [1,2,3,4]) // [4,5]
checkArray([1,2,4,5], [1,2,3,4,6]) // [3,5,6]
checkArray([1,2,4], [1,2,4]) // 0

```

# BONUS 1

Buatlah sebuah fungsi yang bisa mengubah urutan karakter dalam sebuah string dengan ketentuan sebagai berikut:

- Bagi string menjadi 2 bagian, depan dan belakang
- Setengah bagian dari string depan pindahkan ke belakang
- Setengah bagian dari string belakang pindahkan kedepan.
- Jika string dibagi dua dan ada karakter yang di tengah, biarkan karakter ini tetap pada posisinya
- kembalikan string yang sudah di tukar posisinya 
- inputan string tidak ada spasi

Contoh 1

```javascript
changeStringPosition("aaabccc") // "cccbaaa"
changeStringPosition("aab") // "baa"
changeStringPosition("aaaacccc") // "ccccaaaa"
changeStringPosition("abcdefghabcdef") // "habcdefabcdefg"

```

# BONUS 2

Buatlah sebuah fungsi yang akan menghitung selisih terbesar dari element pada sebuah array dengan ketentuan sebagai berikut:

- fungsi hanya bisa memproses array of number
- number dalam array boleh ada yang duplicate
- number dalam array tidak dalam kondisi berurutan
- output berupa number

Contoh 1

```javascript
maxDiff([1,2,3,4,5]) // 4
maxDiff([7,2,19,46,3]) // 44
maxDiff([-2, 0, -33, 55, -200]) // 145

```