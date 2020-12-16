"use strict"

// 1)
// to string
console.log(String(null))

//  при сложении со строкой всё равно получаеться строка
console.log(typeof(5 + ''))


// https://vk.com/catalog/5
const num = 5
console.log('https://vk.com/catalog/' + num)

const fontSize = 26 + 'px'


//to number
console.log(typeof(+'5'))

console.log(typeof(parseInt('15px', 10)))


// number
let answer = +prompt('Hello', "")


// to boolean
0, '', null, undefined, NaN; // false

let switcher = null
switcher = 1
if (switcher) {
    console.log('Working')
}




// 2)
console.log(typeof(Boolean('4')))

console.log(typeof(!!"33333"))