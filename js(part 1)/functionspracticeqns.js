//BMI Calculator 
function bmiCalculator(weight,height){
    if(height<=0 || weight<=0) return "invalid input";
    return (weight/(height*height)).toFixed(2);

}
console.log(bmiCalculator(65,1.72));

//Q.Create a reusable discount calculator (HOF)
function discountCalculator(discount){
    return function(price){
        return price - price * (discount/100);
    }
}
let tenDiscount=discountCalculator(10); //10% discount function
console.log(tenDiscount(500)); //price 500 with 10% discount
let twentyDiscount=discountCalculator(20); //20% discount function
console.log(twentyDiscount(500)); //price 500 with 20% discount

//Q.Create a counter using closure
function counter(){
    let count =0;
    return function(){
        count++;
        return count;
    };
}
let count1=counter();
let count2=counter();
console.log(count1()); //1
console.log(count1()); //2
console.log(count1()); //3
console.log(count2()); //1
console.log(count1()); //4

//Q. Create a logger function using closure
function creaateLogger(){
    let logs=[];
    return function(message){
        logs.push(message);
        console.log(logs);
    }
}
let logger=creaateLogger();
logger("hijihihi");
logger("byebye");
logger("helloo");

//Q.Bank account deposit and withdraw using closure
function createBankAccount(){
    let balance=0;
    return{
        deposit(amount){
            balance+=amount;
            console.log(`Deposited ${amount},Balance ${balance}`);    
        },
        withdraw(amount){
            if(amount>balance){
                console.log("Insuffiecient Balance");
            }else{
                balance=balance-amount;
                console.log(`Withdraw ${amount}, Balance ${balance}`);
            }
        },
        checkBalance(){
            console.log(`Current Balance is ${balance}`);
        }
    }
}

let account = createBankAccount();
account.deposit(1000);
account.withdraw(500);
account.checkBalance();

//Create a pure function to transform value
function transformValue(value, operation) {
    return operation(value);
}

let double = (x) => x * 2;
let square = (x) => x * x;

console.log(transformValue(5, double)); //10
console.log(transformValue(5, square)); //25