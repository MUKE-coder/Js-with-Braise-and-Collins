const form = document.querySelector("form");
const usernameInput = document.querySelector("#username");
const profileImageInput = document.querySelector("#profile");

const imageContainer = document.querySelector("img");
const userContainer = document.querySelector(".username");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const user = {
    username: usernameInput.value,
    profileImage: "",
  };
  const file = profileImageInput.files[0];
  console.log(profileImageInput.files[0]);

  const reader = new FileReader();
  reader.onload = function (event) {
    console.log(event.target);
    user.profileImage = event.target.result;
    userContainer.textContent = user.username;
    imageContainer.src = user.profileImage;

    // save the user to ls
    localStorage.setItem("user", JSON.stringify(user));
  };
  reader.readAsDataURL(file);
  console.log(user);
});

//
const copyBtn = document.querySelector("#copyBtn");
const text = document.querySelector(".text");
copyBtn.addEventListener("click", () => {
  const whatToCopy = window.location;
  navigator.clipboard
    .writeText(whatToCopy)
    .then(() => {
      copyBtn.textContent = "Text Copied";
    })
    .then((err) => {
      console.log("something went wrong", err);
    });
});
