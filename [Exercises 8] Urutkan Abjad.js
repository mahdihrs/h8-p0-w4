function urutkanAbjad(str) {
  var strSplit = str.split('');
  var strSort = strSplit.sort();
  var temp = '';
  for (var i = 0; i < strSort.length; i++) {
    temp = temp + strSort[i].toString();
    strFinal = temp;
  }
  return strFinal;
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'
