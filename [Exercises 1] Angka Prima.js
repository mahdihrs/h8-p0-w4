/*
  angka prima cuma bisa dibagi 1 dan angka tersebut
*/

function angkaPrima(angka) {
  var bilanganPrima = true;
  for (var i = 2; i < angka; i++) {
    if (angka % i === 0) {
      bilanganPrima = false;
    }
  }

  if (angka < 2) {
    return false;
  }

  return bilanganPrima;
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false
console.log(angkaPrima(1)); // false
console.log(angkaPrima(-4)); // false
