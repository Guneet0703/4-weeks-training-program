// 1. Check whether a number is positive, negative, or zero
let num=-3;
if(num>0){
    console.log(num,"is positive");
}
else if(num===0){
    console.log("Number is zero");
}
else{
    console.log(num,"is Negative");
}

// 2. Check whether a number is even or odd
let num1=14;
if(num1%2===0){
    console.log(num1,"is Even Number");
}
else{
    console.log(num1,"is Odd Number");
}

// 3. Find the largest of two numbers
let a=10;
let b=5;
if(a>b){
    console.log(a,"is greater");
}
else if(a===b){
    console.log("Number are equal");
}
else{
    console.log(b,"is greater");
}

// 4. Find the largest of three numbers
let x = 10;
let y = 45;
let z = 15;

if (x >= y && x >= z) {
    console.log(x," is the Largest Number");
}
else if (y >= x && y >= z) {
    console.log(y," is the Largest Number");
}
else {
    console.log(z," is the Largest Number");
}

// 5. Print the day name using switch
let day = 5;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Invalid Day Number");
}