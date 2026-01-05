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

//Dynamic Dom Manipulation:
//createElement()
let h4= document.createElement("h2");
h4.textContent="Hi hello Namaste"; //creates a new h2 element
console.log(h4);
//appendChild()//puts the element at the end of the body
//here we need to selct the body to append the h4 element
document.querySelector("body").appendChild(h4);
// document.body.appendChild(h4);
//prepend()//puts the element at the beginning of the body
document.body.prepend(h4);

//remove()//removes the element
// let h4 = document.querySelector("h2");
// h4.remove();

//Style updates via .style and .classList(adds/removes/toggles classes)

//.style
let h5 = document.querySelector("h1");
h5.style.color = "goldenrod"; //changes the color of h1 to goldenrod
h5.style.backgroundColor = "black"; //changes the background color of h1 to black
h5.style.fontFamily = "Gilroy"; //changes the font family of h1 to Gilroy
//.style only works for inline styles

//.classList
let h6 = document.querySelector("h1");
h6.classList.add("active"); //adds the class active to h1
// h6.classList.remove("active"); //removes the class active from h1
// h6.classList.toggle("active"); //toggles the class active on h1

let div=document.querySelector("div");
div.classList.toggle("active"); //toggles the class active on div it means if the class is present it removes it and if not present it adds it.
