"use strict"

const options = {
    name: 'test',
    width: 1024,
    heigth: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log('test')
    }
}

options.makeTest()
// считает все обтекты в масиве
console.log(Object.keys(options).length)

const {border, bg} = options.colors
console.log(border)


// console.log(options.name)

// delete options.name

// console.log(options)



// let counter = 0
// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//         console.log(`Option: ${i}, has name: ${options[key][i]}`)
//         counter++;
//         }
//     } else{
//         console.log(`Option: ${key}, has name: ${options[key]}`)
//         counter++;
//     }
// }
// console.log(counter)