let input = document.querySelector("#inp1");
let span = document.querySelector("span");

input.addEventListener("input",function(e){
    let left = 20 - input.value.length;
    span.textContent = left;
    
    if(left<0){
        span.style.color = "red";
    }else{
        span.style.color = "black";
    }
});