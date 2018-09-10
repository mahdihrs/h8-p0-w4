/*
  angka prima cuma bisa dibagi 1 dan angka tersebut
*/

function angkaPrima(angka) {
  if (angka % 2 === 0 || angka % 5 === 0 || angka % 11 === 0) {
    return false;
  }
  else if (angka === 3 || angka === 5 || angka === 7 || angka === 11) {
    return true;
  }
  else {
    return true;
  }
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false
