/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function range(size) {
    return [...Array(size).keys()].map(i => i + 1);
}

function sumNumbers(max) {
    let sum = 0;    
    range(max).forEach((elem) => { sum += elem; });
    return sum;
}

function calculateTime(n) {    
    const t0 = performance.now();
    sumNumbers(100);
    const t1 = performance.now();
    console.log(`sum from 1-${n} took ${t1 - t0} milliseconds.`);
}

calculateTime(100);
calculateTime(100000);
calculateTime(1000000000);