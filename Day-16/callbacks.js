function greet(name, callback) {
  console.log("Hello " + name);

  callback();
}

function welcome() {
  console.log("Welcome to MERN Stack Training");
}

greet("Guneet kaur", welcome);