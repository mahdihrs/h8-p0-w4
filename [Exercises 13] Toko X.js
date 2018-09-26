function countProfit(shoppers) {
  if (shoppers.length === 0) {
    return [];
  }

  var listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                     ['Baju Zoro', 500000, 2],
                     ['Sweater Uniklooh', 175000, 1]
                   ];

  var obj = {};

  //looping untuk membuat unik masing-masing produk dengan mengakses setiap elemen yang ada dalam listBarang
  for (var i = 0; i < listBarang.length; i++) {
    obj[listBarang[i][0]] = {
      product: listBarang[i][0],
      shoppers: [],
      leftOver: listBarang[i][2],
      totalProfit: 0
    }
    //looping untuk memasukkan data shoppers berdasarkan masing-masing key
    for (var j = 0; j < shoppers.length; j++) {
      if (shoppers[j].product === obj[listBarang[i][0]].product && obj[listBarang[i][0]].leftOver >= shoppers[j].amount) {
          obj[listBarang[i][0]].shoppers.push(shoppers[j].name);
          obj[listBarang[i][0]].leftOver -= shoppers[j].amount;
          obj[listBarang[i][0]].totalProfit += listBarang[i][1] * shoppers[j].amount;
      }
    }
  }
  return Object.values(obj);
}


// TEST CASES
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3},
{name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
// [ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10},
{name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1},
{name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]

console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]

console.log(countProfit([])); //[]
