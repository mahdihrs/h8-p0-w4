function kaliTerusRekursif(angka) {
  var angkaMod = angka % 10;
  var sisaAngka = angkaMod;
  var operasiLanjutan = Math.floor(angka / 10);

  if (angka < 10) {
    return angka;
  }

  else {
    if (angka < 100) {
      sisaAngka *= kaliTerusRekursif(operasiLanjutan);
      return sisaAngka;
    }
    else {
      sisaAngka *= kaliTerusRekursif(operasiLanjutan);
      if (sisaAngka >= 100) {
        return 0;
      }
      else {
        return sisaAngka;
      }
    }
  }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6
