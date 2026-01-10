//if else elseif
//question:
function getGrade(score){
    if(score>=90 && score<=100){
        return "A+";
    }else if(score>=80 && score<=89){
        return "A"
    }else if(score<=70 && score>=79){
        return "B";
    }else{return "fail"}
}console.log(getGrade(5))


//switch
switch(4){
    case 1:console.log("hii");
    break;
    case 2:console.log("two");
    break;
    case 3:console.log("three");
    break;
    case 4:console.log("four");
    break;
    default:console.log("bye");
}

//early return pattern
function getVal(val){
    if(val<25) return "D"
    if(val<50)return "c"
    if(val<75)return "B"
    else return "A"
    
}console.log(getVal(74));

// above problem in early return
     function getGrade(score){
         if(score>=90 && score<=100) return "A+";
         if(score>=80 && score<=89) return "B";
         if(score>=70 && score<=79) return "C";
         if(score>=50 && score<=69) return "D";
         if(score>=0 && score<=50) return "Fail";
         return "Invalid marks";
    }
console.log(getGrade(50));

//ROCK-PAPER-SCISSOR GAME::
function rps(user,computer){
    if(user===computer) return "draw";
   
    if(user==='rock'&& computer==='scissor') return "user wins";
    if(user==='scissor'&&computer==='paper') return "user wins";
    if(user==='paper'&&computer==='rock') return "user wins";

    return "computer wins";
}console.log(rps("rock","paper"));
