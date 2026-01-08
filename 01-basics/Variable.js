//var let const
//var is functional scope.Can be redeclared
//let is block scoped.Cant access until initialized.
//declarations and initializations
//let a; is delcared. a=12;initialized
//scope
//global:in full code anywhere accesible.
//block:In curly braces.
//function : in func accesible.
// function abc(){
//     if(true){
//         let a=15;
//     }
// }

//reassignment:Assigning or changing value.let a=10;a=33;
// redclaration:possible in var only. a=10; a=25;

//Temporal Dead Zone (TDZ): time between entering scope and actual declaration of let/const

//hoisting:when variable in js is created it is divided in 2 parts one which is declared goes on top and initialized is down.This is reason var doesnt give error in tdz.

//console.log(p); // undefined
// var p = 5;
// console.log(q); // ReferenceError
// let q = 10;
// var → hoisted + initialized as undefined
// let → hoisted but in TDZ

// var x=1;//global
// {
// var x=2;
// }
// console.log(x);
let a =10;// global scope
{
    let a=20;//block scope
    console.log("inside:",a)
}
console.log("Outside:",a);
if(true){
    var x=10;
    let b=20;
console.log(b);
}
console.log(x);
