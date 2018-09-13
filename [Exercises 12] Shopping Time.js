function shoppingTime(memberId, money) {
  if (memberId === undefined || memberId === '' || money === undefined) {
    return 'Mohon maaf, toko X hanya berlaku untuk member saja'
  } else if (money < 50000) {
    return 'Mohon maaf, uang tidak cukup'
  }

  var staccatu = 1500000;
  var zoro = 500000;
  var bajuHaEn = 250000;
  var uniklooh = 175000;
  var casingPonsel = 50000;
  var shoppingSpree = { memberId: memberId, money: money, listPurchased: [], changeMoney: 0 }
  for (var i = 1; i < 6; i++) {
    if (money >= 1500000) {
      shoppingSpree.listPurchased.push('Sepatu Staccatu')
      money = money - 1500000;
    } else if (money >= 500000 && money < 1500000) {
      shoppingSpree.listPurchased.push('Baju Zoro')
      money = money - 500000;
    } else if (money >= 250000 && money < 500000) {
      shoppingSpree.listPurchased.push('Baju H&N')
      money = money - 250000;
    } else if (money >= 175000 && money < 250000) {
      shoppingSpree.listPurchased.push('Sweater Uniklooh')
      money = money - 175000;
    }
  }

  if (money >= 50000 && money < 175000) {
    shoppingSpree.listPurchased.push('Casing Handphone')
    money = money - 50000;
  }

  shoppingSpree.changeMoney = money;
  return shoppingSpree;
  
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
