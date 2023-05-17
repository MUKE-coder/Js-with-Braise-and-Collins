// Array of products
import { products } from "./calculate.js";
// Selecting the products container
const productsContainer = document.querySelector(".products-container");

products.forEach((product) => {
  const productTemplate = `
  <div class="product" >
  <p class="product-discount">${product.discountPercent}%</p>
  <div class="product-image">
    <img
      src=${product.image}
      alt=""
    />
  </div>
  <h2 class="product-name">
   ${product.name}
  </h2>
  <p class="sale-price">UGX ${product.salePrice}</p>
  <p class="original-price">UGX ${product.originalPrice}</p>
</div>
  `;
  // console.log(productTemplate);
  productsContainer.insertAdjacentHTML("afterbegin", productTemplate);
  // productsContainer.insertAdjacentHTML("beforeend", productTemplate);
});

//
import { calcAge } from "./calculate.js";
import calcArea from "./calculate.js";
const age = calcAge(2001);

const area = calcArea(5, 2);



