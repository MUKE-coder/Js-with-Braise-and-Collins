const generateCircleBtn = document.querySelector("#generate-circle");
const generateTriangleBtn = document.querySelector("#generate-triangle");
const generateRectangleBtn = document.querySelector("#generate-rectangle");
const resetBtn = document.querySelector("#reset");
const shape = document.querySelector("#shape");

resetBtn.style.display = "none";
// event Listeners
generateCircleBtn.addEventListener("click", () => {
  reset();
  shape.classList.add("circle");
  resetBtn.style.display = "block";
});
generateTriangleBtn.addEventListener("click", () => {
  reset();
  shape.classList.add("triangle");
  resetBtn.style.display = "block";
});
generateRectangleBtn.addEventListener("click", () => {
  reset();
  shape.classList.add("rectangle");
  resetBtn.style.display = "block";
});
resetBtn.addEventListener("click", () => {
  reset();
});

function reset() {
  shape.classList.remove("triangle");
  shape.classList.remove("circle");
  shape.classList.remove("rectangle");
}
