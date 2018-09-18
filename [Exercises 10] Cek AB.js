function checkAB(num) {
  var numSplit = num.split('');
  var indexA = 0;
  var indexB = 0;
  var jarak = 0;

  for (var i = 1; i < numSplit.length; i++) {
    if (numSplit[i] === 'a') {
      indexA = numSplit.indexOf('a');
    } else if (numSplit[i] === 'b') {
      indexB = numSplit.indexOf('b');
    }
  }
  jarak = indexB - indexA;
  if (jarak <= 0) {
    return false;
  } else {
    return true;
  }
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false
