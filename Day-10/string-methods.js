let str="London Special";

let str1="united united united";

console.log(str.length);

console.log(str.charAt(5));

console.log(str.indexOf('i'));

console.log(str.includes("Special"));

console.log(str.slice(7,13));

console.log(str.substring(0,6));

console.log(str.replace("Special" , "Edition"));

console.log(str1.replaceAll("united" , "states"));

console.log(str.split(" "));

let str3= "   United States   ";
console.log(str.trim());

console.log(str.toUpperCase());

console.log(str.toLowerCase());

console.log(str.startsWith("United"));

console.log(str.endsWith("States"));

console.log(str.repeat(3));

let str4="abc";
console.log(str4.padStart(6, "0"));

console.log(str4.padEnd(6, "0"));