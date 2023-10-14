let formElement = document.querySelector(".js-form");
let zlotyElement = document.querySelector(".js-zloty");
let dollarElement = document.querySelector(".js-dollar");

let usdRate = 4.36;
formElement.addEventListener("submit", (event) => {
event.preventDefault();
let zloty = zlotyElement.value;
let result = zloty / usdRate;

dollarElement.innerHTML = `Dollar: ${result.toFixed(2)}`;
});