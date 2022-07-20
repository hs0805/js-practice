console.log('start');

setTimeout(function() {
    console.log("callback function executed");
}, 1000);

console.log('end');

let startTime = new Date().getTime();
let endTime = startTime;

while(endTime < startTime + 10000) {
    endTime = new Date().getTime();
}

console.log("while loop expired");


// callback functions wait for call stack to
// get empty. After that callback function is
// pushed into the call stack by event loop