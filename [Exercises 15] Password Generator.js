function changeVocals (str) {
  var alfabet= 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ' //abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ
  var abjad = 'aiueo'; //'abefijopuvABEFIJOPUV'
  var stringArr = [];

  for (var i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      stringArr.push(' ');
    }
  for (var j = 0; j < alfabet.length; j++) {
    if (str[i] === alfabet[j]) {
      stringArr.push(alfabet[j]);
    }
  }
    switch(str[i]) {
      case 'a': {
        stringArr.push('b');
        break;
      }
      case 'i': {
        stringArr.push('j');
        break;
      }
      case 'u': {
        stringArr.push('v');
        break;
      }
      case 'e': {
        stringArr.push('f');
        break;
      }
      case 'o': {
        stringArr.push('p');
        break;
      }
    }
  }
  return stringArr;
}

function reverseWord (str) {
  var reverseArr = [];
  var putarBalik = changeVocals(str);
  for (var i = putarBalik.length - 1; i >= 0; i--) {
    reverseArr.push(putarBalik[i]);
  }
  return reverseArr;
}

function setLowerUpperCase (str) {
  var hurufKapital = reverseWord(str);
  var kapitalArr = [];
  var lowerUpperCase = '';

  for (var i = 0; i < hurufKapital.length; i++) {
    if (hurufKapital[i] === hurufKapital[i].toUpperCase()) {
      kapitalArr.push(hurufKapital[i].toLowerCase());
    } else if (hurufKapital[i] === hurufKapital[i].toLowerCase()) {
      kapitalArr.push(hurufKapital[i].toUpperCase())
    }
  }

  for (var i = 0; i < kapitalArr.length; i++) {
    lowerUpperCase += kapitalArr[i];
  }
  return lowerUpperCase;
}

function removeSpaces (str) {
  var hapusSpasi = setLowerUpperCase(str);
  var str = hapusSpasi.replace(/\s/g,'');
  return str;
}

function passwordGenerator (name) {
  if (name.length < 5) {
    return 'Minimal karakter yang diinputkan adalah 5 karakter';
  } else {
    return removeSpaces(name);
  }
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
