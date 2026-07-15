//1.Create a function isEven(num) that prints "Even" or "Odd".
function isEven(num){
    if(num%2===0){
        console.log("even");
    }
    else{
        console.log("odd");
    }
}

isEven(9);
isEven(4);

//2.Create a function findCube(num) that returns the cube of a number.
//modern way
const cube=num=>num*num*num;
console.log(cube(3));

//3.Write an arrow function that converts Celsius to Fahrenheit.
let convert=(celsius)=>{
    let fahrenheit= (9/5) * celsius + 32;
    return fahrenheit;
}

console.log(convert(99));

//4.Write an arrow function that returns the length of a string.
const length=str=>str.length;
console.log(length("practice js"));

//5.Create a function that returns the last character of a string.
const lchar=str=>str[str.length-1];
console.log(lchar("my practice"));

//6.Create a function that returns the square root of a number
const squareroot=num=>Math.sqrt(num);
console.log(squareroot("4"));