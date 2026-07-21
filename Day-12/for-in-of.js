// for in:
//Print both key and value.
let person={
    name:"xyz",
    age:19,
    country:"India",
    Occupation:"Developer"
}

for(let key in person){
    console.log(key,":",person[key]);
}

//Find the longest key in an object.
let longest="";
for(let key in person){
    if(key.length>longest.length){
        longest=key;
    }
}
console.log("Longest Key:",longest);


//for of loop
//Print each character of the string "JavaScript".
let str="Javascript";
for(let value of str){
    console.log(value);
}


//Find the sum of all numbers in an array.
let arr=[1,2,3,4,5,6];
let sum=0;
for(let value of arr){
    sum+=value;
}
console.log("sum:",sum);