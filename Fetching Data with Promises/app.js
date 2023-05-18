// Selecting the products container
const productsContainer = document.querySelector(".products-container");

const API_URL = "https://api.escuelajs.co/api/v1/products";

const apiRequest = fetch(API_URL);
// asynchronus task
apiRequest
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    const products = data.splice(190);
    console.log(products);
    products.forEach((product) => {
      const productTemplate = `
      <div class="product" >
      <div class="product-image">
        <img
          src=${product.images[0]}
          alt=""
        />
      </div>
      <h2 class="product-name">
       ${product.title}
      </h2>
      <p class="sale-price">UGX ${product.price}</p>
      
    </div>
      `;
      // console.log(productTemplate);
      productsContainer.insertAdjacentHTML("afterbegin", productTemplate);
      // productsContainer.insertAdjacentHTML("beforeend", productTemplate);
    });
  })
  .catch((err) => {
    console.log(err);
  });
