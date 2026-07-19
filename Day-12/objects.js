let student={
    name:"Guneet Kaur",
    age:19,
    city:"ludhiana",
    greet: function(){
        console.log("hello",this.name);
    }
};//created a object

//accessing and updating properties
student.name="Guneet";
student.greet();

//object methods
console.log(Object.keys(student));
console.log(Object.values(student));
console.log(Object.entries(student));

//object destructuring
let {name,age,city}=student;
console.log(name);
console.log(age);
console.log(city);