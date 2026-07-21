function replaceElementDemo() {
  const newHeading = document.createElement("h2");

  newHeading.innerText = "This heading replaced Paragraph 1";

  const oldElement = document.getElementById("para1");

  document.getElementById("container").replaceChild(newHeading, oldElement);
}