function cariMedian(arr) {
  for (var i = Math.round((arr.length - 1) / 2); i >= 0; i--) {
    if (arr.length % 2 === 0) {
      return ((arr[i] + arr[i - 1]) / 2);
    } else if (arr.length % 2 !== 0) {
      return arr[i];
    }
  }
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5
