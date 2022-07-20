var a;
a = undefined;  // Not a good practice. Never do this.

var x;          // This takes memory. undefined is a placeholder
console.log(x);  
x = 7;
console.log(x);

var a;

if(a === undefined){
    console.log("a is undefined");
} else {
    console.log("a is not undefined");
}
