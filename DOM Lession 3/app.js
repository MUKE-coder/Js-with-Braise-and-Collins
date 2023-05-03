// SELECT ELEMENTS
const containerV1 = document.querySelector(".container.v1");
const containerV2 = document.querySelector(".container.v2");
const containerV3 = document.querySelector(".container.v3");
console.log(containerV3);
const src = prompt("Enter background image");
const quote = prompt("Enter the Quote");
let quoteTemplate = `
      <img src=${src} alt="" />
      <div class="quote-container">
        <p>${quote}.</p>
      </div>
`;

containerV1.innerHTML = quoteTemplate;
containerV2.innerHTML = quoteTemplate;
containerV3.innerHTML = quoteTemplate;
