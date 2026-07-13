// Find the factorial of a number
let num=6;
let fact=1;
for(let i=1;i<=num;i++){
    fact*=i;
}
console.log("Factorial of",num,"is",fact);

// Reverse a number
let num1=2034;
let rev=0;
while(num1!==0){
    let digit=num1%10;
    rev=rev*10+digit;
    num1=Math.floor(num1/10);
}
console.log("Reverse:",rev);

// Print all prime numbers from 1 to 100
console.log("Prime Numbers:");
for(let i=0;i<=100;i++){
    let isprime=true;
    for(let j=2;j<i;j++){
        if(i%j===0){
            isprime=false;
            break;
        }
    }
    if(isprime){
        console.log(i);
    }
}

// Star Pattern - Right Angled Triangle
for(let i=0;i<=5;i++){
    let pattern="";
    for(let j=0;j<i;j++){
        pattern+="* ";
    }
    console.log(pattern);
}
