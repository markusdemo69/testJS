"use strict"

function first() {
    setTimeout(function() {
        console.log(1)
    }, 500) 
    // timeout 500ms
}

function second(){
    console.log(2)
}

first()
second()

//call back function
function learnJS(lang, callback) {
    console.log(`I learn: ${lang}`)
    callback()
}

function done() {
    console.log('I end this lection')
}

learnJS('javascript', done)