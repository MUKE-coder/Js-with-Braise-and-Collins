// DOM MANIPULATION

//Adding elements in the HTML
const cardDiv = document.createElement("div");
cardDiv.innerHTML = "Welcome to Desishub";
cardDiv.className = "card";
cardDiv.id = "cardId";
document.body.appendChild(cardDiv);
const ball = document.querySelector(".ball");
console.log(ball);

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

// const src = prompt("Enter image address");
const src = "./image.webp";
const heading = "My heading";
const description =
  " Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,eveniet!";
const cardLink = "https://www.desishub.com";
let profileCard = `
<div class="profile-card">
        <img src=${src} alt="" />
        <h3>${heading}</h3>
        <p>
         ${description}
        </p>
        <a href=${cardLink}>View Details</a>
      </div>
`;
profileCardContainer.innerHTML = profileCard;
console.log(profileCardContainer);

// profileCardContainer.appendChild(profileCard);

// REMOVING ELEMENTS
// const ballParent = ball.parentNode;
// ballParent.removeChild(ball);
// console.log(ballParent);
// ball.remove();
ball.style.backgroundColor = "red";
console.log(ball);
ball.id = "myBall";
// Modifying classes
ball.classList.add("br-50");
ball.classList.remove("br-50");
const quote = document.querySelector(".quote");
console.log(quote);
quote.textContent = prompt("Enter a quote");
