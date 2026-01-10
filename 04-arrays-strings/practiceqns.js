//Js Practice Questions

//1. Write a JavaScript function that takes a number as a parameter and checks if it is prime or not.
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log(isPrime(11)); // true
console.log(isPrime(4));  // false
//2. Write a JavaScript function that takes an array of numbers and returns the largest number in the array.
function findLargest(arr) {
    return Math.max(...arr);
}   
console.log(findLargest([3, 5, 7, 2, 8])); // 8

//3. Write a JavaScript function that takes a string as a parameter and returns the string reversed.
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("hello")); // "olleh"

//4. Write a JavaScript function that takes an array of strings and returns a new array with the strings sorted in alphabetical order.
function sortStrings(arr) {
    return arr.sort();
}
console.log(sortStrings(["banana", "apple", "cherry"])); // ["apple", "banana", "cherry"]
//5. Write a JavaScript function that takes a number as a parameter and returns the factorial of that number.
function factorial(num) {
    if (num === 0 || num === 1) return 1;
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(5)); // 120
console.log(factorial(0)); // 1
