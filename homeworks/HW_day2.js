// Write a JavaScript function to clone an array.

function clone_arr (array){
    let clone = [...array]
    return clone
}

// Write a JavaScript program to compute the sum and product of an array of integers.

function arr_sum_prod (array){
    let sum = 0
    let product = 1
    for (let i of array){
        sum+=i
        product *= i
    }
    return `the sum: ${sum} \nthe product: ${product}`
}

// Write a JavaScript function which receives ‘n’ and ‘arr’
// parameters and will return the first 'n' elements of the array.


function slice_arr(array, n){
    return array.slice(0,n)
}


// Write a JavaScript function to split a string and convert it into an array of words.
// (exp. “Hello World” should become [“Hello”,”World”].


function str_into_arr(str){
    return str.split(' ')
}

// Write a JavaScript function to check whether an `input` is an array or not.

function check_type(arr){
    return  Array.isArray(arr)
}


// Write a JavaScript function to get the function name.

function name_func (function_name){
    return f.name
}

// Write a JavaScript function to test whether a date is a weekend.






// Write the function camelize (str), which converts lines of the form "my-short-string" to "myShortString".

function camelize_str(str){
    for (let i = 0; i<str.length; i++){
        if (str[i] === '-'){
            str = str.split(str[i+1]).join(str[i+1].toUpperCase())

            str = str.split(str[i]).join('')
        }
    }
    return str
}

// Write a function getSums (arr), which returns a new array of the same number of elements,
// in which at each position there must be a sum of elements arr to this position inclusive.


function getSums (arr){
    let sum_arr = []
    sum_arr.push(arr[0])
    for (let i = 1; i<arr.length; i++){

        sum_arr.push(arr[i]+ sum_arr[i-1])
    }
    return sum_arr
}


// Implement REDUCE function which should work like JS reduce.It should take as the same parameters as JS reduce does.


function reduce_arr (arr){

    sum = arr[0];
    for (let i = 1; i<arr.length; i++) {
        sum+= arr[i]
    }
    return sum
}

// Write a JavaScript function to merge two arrays and removes all duplicates elements.

function merge_arrs(arr1,arr2){


    let merged = [...new Set( [...arr1,...arr2])]

    return merged.sort(function (a,b){return a-b})
}


// Write a JS function that receives object and returns it’s deep copy.
//
//     function deepClone(obj) {
// …
// 		return deepClonedObj;
// }


function deepClone(obj){
    let  deepCopyObj = JSON.parse(JSON.stringify(obj));
    return deepCopyObj

}

//  Write a JS function (equals) that take 2 arguments(objects),
//  and checks if those objects are equal(equal - all properties and their values are equal)
// hint! - recursion, properties can be objects.


function equals(obj1, obj2){

    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (let key of keys1) {
        if (!obj2.hasOwnProperty(key) || obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true

}
