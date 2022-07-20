// A functin bundled together with its lexical enviiornment is known as closure.
function fun1() {
    let x = 10;
    function fun2() {
        console.log(x);
    }
    return fun2;
}
var fun = fun1();
fun(); // as fun1() has been executed but it still remembers the value of x because it was in its outer lexical enviornment
fun1()();
// console.log(x);

function a() {
    let x = 10;
    let z = 100;
    function b() {
        let y = 20;
        let z = 200;
        return function c() {
            console.log(x, y, z);
        }
    }
    return b();
}

var fun = a();
console.log(fun());

/** Uses of closures:
 * 1. module design pattern
 * 2. currying
 * 3. functions like once
 * 4. memoize
 * 5. maintaing state in async world
 * 6. setTimeouts
 * 7. Iterators
 * 8. many more
 */
