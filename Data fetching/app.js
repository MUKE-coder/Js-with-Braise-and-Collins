const API = "https://fakestoreapi.com/products";
const productsContainer = document.querySelector(".products-container");
const spinner = document.querySelector("#loading");
console.log(productsContainer);
function fetchDataUsingPromises() {
  fetch(API)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}
// fetchDataUsingPromises();

async function fetchDataUsingAsync() {
  try {
    const response = await fetch(API);
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log("Something went wrong", err);
  }
}
async function fetchDataAndDisplay() {
  try {
    // Fetching Data
    spinner.style.display = "inline-block";
    const response = await fetch(API);
    const data = await response.json();
    console.log(data);
    // Display data
    displayUI(data);
  } catch (err) {
    console.log("Something went wrong", err);
  }
}
fetchDataAndDisplay();
function displayUI(data) {
  data.forEach((product) => {
    const productTemp = `
    <div class="product">
        <div class="product-image">
          <img
            src=${product.image}
            alt=""
          />
        </div>
        <p class="product-name">${product.title}</p>
        <div class="detail">
          <p>$${product.price}</p>
          <a href="detail.html">Vie Detail</a>
        </div>
      </div>
    `;
    spinner.style.display = "none";
    productsContainer.insertAdjacentHTML("beforeend", productTemp);
  });
}

async function fetchSingleProduct() {
  const response = await fetch("https://fakestoreapi.com/products/1");
  const data = await response.json();
  console.log(data);
}
fetchSingleProduct();
