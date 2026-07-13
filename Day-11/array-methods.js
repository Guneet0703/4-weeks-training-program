let sports=["cricket", "football", "tennis"];

sports.push("volleyball");
console.log(sports);

sports.pop();
console.log(sports);

sports.shift();
console.log(sports);

sports.unshift("cricket");
console.log(sports);

sports.splice(1,0,"basketball");
console.log(sports);

let arr=[1, 2, 5, 9 ,4];
arr.sort();
console.log(arr);

arr.reverse();
console.log(arr);

let arr1=[2, 3,[9,5], 7];
let result = arr1.flat();
console.log(result);

arr.fill(6,2,4);
console.log(arr);

arr.copyWithin(0,1,3);
console.log(arr);