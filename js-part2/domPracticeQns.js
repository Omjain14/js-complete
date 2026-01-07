//Task1 : Select the heading of a page by ID and change its text to "Welcome to the DOM Practice Page"
let heading = document.querySelector("#header");
heading.textContent ="Welcome to the DOM Practice Page";


//Task 2: Select all <li> elrmrnts and print their text using a loop
let listItems = document.querySelectorAll("li");
listItems.forEach(function(item) {
    console.log(item.textContent);
});
 