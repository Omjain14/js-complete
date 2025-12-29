//repeating is loops.
//three types-while,for,foreach-majorly

//for(start;end;change)
// for(let i=1;i<=100;i++){
//     console.log(i);
// }

// start
// while(end){
//     //code
//     change
// }
// let i=1;
// while(i<=32){
//     console.log(i);
//     i++;
// }

//do-while-do will print once even if while condition not met.
// start
// do{//code 
// change}while(end)
// let i=1;
// do{
//     console.log(i);
//     i++
// }while(i<100);

// break-stopping loop in between.
// for(let i=1;i<=50;i++){
//     console.log(i);
//     if(i===10){
//         break;
//     }
// }

//continue-skip particular element
// for(let i=1;i<=50;i++){
    
//      if(i===10){
//         continue;
//      }
//      console.log(i); 
//  }
//for in and for of in arrays and objects

//BEGINNER FRIENDLY Qs.
//Q1.print numbers from 1 to 10 using for loop.
// for(let i=1;i<=10;i++){
//     console.log(i);
// }

//Q2.print numbers from 10 to 1 using while loop.
// let i=10;
// while(i>=1){
//     console.log(i);
//     i--;
// }

// Q3.print even numbers from 1 to 20 using for loop.
// for(let i=1;i<=20;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }

//Q4.print odd numbers from 1 to 15 using while loop.
// let i=1;
// while(i<=15){
//     if(i%2!=0){
//         console.log(i);
//     }
//     i++;
// }

//Q5.Print multiplication table of 5(5*1=5....5*10=50)
// for(let i=1;i<=10;i++){
//     console.log("5 * "+i+" = "+5*i);
//console.log(`5 * ${i} = ${5*i}`)this can also be done for dynamic values
// }

//Q6.Find sum of nos from 1 to 100 using loop.
// let sum=0;
// for(let i=1;i<=100;i++){
//     sum=sum+i;
// }
// console.log(sum);

//Q7.Print all nos btween 1 to 50 tht are div by 3.
// let i=1;
// while(i<=50){
//     if(i%3===0){
//         console.log(i)
//     }
//     i++;
// }

//Q8.Ask user for a no and print whether each no from 1 to that no is even or odd.

// let val=Number(prompt("give a no."));
// for(let i=1;i<=val;i++){
//     if(i%2===0){
//         console.log(`${i} is even`);
//     }else{
//         console.log(`${i} is odd`);
//     }
// }

// Q9.Count how many nos b/w 1 to 100 are divisble by both 3 and 5.

// let count=0;
// for(i=1;i<=100;i++){
//     if(i%3===0 && i%5===0){
//         count++;
//     }
// }
// console.log(count);

//Q10.Stop at first multiple of 7 in 1 to 100 loop.
// for(let i=1;i<=100;i++){
//     console.log(i);
//     if(i%7===0){
//         break;
//     }
// }

//Q11.Skip multiples of 3 in loop of 1 to 20.
// for(let i =1;i<=20;i++){ 
//     if(i%3===0){
//         continue;
//     }
//     console.log(i);
// }

//Q12.Print first 5 odd nos in loop of 1 to 100 by using if,continue,a counter and break.

// let count=0;
// for(i=1;i<100;i++){
//     if(i%2===1){
//         count++;
//         console.log(i);
//     }
//     if(count===5){
//         break;
//     }
// }

//Q,Reverse a number.
// let num=1234;
// let rev=0;
// while(num>0){
//     let lastDigit=num%10;
//     rev=rev*10+lastDigit;
//     num=Math.floor(num/10);
// }
// console.log(rev);

//Q.Sum of digits of a number.
// function sumOfDigits(num) {
//     let sum=0;
//     while(num>0){
//         let lastDigit=num%10;
//         sum=sum+lastDigit;
//         num=Math.floor(num/10);
//     }console.log(sum);
// }    
// sumOfDigits(12345);

//Q.Palindrome number.
// function isPalindrome(num){
//     let originalNum=num;
//     let rev=0;
//     while(num>0){
//         let lastDigit=num%10;
//         rev=rev*10+lastDigit;
//         num=Math.floor(num/10);
//     }
//     if(rev===originalNum){
//         console.log(`${originalNum} is a palindrome number`);
//     }else{
//         console.log(`${originalNum} is not a palindrome number`)
//     }
// }
// isPalindrome(54321);

//Q.Count digits in a number. 
// function countDigits(num){
//    if(num===0) return 1;
//     let count=0;
//     while(num>0){
//         let lastDigit=num%10;
//         count++;
//         num=Math.floor(num/10);
//     }
//     console.log(count);
// }
// countDigits(45313);

