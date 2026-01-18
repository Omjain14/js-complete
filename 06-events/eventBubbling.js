//Event bubbling:Event first applies on child then parent then grandparent it goes upward
document.querySelector("#nav").addEventListener("click",()=>{
    // e.stopPropagation();
    alert(" navv clicked");
})

let ul = document.querySelector("ul");

ul.addEventListener("click",(e)=>{
    e.target.classList.toggle("lt");
})
//basically even bubbling is when event listener is on child still it checks for parent then its parent till body and if any  of it has event listener it will perform both listeners,this is event bubbling.
 