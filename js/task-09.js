function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const button = document.querySelector('.change-color');
const colorLabel = document.querySelector('.color')

button.addEventListener('click', onButtonElClick);

function onButtonElClick() {
  body.style.backgroundColor = getRandomHexColor();
  colorLabel.textContent = getRandomHexColor();
};
