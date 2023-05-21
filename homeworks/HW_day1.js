'use strict'



// Write a JavaScript function to get the highest number from three different numbers.(without Math.max())
function max_num(a,b,c) {
    if (a<b && b>c ) {
        return b
    }
    else if (c>a){
        return c
    }
    return a
}

function max_num2(a,b,c) {
    return (a > b && a > c) ? a : (b > c) ? b : c;
}


// Write a JavaScript function to calculate surface of circle. Radius is parameter of function.


function circle_surface (r){
    return 3.14 * (r**2)
}



// Write a function getDecimal (num), which returns the decimal part of the number.

function getDecimal (num)  {
    return num % 1
}

// Write the function fib (n), which returns the n-th Fibonacci number.


function fib(n){

    let n1 = 0;
    let n2 = 1;

    if (n === 0){
        return n1;
    }
    else if(n===1){
        return n2;
    }
    let n3;
    for (let i = 0; i <= n; i++){
         n3 = n1 + n2;
         n1 = n2;
         n2 = n3;
    }
    return n3

}


// Write the function randomInteger (min, max) to generate a random
// integer between min and max, including min, max as possible values.Any number from the interval min..max should have the same probability.


function random_integer(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}


// Create a Pythagorean function in JavaScript.

function pythagorean(sideA, sideB){
    return (sideA**2) * (sideB**2)
}

