
console.log(x);      // Undefined because it is already in the memory block with the undefined value
console.log(getName);   // Entire code of getName function will be printed

// console.log(fun1());   // Because func1 is behaving as variable in both the cases
// console.log(fun2());   

// console.log(y);   Because y is not present in the memory block

var x = 7;

function getName() {
    console.log("Hi Happy");
}

var fun1 = () => {
    console.log("This is an arrow function");
}

var fun2 = function() {
    console.log("function assigned to a variable");
}

getName();
console.log(x);

