//Event bubbling:Event first applies on child then parent then grandparent it goes upward
// document.querySelector("#nav").addEventListener("click",()=>{
//     // e.stopPropagation();
//     alert(" navv clicked");
// })

// let ul = document.querySelector("ul");

// ul.addEventListener("click",(e)=>{
//     e.target.classList.toggle("lt");
// })
//basically even bubbling is when event listener is on child still it checks for parent then its parent till body and if any  of it has event listener it will perform both listeners,this is event bubbling.
 
//Event Capturing:Not often used,but good to know.
//  It is Basically opp of bubbling it is from parent to child known as capture phase.By default bubbling phase is on, for capture phase we need to make it on.If it is on it is priority.Ill explain with example.

let a = document.querySelector(".a"); 
let b = document.querySelector(".b"); 
let c = document.querySelector(".c"); 
let button = document.querySelector("button"); 

button.addEventListener("click",(e)=>{
    console.log("button clicked");
})

c.addEventListener("click",(e)=>{
    console.log("c clicked");
},true)

b.addEventListener("click",(e)=>{
    console.log("b clicked");
})

a.addEventListener("click",(e)=>{
    console.log("a clicked");
},true)

//Now above writing true after curly brace is turning on the capture phase.whatever is in capture phase will be shown or event first like when we do above like if we click button on console we will see a clicked,c clicked,button clicked,b clicked.First capture phase then again bubbling phase.
