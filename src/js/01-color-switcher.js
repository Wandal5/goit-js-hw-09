function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function getBgColor() {
  bodyRef.style.backgroundColor = getRandomHexColor();
}

function toggleDisabled() {
  dataStartRef.toggleAttribute('disabled');
  dataStopRef.toggleAttribute('disabled');
}

let timerId;

function onStart(e) {
  timerId = setInterval(getBgColor, 1000);
  toggleDisabled();
}

function onStop() {
  clearInterval(timerId);
  toggleDisabled();
}

const dataStartRef = document.querySelector('[data-start]');
const dataStopRef = document.querySelector('[data-stop]');
const bodyRef = document.querySelector('body');

dataStartRef.addEventListener('click', onStart);
dataStopRef.addEventListener('click', onStop);
