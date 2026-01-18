//any moment on the screen,any action raises an event and anything happening on screen and we have to give reaction to that event, then we must know event handling.event listener is reaction to event.

//EVENT BINDING:
//step1:Select the element first.
// let h1 = document.querySelector("h1");

//Then add event listener and styling. 
// h1.addEventListener("click",function(){
//     h1.style.color = "red";
// })

//when doubleclick on elemnent use "dblclick" as an eventlistener
// h1.addEventListener("dblclick",function(){
//     h1.style.backgroundColor="black";
// })

//removeEventListener:
//Step1: select the elemnt
// let p = document.querySelector("p");
//step2:create function like above but outside eventListener
// function dblclick() {
//     p.style.color="gold";
// }
// step 3:
// p.addEventListener("dblclick",dblclick);   
// p.removeEventListener("dblclick",dblclick); //removed eventListener.

//common events
//click:when we click once,action is performed

//input:When given any input it performs action
// let inp = document.querySelector("input");

// inp.addEventListener("input",function(){
//     console.log("User is typing");
// });//it will give user is typing whenver typed or even given space

//But to know what is typed input we need to tske input from function 
// inp.addEventListener("input",function(details){
//     console.log(details);
// }) //Ok,by applying this we got details but even backspace is giving null in console we can see in inputEvent inside that data object we can see our letter so now direct we will make it print

// inp.addEventListener("input",function(details){
//     if(details.data !== null){
//     console.log(details.data);
//     }
// })

//change event: whenver we see change in textarea or input select
// let select = document.querySelector("select");
//If we want to change Select your device heading to selected after selecting device
// let h2 = document.querySelector("h2"); 

// select.addEventListener("change",function(dets){
//     console.log(dets.target.value);    //by doing console we got to know selcted value is in target so we do dets.target.value
//     h2.textContent = `${dets.target.value} Device Selected`;
// })

//Submit:event
// let form=document.querySelector("form");
// let inputs = document.querySelectorAll("input");
// let main = document.querySelector("#main");

// form.addEventListener("submit",function(dets){
//     dets.preventDefault();

   

//     let card = document.createElement("div");
//     card.classList.add("card");

//     // card.addEventListener("mouseover",function(){
//     //     console.log("mousover");
//     // })


//     let profilepic = document.createElement("div");
//     profilepic.classList.add("profilepic");

//     let img = document.createElement("img");
//     img.setAttribute("src", inputs[0].value);

//     let h3 = document.createElement("h3");
//     h3.textContent = inputs[1].value;
//     let h5 = document.createElement("h5");
//     h5.textContent = inputs[2].value;
//     let p = document.createElement("p");
//     p.textContent = inputs[3].value;

//     profilepic.appendChild(img);
//     card.appendChild(profilepic);

//     card.appendChild(h3);
//     card.appendChild(h5);
//     card.appendChild(p);

//     main.appendChild(card);

//     inputs.forEach(function(inp){
//         if(inp.type !== "submit"){
//             inp.value ="";
//         }
//     })

// })

