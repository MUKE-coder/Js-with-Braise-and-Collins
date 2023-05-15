// create an object
const student = {
  name: "Gerlad",
  course: "Engineering",
  age: 30,
  relatives: {
    mother: "Jane",
    father: "Paul",
  },
};
console.log(student["course"]);
console.log(student.relatives.mother);
// add a property
student.campus = "MUK";
student.test = true;

// delete a property
delete student.test;
console.log(student);
