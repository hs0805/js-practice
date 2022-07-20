function outest() {
    var c = 100;
    function outer(b) {
        function inner(){
            console.log(a, b, c);
        }
        let a = 10;
        return inner;
    }
    return outer;
}

let a = 100;
outest()('hello world')();

/**

function Counter() {
    var count = 0;
    return function incrementCounter() {
        count++;
        console.log(count);
    }
}

Counter()(); // Everytime new copy is created
Counter()();

var counter = Counter();   // Get reference and then call counter
counter();
counter();
counter();

*/


function Counter () {
    let count = 0;

    this.incrementCounter = function() {
        count++;
        console.log(count);
    }

    this.decrementCounter = function() {
        count--;
        console.log(count);
    }
}

var counter = new Counter();
counter.incrementCounter();
counter.incrementCounter();


function fun1() {
    var x = 10;
    var z = 20;             // The z is smartly garbage collected by gc but not x because x is being used. as function fun2() makes closure with z also
    return function fun2() {     
        console.log(x);
    }
}
 
var y = fun1();     // If we try to print the z in console we won't be able to because it is smartly collected by gc

y();
