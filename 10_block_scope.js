// This is a block. Block is created by curly braces. block is also known as compound statement.
{
    var a = 10;     // Hoisted in global scope
    let b = 20;     // Hoisted in block space
    const c = 30;   // Hoisted in block space
}

// console.log(a);   // Accessible becuase it exist in global scope
// console.log(b);
// console.log(c);

/**
 *  Generally let and const are created in script space
 *  but when you declare them in block then a separate block space is created and variabled are stored there
 */


/** Shadowing */

var  x = 10;
{
    var x = 20;
    console.log(x);
}
console.log(x);

var y = 10;
{
    let y = 20;
    console.log(y); 
}
console.log(y);

let z = 30;
const w = 40;
{
    // var z = 40;// Illegal shadowing  because it is in global scope
}