const storedCartItems = JSON.parse(localStorage.getItem("cart"));
let cart = storedCartItems ? storedCartItems : [];
cartCount.textContent = cart.length;

console.log(cart);
