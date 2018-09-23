function changeMe(arr) {
  if (arr == []) {
    return '';
  }
  for (var i = 0; i < arr.length; i++) {
    console.log(i + 1 + '. ' + arr[i][0] + ' ' + arr[i][1]) + ':';
    var arrObj = {
      firstName: arr[i][0],
      lastName: arr[i][1],
      gender: arr[i][2],
      age: 2018 - arr[i][3]};
  if (isNaN(arrObj.age) || arrObj.age <= 0) {
     arrObj.age = 'Invalid Birth Year';
  }
  console.log(arrObj);
  }
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]);
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""
