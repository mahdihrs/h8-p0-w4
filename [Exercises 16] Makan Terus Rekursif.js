function makanTerusRekursif(waktu) {
  if (waktu == 0) {
    return 0;
  }
  else {
    if (waktu >= 15) {
      if (waktu % 15 === 0) {
        return waktu / 15;
      } else if ((waktu % 15) < 15) {
        return Math.floor(waktu / 15) + 1;
      }
    }
    else if (waktu < 15) {
      return 1;
    }
    makanTerusRekursif(waktu);
  }

}

// TEST CASES
console.log(makanTerusRekursif(66)); // 5
console.log(makanTerusRekursif(100)); // 7
console.log(makanTerusRekursif(90)); // 6
console.log(makanTerusRekursif(10)); // 1
console.log(makanTerusRekursif(0)); // 0
