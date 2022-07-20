let x = 10;      // This let variable is not attached to the window object. This is hoisted in some other memory space
const y = 200;
// The phase between the hoisting and initilization of let or const variable is known as temporal dead zone  //

/* syntax error
let y = 10;
var y = 20;
*/

/* Type error
const x = 20;
const x = 30;
*/

/* Reference error
console.log(x);
let x = 10;
*/


// Moving all the initialization on the top of window shrinks the temporal dead zone window to 0