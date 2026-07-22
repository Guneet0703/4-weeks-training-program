function createElementDemo() {
  const newPara = document.createElement("p");

  newPara.innerText = "This paragraph was created using createElement().";

  document.getElementById("container").appendChild(newPara);
}