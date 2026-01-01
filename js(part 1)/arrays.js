//Arrays
let fruits = ["Apple", "Banana", "Mango", "Orange"];

//Accessing elements
console.log(fruits[0]); // Apple
console.log(fruits[2]); // Mango
//Modifying elements
fruits[1]="Watermelon";
console.log(fruits);
//Array methods
let arr=[1,2,3,4,5];
arr.push(50); //Add element at the end
console.log(arr);

arr.pop(); //pop means removing element from the end
console.log(arr);

arr.shift();
console.log(arr); //shift means removing element from the start

arr.unshift(0);
console.log(arr); //unshift means adding element at the starv t

arr.splice(2,1); //removing element from index 2
console.log(arr); 

arr.slice(1,3); //slicing from index 1 to 3 but not including 3
console.log(arr);//original array remains unchanged 

arr.reverse();
console.log(arr); //reversing the array changes in original array

let arr1=[5,8,4,1,2];
arr1.sort(); //sorting the array
console.log(arr1);
let order=function(a,b){ //syntax for sorting array
    return b-a; //b-a for descending order a-b for ascending order
}
console.log(arr1.sort(order));

//forEach: for each element in the array
let arr2=[10,20,30,40,50];
arr2.forEach(function(val){
    console.log(val+5);//in each value of array adding 5
});

//map:use map when u want to create a new array by doing some operation on each element of original array
let arr3=[1,2,3,4,5];
let newArr=arr3.map(function(val){
    return val*2; //multiplying each element by 2
});
console.log(newArr);

//filter: use filter when u want to create a new array by filtering some elements based on some condition
let arr4=[10,15,20,25,30,35];   
let filteredArr=arr4.filter(function(val){
    if(val>20) return true; //filtering elements greater than 20
});
console.log(filteredArr);

//reduce: use reduce when u want to reduce the array to a single value by doing some operation on each element
let arr5=[1,2,3,4,5];
let sum=arr5.reduce(function(accumulator, val){
    return accumulator+val; //summing all elements
},0); //0 is the initial value of accumulator
console.log(sum);

//find: use find when u want to find the first element that satisfies a condition
let arr6=[5,10,15,20,25];
let foundElement=arr6.find(function(val){
    return val>15; //finding first element greater than 15
});
console.log(foundElement);

//some: use some when u want to check if at least one element satisfies a condition it will return true or false
let arr7=[1,2,3,4,5];
let any=arr7.some(function(val){
    return val>3; //checking if there is any element greater than 3
}); 
console.log(any);

//every: use every when u want to check if all elements satisfy a condition it will return true or false
let arr8=[2,4,6,8,10];
let all=arr8.every(function(val){
    return val>=2; //checking if all elements are greater than or equal to 2
});console.log(all);  

//destructuring arrays:
let colors=["Red","Green","Blue"];
let [color1, ,color2]=colors;
console.log(color1); //Red
console.log(color2); //Blue

//spread operator:
let arr9=[1,2,3];
let arr10=[...arr9];
console.log(arr10); // [1,2,3]
let arr11=[...arr9,4,5,6];
console.log(arr11); //[1,2,3,4,5,6]

//Questions on arrays:
//1.Create an array with 3 fruits and print second fruit.
let fruits1=["Apple","Mango","Orange"];
console.log(fruits1[1]);
//2.Add "MAngo" at the end and "Pineapple" at the start of the array.
fruits1.push("Mango");
fruits1.unshift("Pineapple");
console.log(fruits1)
//3.Replace "Orange" with "Grapes".
fruits1.splice(3,1,"grapes");
//4.Insert "red" and "blue" at index 1 in this array.
let colors1=["green","yellow"];
colors1.splice(1,0,"red","blue");
console.log(colors1);
//Extract 3 middle elements from this array.
let items=[1,2,3,4,5,6,7];
items.splice(2,3);
console.log(items);
//Use .map() to square each number
let numbers=[1,2,3,4];
let nums=numbers.map(function(val){
    return val*val;
}); console.log(nums);
//Use .filter() to filter numbers greater than 10
let numArray=[5,10,15,20,25];
let filteredNum=numArray.filter((val)=>{
    return val>10;
});console.log(filteredNum)
//Use .reduce() to get the sum of all numbers
let sumOfArrays=numArray.reduce((acc,val) => {
    return acc+val;
},0);console.log(sumOfArrays);
//Use .find() to find the first number greater than 7
let firstNum=numArray.find((val)=>{
    return val>7;
});console.log(firstNum);
//clone this array using spread operator
let clonedArray=[...numArray];
console.log(clonedArray);