/*
let arr = [2, 3, 4, 1];

// map
const doubleArr = function(val){
    return 2 * val;
}
let newArr = arr.map(doubleArr);
console.log(newArr);

// filter 
function isOdd(x) {
    return x % 2;
}

const output = arr.filter(isOdd);
const output1 = arr.filter((x) => x%2);
console.log(output, output1);

// reduce 

//
const sumOfAllElements = arr.reduce(function(acc, curr) {
    acc = acc + curr;
    return acc;
}, 0);   // 0 is initial value of acc

const maxElement = arr.reduce((acc, curr) => {
   if(curr > acc) acc = curr;  
   return acc;
}, 0);

*/

const users = [
    { firstName: "Happy", lastName: "Singh", age: 24 },
    { firstName: "donald", lastName: "Trump", age: 76 },
    { firstName: "Elon", lastName: "Musk", age: 50 },
    { firstName: "Ghost", lastName: "Rider", age: 24 },
]

// list of full names
const output = users.map(x => x.firstName + " " + x.lastName);

// get frequency of ages

const output1 = users.reduce((acc, curr) => {
    if( acc[curr.age] ) {
        acc[curr.age] = ++acc[curr.age];
    } else {
        acc[curr.age] = 1;
    }
    return acc;

}, {});

console.log(output1);


// users with age less than 30

const output2 = users.filter((x) => x.age < 30);
console.log(output2)

const names = users.filter((x) => x.age < 30)
.map((x) => x.firstName);
console.log(names);


const names1 = users.reduce( (acc, curr) => {
    if(curr.age < 30) acc.push(curr.firstName);
    return acc;
}, [])
console.log(names1);