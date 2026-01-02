//Objects : Collection of properties and methods
let obj = {
    name: "Omjain",
    age:22,
    favcricketer: "Virat Kohli",
};
obj.name //accessing property using dot notation it searches for the property name in the object obj
obj["age"] //accessing property using bracket notation
//Adding new property to object
obj.college = "IIT Bombay"; //dot notation
obj["branch"] = "CSE"; //bracket notation

//key value structure:key is always string,value can be of any data type.left side is key and right side is value.

//nesting of objects 
let user= {
    name : "Omjain",
    age : 22,
    address : {
        street: "123 Main St",
        city: "Mumbai",
        location: {
            lat: "19.0760 N",
            long: "72.8777 E"
        },
    },
};
console.log(user.address.location.lat); //accessing nested object property and deep accessing is this way

//Object destructuring:
let {lat,long}=user.address.location; //destructuring the nested object properties into variables
console.log(lat); //19.0760 N

//looping through objects
let obj1= {
    name: "Omjain",
    age:22,
    email: "test@test.com",
};
for(let key in obj1){ //for..in loop to iterate over object properties
    console.log(key + ": " + obj1[key]); //accessing property value using bracket notation
}

//object.keys() method
console.log(Object.keys(obj1)); //returns an array of keys in the object obj1

//object.values() method
console.log(Object.values(obj1)); //returns an array of values in the object obj1

//object.entries() method
console.log(Object.entries(obj1)); //returns an array of key-value pairs in the object obj1
//output: [ [ 'name', 'Omjain' ], [ 'age', 22 ], [ 'email', 'test@test.com' ] ]

//spread operator : ... used to clone or merge objects
let obj2={...obj1};
console.log(obj2)

//object assign() method : used to copy object but not used now a days because of spread operator
let obj3 = Object.assign({},obj1); //cloning obj1 into obj3
console.log(obj3);

//deep cloning of objects
// if we have nested objects and we want to clone them completely without reference issues we use JSON methods  
let obj4 = JSON.parse(JSON.stringify(user)); //deep cloning using JSON methods JSON.stringify converts object to string and JSON.parse converts string back to object
console.log(obj4);
obj4.address.city ="Indore"; //modifying cloned object
console.log(user.address.city); //original object remains unchanged

//optional chaining operator : ?. used to safely access nested object properties
console.log(user.address?.location?.lat); //if address or location is undefined it will not throw error and return undefined instead

const match = {info: {score:80}};
const clone ={...match};
clone.info.score = 90;
console.log(match.info.score); //80 because of shallow copy using spread operator
//If we want to deep clone we can use JSON methods
const deepClone = JSON.parse(JSON.stringify(match));
deepClone.info.score =95;
console.log(match.info.score); //90 bcoz we changed deepClone not match object 
