function sorting(arrNumber) {
  var isDone = false;
  while (!isDone) {
    isDone = true;
    for (var i = 1; i < arrNumber.length; i += 1) {
      if (arrNumber[i - 1] > arrNumber[i]) {
        isDone = false;
        var tmp = arrNumber[i - 1];
        arrNumber[i - 1] = arrNumber[i];
        arrNumber[i] = tmp;
      }
    }
  }
  return arrNumber;
}

function getTotal(arrNumber) {
  var palingBesar = arrNumber[arrNumber.length - 1]
  var jumlahMuncul = 0;
  for (var j = 0; j < arrNumber.length; j++) {
    if (arrNumber[j] === palingBesar) {
      jumlahMuncul = jumlahMuncul + 1;
    }
  }
  return 'angka paling besar adalah ' + palingBesar + ' dan jumlah kemunculan sebanyak ' + jumlahMuncul + ' kali';
}

function mostFrequentLargestNumbers(arrNumber) { // [2, 8, 4, 6, 8, 5, 8, 4]
  if (arrNumber.length === 0) {
    return '';
  }
  var listSort = sorting(arrNumber); // [ 2, 4, 4, 5, 6, 8, 8, 8 ]
  var countHighest = getTotal(listSort); // 'angka paling besar adalah ' + 8 + ' dan jumlah kemunculan sebanyak ' + 3 + ' kali';
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''
