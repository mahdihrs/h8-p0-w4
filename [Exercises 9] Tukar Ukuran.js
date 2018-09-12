function tukarBesarKecil(kalimat) {
  var kalimatFinal = '';
  var kalimatArr = [];
  for (var i = 0; i < kalimat.length; i++) {
    if (kalimat[i] === kalimat[i].toUpperCase()) {
      kalimatArr.push(kalimat[i].toLowerCase());
    } else if (kalimat[i] === kalimat[i].toLowerCase()) {
      kalimatArr.push(kalimat[i].toUpperCase());
    }
  }
  for (var i = 0; i < kalimatArr.length; i++) {
    kalimatFinal = kalimatFinal + kalimatArr[i];
  }
  return kalimatFinal;
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"
