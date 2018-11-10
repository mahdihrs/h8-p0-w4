//solution 1 menggunakan for loop untuk mengalikan setiap karakter dalam angka
function kaliTerusRekursif(angka) {
  if (angka < 10) {
    return angka
  }
  else {
    var numStr = angka.toString()
    angka = 1
    for (var i = 0; i < numStr.length; i++) {
      angka *= numStr[i]
    }
    return kaliTerusRekursif(angka)
  }
}


//solution 2 menggunakan function lain untuk mengalikan setiap karakter dalam angka

// function kaliTerusRekursif(angka) {
//   if (angka < 10) {
//     return angka
//   }
//   else {
//     var numStr = angka.toString()
//     return kaliTerusRekursif(kaliString(numStr))
//   }
// }

// function kaliString(angkaStr) {
//   if (angkaStr.length < 1) {
//     return 1
//   }
//   else {
//     return Number(angkaStr[0]) * kaliString(angkaStr.substring(1))
//   }
// }

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6
