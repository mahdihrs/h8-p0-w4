/*
  kalo ga ada yang sama berarti lanjut ke nomor selanjutnya [i + 1];
  berarti data array tsb dikeluarin dari array


*/

function cariModus(arr) {
  var modus = [];
  var arrMod = true;
  var arrNum = 0;
  // console.log(arrNum);
  for (var i = 0; i < arr.length; i++) {
    if (arrMod !== arr[i]) {
      arrNum = arrNum + arr[i + 1];
      // return arrNum;
    } else if (arrNum === arr[i]) {

    }
  }
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
// console.log(cariModus([5, 10, 10, 6, 5])); // 5
// console.log(cariModus([10, 3, 1, 2, 5])); // -1
// console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
// console.log(cariModus([7, 7, 7, 7, 7])); // -1
