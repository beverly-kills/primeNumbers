'use strict'

var a = parseInt(prompt('введите 1е число'));
var b = parseInt(prompt('введите 2е число'));
var h1 = document.querySelector('h1');

getPrime: for (var eachNumber = a; eachNumber <= b; eachNumber++){
    for (var i = 2; i < eachNumber; i++) {
        if (eachNumber % i == 0) continue getPrime;
      }

    //h1.textContent = eachNumber;
    // alert(eachNumber);
    console.log(eachNumber);
}