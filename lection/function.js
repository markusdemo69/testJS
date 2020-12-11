"use stict"

let num = 20

function showFirstMessage(a, b) {
    sum = a + b
    console.log(sum)
    let num = 30
}

showFirstMessage(10,10)
console.log(num)

function ret() {
    num =50
    return num
}

function calc(a,b) {
    return a + b
}

console.log(calc(ret(),15))

const logger = function() {
    console.log("hello")
}

logger()