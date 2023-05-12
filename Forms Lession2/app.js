const shapeSelectForm = document.querySelector("#formSelectShape");
const shape = document.querySelector("select");
const modifiedShape = document.querySelector(".shape");
// FORMS
const circleForm = document.querySelector("#circleForm");
const triangleForm = document.querySelector("#triangleForm");
const rectangleForm = document.querySelector("#rectangleForm");
const areaSpan = document.querySelector(".area");

// Hide All forms

shapeSelectForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const selectedShape = shape.value;

  if (selectedShape === "circle") {
    clear();
    modifiedShape.classList.add("circle");
    circleForm.classList.remove("hidden");
    console.log(modifiedShape);
    // Calculating the area
    circleForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const r = +document.querySelector("#radius").value;
      const area = calcArea("circle", r);
      areaSpan.textContent = area;
    });
  } else if (selectedShape === "triangle") {
    clear();
    modifiedShape.classList.add("triangle");
    triangleForm.classList.remove("hidden");
    console.log(modifiedShape);
  } else {
    clear();
    modifiedShape.classList.add("rectangle");
    circleForm.classList.remove("hidden");
    console.log(modifiedShape);
  }
  // console.log(selectedShape);
  // shapeSelectForm.style.display = "none";
});
// console.log(selectedShape);

function clear() {
  modifiedShape.classList.remove("circle", "rectangle", "triangle");
}

function calcArea(shape, r = 0, b = 0, h = 0, l = 0, w = 0) {
  if (shape === "circle") {
    return 3.14 * r ** 2;
  } else if (shape === "triangle") {
    return (1 / 2) * b * h;
  } else {
    return l * w;
  }
}
// function log(message = "Default Msg") {
//   alert(message);
// }
// log("This is the actual msg");
