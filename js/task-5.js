const bodyElem = document.querySelector('body');
const btn = document.querySelector('button.change-color')
const spanColor = document.querySelector('span.color')
  
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function handleClick() {
  const randomColor = getRandomHexColor();
  bodyElem.style.backgroundColor = randomColor;
  spanColor.textContent = randomColor;
 };

btn.addEventListener("click", handleClick);

