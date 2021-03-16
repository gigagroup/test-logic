let Palindrome = (words) => {
  let data = words;
  let bukanPalindrom = false;
  let palindrom = true;

  if (typeof data == "string") {
    for (let i = 0; i < data.length / 2; i++) {
      data[i] !== data[data.length - 1 - i];
      if (data[i] == false) {
        return bukanPalindrom;
      }
    }
    return palindrom;
  } else {
    return `harus berupa string`;
  }
};

console.log(Palindrome("kasurrusak"));
