//dom: Document Object Model

// The DOM represents the page so that programs can change the document structure, style, and content.
// The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.
// A web page is a document. This document can be either displayed in the browser window or as the HTML source code of the page.

//to get element by id:
// let title = document.getElementById("title");
// console.dir (title);

//to get element by class name:
let title = document.getElementsByClassName("title");
console.log (title); //output is like an array

//document.querySelector(): it returns the first element that matches a specified CSS selector(s) in the document.
let title1 = document.querySelector("h1");
console.log(title1);//nowadays this is mostly used

//document.querySelectorAll(): it returns all elements that matches a specified CSS selector(s) in the document.
let title2 = document.querySelectorAll("h1");
console.log(title2);//output is like an array not an actual array

//Text/Content Manipulation
//innerText
let h1 = document.querySelector("h1");
h1.innerText = "Learning DOM Manipulation"; //changes the text inside h1,you can also do console.dir(h1) to check what you need to change and change accordingly.

//textContent
let h2 = document.querySelector("h1");
h2.textContent = "Learning DOM Manipulation - textContent"; //changes the text inside h1,you can also do console.dir(h1) to check what you need to change and change accordingly.

//innerHTML
let h3 = document.querySelector("h1");
h3.innerHTML = "<i>Learning DOM Manipulation - innerHTML</i>";
//changes the text inside h1 and also makes it italic,you can also do console.dir(h1) to check what you need to change and change accordingly.It manipulates the html inside the element.

//Attribute Manipulation:firstly attribute means like href,src,id,class etc.
//getAttribute()
let a = document.querySelector("a");
a.getAttribute("href") //gets the href attribute of the anchor tag

// //setAttribute()
a.setAttribute("href", "https://www.google.com"); //sets the href attribute of the anchor tag

//removeAttribute()
a.removeAttribute("href"); //removes the href attribute of the anchor tag

