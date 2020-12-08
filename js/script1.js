"use strict"

if (4 == 5) {
    console.log('ok')
} else{
    console.log('error')
}

const num = 50;

// if (num < 49) {
//     console.log('error')
// } else if (num > 100) {
//     console.log('mnogo')
// } else {
//     console.log('ok')
// }

// //тернальный оператор if true / if false
// (num === 50) ? console.log('ok') : console.log('error');

const num = 50;

switch (num) {
    case 49: 
        console.log('false')
        break;
    case 100:
        console.log('false')
        break;
    case 50:
        console.log('true')
        break;
    default:
        console.log('not this time')
        break;
}