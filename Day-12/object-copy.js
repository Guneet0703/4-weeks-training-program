let student={
    name:"Guneet Kaur",
    age:19,
    city:"ludhiana",
    greet: function(){
        console.log("hello",this.name);
    }
}

//shallow copy
const copy1={
    ...student
};
console.log("student:",student);
console.log("copy(with shallow):",copy1);


//object.assign
const copy2=Object.assign({},student);
console.log("copy(with object.assign):",copy2);



//combining using object.assign
let marks={
    marks:45
};

let result=Object.assign({},student,marks);
console.log("result:",result);