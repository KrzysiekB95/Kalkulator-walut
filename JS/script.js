const getZloty = () => {
    const zlotyElement = document.querySelector(".js-zloty");
    return zlotyElement.value;
}

const countDollar = (usdRate) => {
    return getZloty() / usdRate;
}

const countEuro = (euroRate) => {
    return getZloty() / euroRate;
}

const insetCurrencyElement = () => {
    const currency = document.querySelector(".js-currency");
    const result = document.querySelector(".js-result");
    if (currency.value === "Dollar") {
        result.innerHTML = `Dollar: ${countDollar(4.03).toFixed(2)}`;
    } else {
        result.innerHTML = `Euro: ${countEuro(3.38).toFixed(2)}`;
    }
}

const formElement = document.querySelector(".js-form");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    insetCurrencyElement();
});