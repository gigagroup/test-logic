// Nomor 1
let tahun = 2010;

let konversiAbad = () => {
  if (tahun > 0) {
    let abad = 100;
    let hasil = tahun / abad;
    let bulatkan = Math.round(hasil);
    return `Jadi tahun ${tahun} adalah abad ke-${bulatkan}`;
  }
};

console.log(konversiAbad());
