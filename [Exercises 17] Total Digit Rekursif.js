function totalDigitRekursif(angka) {
  //mencari modulus 10 dari 'angka'
  var angkaMod = angka % 10;
  var sisaAngka = angkaMod;

  //apabila angka kurang dari 10, maka RETURN angka tersebut
  if (angka < 10) {
    return angka;
  }
  
  //kondisi untuk angka lebih dari sama dengan 10
  else {
    //variabel 'angkaOperasiLanjutan' untuk mencari angka yang akan digunakan pada operasi selanjutnya
    var angkaOperasiLanjutan = Math.floor(angka / 10);
    /*nilai pada variabel 'sisaAngka' akan ditambahkan dengan hasil dari pemanggilan fungsi 'totalDigitRekursif' dengan nilai angka digantikan
    dengan nilai 'angkaOperasiLanjutan'
    */
    sisaAngka += totalDigitRekursif(angkaOperasiLanjutan);
    return sisaAngka;
  }
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5
