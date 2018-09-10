function ubahHuruf(kata) {
  var kumpulanKarakter = [];
  var max = 'abcdefghijklmnopqrstuvwxyz';
  for (var i = 0; i < kata.length; i++) {
    for (var j = 0; j < max.length; j++) {
      var temp = '';
      if (kata[i] === max[j]) {
        temp = temp + max[j + 1];
        kumpulanKarakter.push(temp);
      }
    }
  }
  var kataFinal = '';
  for (var i = 0; i < kumpulanKarakter.length; i++) {
    kataFinal = kataFinal + kumpulanKarakter[i];
  }
  return kataFinal;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu
