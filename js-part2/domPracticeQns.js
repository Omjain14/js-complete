// //Task1 : Select the heading of a page by ID and change its text to "Welcome to the DOM Practice Page"
// let heading = document.querySelector("#header");
// heading.textContent ="Welcome to the DOM Practice Page";


//Task 2: Select all <li> elrmrnts and print their text using a loop
// let listItems = document.querySelectorAll("li");
// listItems.forEach(function(item) {
//     console.log(item.textContent);
// });

//Task 3: Add a click event to a button that changes the text of a <h2> element and modifies the button's style
// let h2 = document.getElementById("dom");
// let btn= document.querySelector("#btn");

// btn.addEventListener("click",function(){
//     h2.textContent="Dom Is Easy";
//     btn.style.color="red";
//     btn.style.backgroundColor="black";
// });

//Select the paragraph and replace its text with <b>dom is easy on button click</b>
let para = document.querySelector("p");
para.innerHTML = "<b>dom is easy on button click</b>";

//Get the src of an image using javascript
let img = document.querySelector("img");
console.log(img.getAttribute("src"));
//Set a new src for the image using javascript
img.setAttribute("src","https://images.unsplash.com/photo-1767876231901-d3592d131812?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8aG1lbnZRaFVteE18fGVufDB8fHx8fA%3D%3D");

//add a title attribute to div dynamically
let div = document.querySelector("div");
div.setAttribute ("title","heyyyy")

//Remove the disabled attribute from button
let btn = document.querySelector("button");
btn.removeAttribute("disabled");

//Create a new list item <li>New task</li> and add it to the end of a </ul>.
let ul = document.querySelector("ul");
let li = document.createElement("li");
li.textContent = "New task";
ul.appendChild(li);

//Create a new image elemnt with placeholder source and add it at top of div.
let newimg = document.createElement("img");
newimg.src = "https://images.unsplash.com/photo-1767565221432-552acb20b8d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE3fHFQWXNEenZKT1ljfHxlbnwwfHx8fHw%3D"
div.prepend(newimg);

//Select the first item from list and delete it from DOM
let all = document.querySelector("#all");
let firstitem=all.querySelector("li");
all.removeChild(firstitem);

//add a highlight class to every even item in a list.
let list = document.querySelectorAll("#all li:nth-child(2n)");
console.log(list)
list.forEach(function(elem){
    elem.classList.add("highlight");
});

