const decrementBtnEl = document.querySelector('[ data-action="decrement"]');
const incrementBtnEl = document.querySelector('[ data-action="increment"]');
const valueEl = document.querySelector('#value');

let counterValue = 0;

decrementBtnEl.addEventListener('click', onDecrementBtnClick);

function onDecrementBtnClick() {
    counterValue -= 1;
    valueEl.textContent = counterValue;
};

incrementBtnEl.addEventListener('click', onincrementBtnClick);

function onincrementBtnClick() {
    counterValue += 1;
    valueEl.textContent = counterValue;
};


