var x = 1;
a();
b();
c();
console.log(x);

function a() {
    var x = 10;
    console.log(x);
}

function b() {
    var x = 20;
    console.log(x);
}

var c = function() {
    var x = 30;
    console.log(x);
}



// Try to visualize with the help of memory block and execution context
/**
 *  OUTPUT:
 *  10
 *  20
 *  Error: Not a function
 *  1
 */