"use strict"
let x = 5
alert( x++ )
// сначала вернёт 5ку. потом увеличит на 1, ++х -сразу увеличит на 1


[ ] + false - null + true
console.log([ ] + false - null + true)
//Nan

let y = 1; let x = y = 2; alert(x); 
//2

[ ] + 1 + 2
console.log([ ] + 1 + 2)
// 12 string

alert( "1"[0] )
//  получаем 0 индекс троки == 1


2 && 1 && null && 0 && undefined
console.log(2 && 1 && null && 0 && undefined)
// null      // && -  и 
// && запинаеться на лжы

console.log(!!( 1 && 2 ) === (1 && 2))
// false

alert( null || 2 && 3 || 4 )
// сначала выполниться && 3 так как и приоритетней чем или
// вернёться 3

 const a = [1, 2, 3]; const b = [1, 2, 3]; 
console.log(a === b)
//false

alert( +"Infinity" )
// num infinity

console.log("Ёжик" > "яблоко")
//false с сравнение по номерам символов


console.log(0 || "" || 2 || undefined || true || falsе)
//2