const phones = [
  {
    name: "Samsung Galaxy",
    androidVersion: 14,
  },
  {
    name: "Infinix Note",
    androidVersion: 11,
  },
  {
    name: "Techno 23",
    androidVersion: 13,
  },
  {
    name: "Huwaei",
    androidVersion: 10,
  },
];
// console.log(phones[0]["androidVersion"]);
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const squaredNums = numbers.map(function (item) {
  return item ** 2;
});
// console.log(squaredNums);
const products = [
  { id: 1, name: "Shirt", price: 25 },
  { id: 2, name: "Jeans", price: 50 },
  { id: 3, name: "Sweater", price: 40 },
  { id: 4, name: "Hat", price: 20 },
  { id: 5, name: "shoes", price: 100 },
];

const names = products.map(function (product) {
  return product.price;
});

const productsContainer = document.querySelector(".products-container");
const createTemplate = (product) => {
  return `
  <div class="card">
          <div class="card-header">
            <p>${product.id}</p>
            <p>${product.name}</p>
          </div>
          <div class="card-body">
            <p>$${product.price}</p>
          </div>
        </div>
  `;
};
let productTemplates = products.map(createTemplate);
console.log(productTemplates);
// const str = prompt("Enter string");
// console.log(str.split(" "));
const arr = ["man", "woman"];
console.log(arr.join(" "));
productsContainer.innerHTML = productTemplates.join(" ");
