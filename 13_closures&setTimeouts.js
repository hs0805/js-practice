function fun1() {
    for(var i=0; i<=5; ++i){
        setTimeout(function() {
            console.log(i);
        }, 1000);
    }
}
// fun1();

function printAfterOneSecond() {
    // for(var i=0; i<=5; ++i){         // It will not work correctly because i is declared as var which is attached to global window
    //     setTimeout(function() {
    //         console.log(i);
    //     }, i*1000);
    // }

    for(let i=0; i<=5; ++i) {      // Everytime new copy of i is created and setTimeOut remembers the value of every i because let is block scoped
        setTimeout(function() {
            console.log(i);
        }, i*1000);
    }

    for(var i=0; i<=5; ++i) {
        function close(i) {
            setTimeout(function() {
                console.log(i);
            }, i*1000);
        }
        close(i);                   // Everytime passing new copy of i
    }
}

printAfterOneSecond();