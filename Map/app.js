// Array of products
const products = [
  {
    name: "Global Star 32 Inch FRAMELESS HD Digital LED TV - Black",
    image:
      "https://ug.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/68/44323/1.jpg?3562",
    discountPercent: -54,
    salePrice: 292000,
    originalPrice: 637000,
  },
  {
    name: "Global Star GS-kz-580(3+1) Gas Cooker 3 Gas + 1 Electric/Ignition/up And Down Oven 50x50cm - Black",
    image:
      "https://ug.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/28/98997/1.jpg?7632",
    discountPercent: -47,
    salePrice: 515000,
    originalPrice: 972000,
  },
  {
    name: "Global Star 32 Inch FRAMELESS HD Digital LED TV - Black",
    image:
      "https://ug.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/68/44323/1.jpg?3562",
    discountPercent: -54,
    salePrice: 292000,
    originalPrice: 637000,
  },
  {
    name: "Global Star 32 Inch FRAMELESS HD Digital LED TV - Black",
    image:
      "https://ug.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/68/44323/1.jpg?3562",
    discountPercent: -54,
    salePrice: 292000,
    originalPrice: 637000,
  },
];
// Selecting the products container
const productsContainer = document.querySelector(".products-container");
console.log(productsContainer);
const createProductTemplate = (product) => {
  return `
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
};
const productTemplates = products.map(createProductTemplate);
productsContainer.innerHTML = productTemplates.join(" ");
console.log(productTemplates.join(" "));
