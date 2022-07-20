// whati is callback function in JavaScript

// setTimeout(function () {
//     console.log("Executed after some time");
// }, 5000)

// function x(y) {
//     console.log("x");
//     y();
// }

// x(function y() {
//     console.log('y');
// }); 

// Javascript is synchronous single threaded language 
// Javascript doesn't wait for anyone. Time tide and js wait for none
// Blocking the main thread. call stack is main thread

function attachEventListener() {
    document.getElementById('clickMe').addEventListener("click", function xyz() {
        console.log('button clicked');
    });   
}

attachEventListener();
