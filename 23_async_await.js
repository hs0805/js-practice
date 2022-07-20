// const promiseObj = new Promise( (resolve, reject) => {
//     let req = false;
//     if(req == true) {
//         resolve("Request success");
//     } else {
//         reject('Request rejected');
//     }
// });

// promiseObj.then((value) => {
//     console.log(`value is : ${value}`)
// }).catch( (error) => {
// console.log(err);
// });


// const promiseObj1 = new Promise((resolve, reject) => {
//     let req = false;
//     if(req == true) {
//         resolve("Request success");
//     } else {
//         reject('Request rejected');
//     }
// }).then((value, err) => {
//     (value) => { console.log(value); },
//     (err) => { console.log(err); }
// });


// Promise chaining
// const promiseObj2 = new Promise( (resolve, reject) => {
//     let val = 10;
//     resolve(val);
// }).then( (value) => {
//     console.log('value is :', value);
//     return value + 10;
// }).then ( (value) => {
//     console.log(`value is : ${value}`);
// }).then( () => {
//     throw new  Error("Error Found");
// }).catch( (err) => {
//     console.log("Error is :", err);
// }).finally( () => {
//     console.log('Cleaned');
// });

function getName(name) {
    return new Promise( (resolve, reject) => {
        setTimeout( ()=> {
            console.log("Inside getName setTimeout");
            resolve(name);
        }, 3000);
    })
}

function getHobbies(name) {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            console.log("Inside getHobbies setTimeout");
            resolve(['cricket', 'Reading', 'Coding']);
        }, 2000);
    });
}

// Consuming code
// getName('Happy Singh')
// .then((nm )=> {
//     console.log(nm);
//     getHobbies(nm);
// })
// .then(hobby => console.log(hobby) );

// by using async await
const printValues = async function showHobby() {
    const nm =  await getName('Happy Singh');
    const hobby = await getHobbies(nm);
    console.log(`${nm} -> ${hobby}`);
}
printValues();
