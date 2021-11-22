const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}

//The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
// const array1 = [1, 2, 3];

// console.log(array1.unshift(4, 5));
// // expected output: 5

// console.log(array1);
// // expected output: Array [4, 5, 1, 2, 3]

function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}

//helper function
function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(extraLargeArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(extraLargeArray);
let resultsInsert = perf.stop();


console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);


//3- Next, edit the code in runtime.js to obtain timing results for calling the two functions with all of the differently sized arrays– tinyArray, smallArray, mediumArray, largeArray, and extraLargeArray. Notate these in your document in some kind table table so that you can easily compare the different values for the timers in relation to the size of the array that was passed into each function.

// extraLargeArray--->   insert 828.9326 ms,   append 3.2855 ms
// largeArray     --->   insert 8.0395 ms,   append 520 μs
// mediumArray    --->   insert 155.8 μs,   append 130.3 μs
// smallArray     --->   insert 59.2 μs,   append 115.5 μs
// tinyArray      --->   insert 37 μs,   append 86.8 μs



