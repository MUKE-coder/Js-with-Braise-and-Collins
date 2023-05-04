const rectangle = document.querySelector("#rectangle");
const anchorTag = document.createElement("a");
anchorTag.textContent = "Visit Desishub";
rectangle.appendChild(anchorTag);
console.log(rectangle);
anchorTag.setAttribute("href", "https://desishub.com");
rectangle.setAttribute("class", "rectangle");
anchorTag.setAttribute("test", "test value");
anchorTag.setAttribute("data-id", 1);
// const att = anchorTag.getAttribute("class");
// console.log(att);

// Datasets
// const triangle = document.querySelector("div[data-shape='triangle']");
// console.log(triangle);
// const dataValue = triangle.dataset.shape;
// console.log(dataValue);

// EVENT LISTENERS
// Select the element
const generateBtn = document.querySelector("#generate");

// add event listener
generateBtn.addEventListener("click", function () {
  console.log("Button Clicked");
  rectangle.classList.add("circle");
});
console.log(generateBtn);
