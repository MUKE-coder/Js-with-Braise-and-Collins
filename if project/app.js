// circle, triangle and a rectangle
const shape = prompt("Enter the shape (circle,triangle,rectangle) eg circle?");
console.log(shape);
if (shape.toLowerCase() == "circle") {
  const radius = +prompt("Enter the radius?");
  const area = 3.14 * radius * radius;
  const result = `The area of a circle with radius ${radius} is ${area}`;
  console.log(result);
  // console.log(radius, typeof radius);
}
if (shape.toLowerCase() == "rectangle") {
  const length = +prompt("Enter the length");
  const width = prompt("Enter th width");
  const areaOfRectangle = length * width;
  const result = `The are of a rectangle with length ${length} and width is ${width} is ${areaOfRectangle}`;
  console.log(result);
}
if (shape.toLowerCase() == "triangle") {
  const base = +prompt("Enter the base");
  const height = +prompt("Enter the height");
  const areaOfTriangle = (1 / 2) * base * height;
  const result = `the area of the triangle with base ${base} height ${height} is ${areaOfTriangle}`;
  console.log(result);
}
