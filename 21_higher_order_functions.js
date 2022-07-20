/**
 const radius = [3, 2, 1, 4];

const calculateArea = function (radius) {
    const output = [];
    for(let i=0; i<radius.length; ++i){
        output.push(Math.PI * radius[i] * radius[i]);
    }
    return output;
}

const calculateCircumference = function () {
    const output = [];
    for(let i=0; i<radius.length; ++i){
        output.push(2 * Math.PI * radius[i]);
    }
    return output;
}

const calculateDiameter = function () {
    const output = [];
    for(let i=0; i<radius.length; ++i){
        output.push(2 * radius[i]);
    }
    return output;
}

console.log(calculateArea(radius));
console.log(calculateCircumference(radius));
console.log(calculateDiameter(radius));

*/

//BETTER VERSION

const radius = [3, 2, 1, 4];

const area = function (radius){
    return Math.PI * radius * radius;
}

const circumference = function (radius){
    return 2 * Math.PI * radius;
}

const diameter = function (radius){
    return 2 * radius;
}

const calculate = function (radius, logic) {
    const output = [];
    for(let i=0; i<radius.length; ++i) {
        output.push(logic(radius[i]));
    }
    return output;
}

// console.log(radius.map(area));
// To make calculate similar to map function we need to do
Array.prototype.doCalculate = function (logic) {
    const output = [];
    for(let i=0; i<this.length; ++i) {
        output.push(logic(this[i]));
    }
    return output;
}

console.log(radius.doCalculate(area));
console.log(calculate(radius, area));
console.log(calculate(radius, circumference));
console.log(calculate(radius, diameter));