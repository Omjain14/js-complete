//Mouseover:Means on which mouse comes
let abcd = document.querySelector("#abcd");

abcd.addEventListener("mouseover",function(){
    abcd.style.backgroundColor = "yellow"
})

abcd.addEventListener("mouseout",function(){
    abcd.style.backgroundColor = "red"
})

// window.addEventListener("mousemove",function(dets){
//     let boxWidth = abcd.offsetWidth;
//     let boxHeight = abcd.offsetHeight;
//     //now boxwidth is actual box width and vice versa
//     //when we minus heightdivide by 2 and actualwidth by 2 we get mosuse cursor in center.
//     abcd.style.top = (dets.clientY - boxHeight/2) + "px";
//     abcd.style.left = (dets.clientX - boxWidth/2)+ "px";

// })