let form=document.querySelector("#form");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let emailError = document.querySelector("#emailError"); 
let passError = document.querySelector("#passError"); 

form.addEventListener("submit",function(e){
    e.preventDefault();

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let passRegex  = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    let emailAns = emailRegex.test(email.value.trim());
    let passAns = passRegex.test(password.value.trim());
    
    if valid=true;
    if(!emailAns){
        emailError.style.display = "block";
    }else{
        emailError.style.display = "none";
    }
    if(!passAns){
        passError.style.display = "block";
    }else{
        passError.style.display = "none";
    }
    if(emailAns && passAns){
        form.submit();
    }
})