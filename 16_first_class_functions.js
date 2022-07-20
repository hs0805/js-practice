// Function statement aka Function Declaration
function a() {
    console.log('a called');       
}

// Functiion Expression
var b = function xyz() {
    console.log('a called');
}

// Anonymous function
var c = function () {    
    console.log('This  is anonymous function');
};

// Named function expression
var d = function abc() {
    console.log('abc called');
}

// First class function aka first class citizens  
var e = function fun1(param1) {                        /* The ability of functions to be return, to be used as param to be used as values is known as first class fcuntions */
    return function fun2() {
        console.log('fun2 inside fun1 called', param1());
    }
};





