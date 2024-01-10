const getZloty = () => {
    const zlotyElement = document.querySelector(".js-zloty");
    return zlotyElement.value;
}

const count = (usdRate) => {
    return getZloty() / usdRate;
}

const insetDollarElement = (usdRate) => {
    const dollarElement = document.querySelector(".js-dollar");
    dollarElement.innerHTML = `Dollar: ${count(usdRate).toFixed(2)}`;
}

const formElement = document.querySelector(".js-form");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    insetDollarElement(4.31);
});