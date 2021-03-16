// let konversiWaktu = (waktu) => {
//   let [time, modifikasi] = waktu.split(" ");
//   let [hours, minutes] = time.split(":");

//   if (hours === "12") {
//     hours = "00";
//   }
//   if (modifikasi === "PM") {
//     hours = parseInt(hours, 10) + 12;
//   }
//   return `${hours}:${minutes}`;
// };

// console.log(konversiWaktu("01:02 PM"));

let conversiTime = (time) => {
  let inputan = time;
  if (typeof inputan == "string") {
    //   Ambil index 0 dan 1
    let firstIndex = inputan.charAt(0);
    let secondIndex = inputan.charAt(1);

    console.log(firstIndex);
    console.log(secondIndex);
    return `sudah string`;
  } else {
    return `harus berupa string`;
  }
};

console.log(conversiTime("07:05:45PM"));
