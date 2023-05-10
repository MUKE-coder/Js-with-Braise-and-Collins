const smallText = document.querySelector("small");
const usernameEl = document.querySelector("#username");
const form = document.querySelector("form");
const data = document.querySelector(".data");
const select = document.querySelector("select");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (usernameEl.value == "") {
    const pElement = usernameEl.parentElement;
    pElement.classList.add("error");
    console.log(pElement);
    // smallText.classList.add("error");
    smallText.textContent = "Please enter username";
    // usernameEl.style.borderColor = "red";
  } else if (usernameEl.value.length < 3) {
    const pElement = usernameEl.parentElement;
    pElement.classList.add("error");
    smallText.textContent = "Username must be between 3 and 10 characters";
  } else {
    data.innerHTML = `
    <p>${usernameEl.value} </p>
    <p>${select.value} </p>
    `;
    form.parentElement.style.display = "none";
    console.log(usernameEl.value);
  }
});
