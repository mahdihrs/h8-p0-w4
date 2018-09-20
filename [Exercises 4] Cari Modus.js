function cariModus(arr) {
  var angka = 0;
  var pembanding = 0;

  for (var i = 0; i < arr.length; i++) {
    var counter = 0;
    for (var j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        counter += 1;
      }
    }
    if (counter > pembanding) {
      pembanding = counter;
      angka = arr[i];
    }
  }
  if ( pembanding === 1) {
    return -1;
  } else if (pembanding === arr.length) {
    return -1;
  }
  return angka;
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
