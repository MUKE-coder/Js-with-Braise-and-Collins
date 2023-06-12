const API = "https://fakestoreapi.com/products";
const productsContainer = document.querySelector(".products-container");
const spinner = document.querySelector("#loading");
const cartCount = document.querySelector("#cartCount");
console.log(productsContainer);
function fetchDataUsingPromises() {
  fetch(API)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}

//Initialising the cart
const storedCartItems = JSON.parse(localStorage.getItem("cart"));
let cart = storedCartItems ? storedCartItems : [];
cartCount.textContent = cart.length;
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
    // console.log(data);
    // Display data
    displayUI(data);

    // CART FUNCTIONALITY
    /**
     * 1 SELECT the cart btns
     */
    const addToCartBtns = document.querySelectorAll(".add-to-cart");
    // loop thru the btn
    addToCartBtns.forEach((btn) => {
      btn.addEventListener("click", (event) => {
        const productId = event.target.dataset.id;
        const product = data.find((product) => product.id == productId);
        cart.push(product);
        // save the cart to local storage
        localStorage.setItem("cart", JSON.stringify(cart));
        //Update cartCount
        console.log(cart);
        cartCount.textContent = cart.length;
        // display the cart Notification
        showNotification("Product added to Cart");
        console.log(product);
        console.log(cart);
      });
    });
    // console.log(addToCartBtns);
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
          <a href="detail.html?id=${product.id}">View Detail</a>
        </div>
        <button data-id=${product.id} class="add-to-cart">Add to Cart</button>
      </div>
    `;
    spinner.style.display = "none";
    productsContainer.insertAdjacentHTML("beforeend", productTemp);
  });
}

// CART FUNCTIONALIY
//1 Select all the add to cart btns
function showNotification(message) {
  const note = document.querySelector(".note");
  note.textContent = message;
  note.style.left = "10px";
  setTimeout(() => {
    note.style.left = "-300px";
  }, 3000);
}
