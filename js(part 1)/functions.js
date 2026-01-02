 //what is func?? =>    // A function is a block of code designed to perform a particular task.
//why func?? =>     // To avoid repetition of code and make code modular andreusable.    
//WE cant start function name by numbers,special character,keywords.                   

//some types 1.declaration function 2.expression function 3.arrow function

//function statements.
function hny(){
   console.log("Happy New Year");
} //hny(); //function call

//function expression
let fnc1 =function(){
console.log("hiiiiiiii");
}  
fnc();

//arrow function
let fnc= ()=>{
    console.log("arrow function");
};  fnc();

//parameters and arguments
function add(a,b){ //a and b are parameters
    console.log(a+b);
}
add(5,10); //5 and 10 are arguments

//default parameters
function add(a=0,b=0){ //a,b here 0,0 is default parameter)
    console.log(a+b);    
};  add(); //if no arguments passed then default parameters will be considered

//rest and spread parameters: Jab hum nhi jante ki kitne arguments pass honge tab hum rest parameters use karte hain.
//spread operator is used to spread elements of array or object.
//spread operator-...

function abcd(a,b,c,...val){
    console.log(a,b,c,val);
}
abcd(1,2,3,4,5,6); //output will be in array form 1,2,3[4,5,6]

//return keyword:jaha se aaye ho whi daal denge
function add(a,b){
    return a+b;} //function will return the value and exit the function
let sum=add(2,3); //sum will store the returned value
console.log(sum);

//first class functions:In javascript functions are treated as first class citizens means functions can be stored in variables,passed as arguments to other functions and can be returned from other functions.

//higher order functions: A function that takes another function as an argument or returns a function as a return value is called higher order function.
function greet(){
    return function(){
        console.log("hello world");  
    }
}
let val=greet(); //val will store the returned function
val(); //calling the returned function

//pure functions:A pure function is a function that given the same input will always return the same output and does not have any side effects (does not modify any external state).
function pureAdd(a,b){
    return a+b; //this is  a pure function
}
//impure function
let c=10;
function impureAdd(a,b){
    return a+b+c; //this is an impure function as it uses external variable c
}

//closure:A function which returns another function and returned function always uses variable of parent function is called closure.
function abc(){
let a=12;
return function(){
    console.log(a); //returned function uses variable of parent function
}

//lexical scope: A function defined inside another function and scope of inner function can access variable of outer function is called lexical scope.

function abcd(){
    let a=10;
    function efgh(){
        console.log(a); //efgh can access variable of abcd due to lexical scope
    }
    efgh();
}
abcd();

//IIFE(Immediately Invoked Function Expression): A function which is invoked immediately after its definition is called IIFE.
// (function(){
//     console.log("IIFE executed");
// })(); 

//difference between function declaration and function expression in terms of hoisting.
//function declaration is hoisted means it can be called before its definition.
// functionDeclaration();
// function functionDeclaration(){
//     console.log("Function Declaration called");
// } 
//function expression is not hoisted means it cannot be called before its definition.
// functionExpression(); //error
// let functionExpression=function(){
//     console.log("Function Expression called");
// }; 
 
//practice questions:
function getScore(...score){
    let total=0;
    score.forEach(function(val){
        total=total + val;
    });
    return total
}
// console.log(getScore(10,20,30,40));