// DOM MANIPULATION

//Adding elements in the HTML
const cardDiv = document.createElement("div");
cardDiv.innerHTML = "Welcome to Desishub";
cardDiv.className = "card";
cardDiv.id = "cardId";
document.body.appendChild(cardDiv);

const anchorTag = document.createElement("a");
anchorTag.innerHTML = "Visit website";
cardDiv.appendChild(anchorTag);

// SELECTIN ELEMENTS
//1.getEl;ementbyId
const btn = document.getElementById("button");

const section = document.getElementById("welcome-section");
console.log(section);

const paragraphs = document.getElementsByTagName("p");

const sections = document.getElementsByClassName("section");
console.log(sections);
sections[0].style.background = "green";
sections[0].style.padding = "50px";
document.body.className = "darkMode";
// Queryselector

const link = document.querySelector("section a");
const links = document.querySelectorAll("section a");
console.log(links);

const profileCardContainer = document.querySelector(".profile-cards");
let profileCard = `
<div class="profile-card">
        <img src="./image.webp" alt="" />
        <h3>Image Heading</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
          eveniet!
        </p>
        <a href="#">View Details</a>
      </div>
`;
profileCardContainer.innerHTML = profileCard;
console.log(profileCardContainer);

// profileCardContainer.appendChild(profileCard);
