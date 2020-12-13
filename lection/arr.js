"use strict"

const arr = [1, 2, 3, 5, 8, 9]
// arr[99] = 0;
// console.log(arr.length)
// console.log(arr)


// del last el in arr
//arr.pop();

//add el to end of arr
// arr.push(10)

// console.log(arr)



// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

// the same as upper for
// for (let value of arr) {
//     console.log(value)
// }


// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} inside array ${arr}`)
// })


const str = prompt('', '', '')
const products = str.split(', ')
products.sort()
console.log(products.join('; '))