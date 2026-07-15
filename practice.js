// let numbers=[1,2,3,4,5,6];
// console.log(numbers.push(7));
// console.log(numbers.pop());
// console.log(numbers.shift());
// console.log(numbers.unshift(8));
// console.log(numbers.splice(2,1,8));
// console.log(numbers.sort());
// console.log(numbers.reverse());
// console.log(numbers.fill(9,3,5));
// console.log(numbers.copyWithin());

// let numbers=[1,2,3,4,5,6];
// let names=["maya","rahul","cara"]

// //map()
// console.log(numbers.map(num=>num*2));
// console.log(names.map(name=>name.toUpperCase()));

// //filter
// console.log(numbers.filter(num=>num%2===0));
// console.log(numbers.filter(num=>num%2!==0));
// let nums=[50,100,30,70,20];
// console.log(nums.filter(num=>num>50));

// //find
// console.log(numbers.find(num=>num%2===0));
// let fruits=["Banana","cherry","Mango"];
// console.log(fruits.findIndex(fruit=>fruit=="Mango"));

// //reduce
// console.log(numbers.reduce((acc,curr)=>acc*curr,1));
// console.log(numbers.reduce((acc,curr)=>acc<curr ? curr : acc));
// let person={
//     name:"maya",
//     age: 19,
//     city:"LA",
//     education:"BTech",
//     greet:function(){
//         console.log("Hello Everyone");
//     }
// }

// person.greet();


// //clone 1(shallow copy)
// let person={
//     name:"maya",
//     age:19,
// }
// let clone=(...person);
// //clone method 2
// let person={
//     name:"maya",
//     age:19,
// }
// let clone=Object.assign


// //loop Questions:
// //print number from 10-1:
// for(i=10;i>0;i--){
//     console.log(i);
// }
// //Find the product (factorial) of a given number.
// let x=5;
// let fact=1;
// for(i=1;i<=num;i++){
//     fact=fact*i;
// // }
// // console.log("Factorial:",fact);



// // //for in:
// //Print both key and value.
// let person={
//     name:"xyz",
//     age:19,
//     country:"India",
//     Occupation:"Developer"
// }

// for(let key in person){
//     console.log(key,":",person[key]);
// }

// //Find the longest key in an object.
// let longest="";
// for(let key in person){
//     if(key.length>longest.length){
//         longest=key;
//     }
// }
// console.log("Longest Key:",longest);


//Print each character of the string "JavaScript".
// let str="Javascript";
// for(let value of str){
//     console.log(value);
// }


// //Find the sum of all numbers in an array.
// let arr=[1,2,3,4,5,6];
// let sum=0;
// for(let value of arr){
//     sum+=value;
// }
// console.log("sum:",sum);



function changeStyle() {
    let para = document.getElementById("text");

    para.style.color = "red";
    para.style.backgroundColor = "yellow";
    para.style.fontSize = "30px";
}

