let numbers=[1,2,3,4,5,6];
let names=["maya","rahul","cara"]

//map()
console.log(numbers.map(num=>num*2));
console.log(names.map(name=>name.toUpperCase()));

//filter
console.log(numbers.filter(num=>num%2===0));
console.log(numbers.filter(num=>num%2!==0));
let nums=[50,100,30,70,20];
console.log(nums.filter(num=>num>50));

//find
console.log(numbers.find(num=>num%2===0));
let fruits=["Banana","cherry","Mango"];
console.log(fruits.findIndex(fruit=>fruit=="Mango"));

//reduce
console.log(numbers.reduce((acc,curr)=>acc*curr,1));
console.log(numbers.reduce((acc,curr)=>acc<curr ? curr : acc));