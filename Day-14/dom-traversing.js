function traverseDOM() {
  const container = document.getElementById("container");

  console.log("Parent Element:");
  console.log(container.parentElement);

  console.log("Children:");
  console.log(container.children);

  console.log("First Child:");
  console.log(container.firstElementChild);

  console.log("Last Child:");
  console.log(container.lastElementChild);

  console.log("Next Sibling:");
  console.log(container.firstElementChild.nextElementSibling);

  console.log("Previous Sibling:");
  console.log(container.lastElementChild.previousElementSibling);
}