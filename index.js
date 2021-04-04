const colors = ["#FFFFFF", "#2196F3", "#4CAF50", "#FF9800", "#009688", "#795548"];

const refs = {
  body: document.querySelector("body"),
  start: document.querySelector('[data-action="start"]'),
  stop: document.querySelector('[data-action="stop"]'),
};
let id;
const switchColour = () => {
  id = setInterval(() => {
    let el = randomIntegerFromInterval(0, colors.length - 1);
    refs.body.style.backgroundColor = colors[el];
    // console.log('switching');
  }, 1000);

  refs.start.disabled = true;
};
const stopSwitch = () => {
  clearInterval(id);
  refs.start.disabled = false;
  // console.log('stopped switching');
};
refs.start.addEventListener('click', switchColour)
refs.stop.addEventListener('click', stopSwitch)

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
console.log(switchColour());
