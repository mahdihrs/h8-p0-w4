function  digitPerkalianMinimum(angka) {
    var perkalianMinimum = [];
    var temp = [];
    var str = '';

    for (var i = 0; i <= angka; i++) {
        if (angka % i === 0) {
        temp.push(i);
        }
    }

    for (var i = 0; i < temp.length / 2 ;i++) {
        if (temp[i] * temp[temp.length - 1 - i] === angka) {
          str = temp[i].toString();
          str = str + temp[temp.length - 1 - i].toString();
          perkalianMinimum.push(str);
        }
    }
    perkalianMinimum.sort();
    return perkalianMinimum[perkalianMinimum.length - 1].length;
  }

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2
