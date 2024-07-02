let calculation = localStorage.getItem('calculation') || '';

displayCalculation();

document.querySelector('.js-1-button').addEventListener('click', () => {
  updateCalculation('1');
});

document.querySelector('.js-2-button').addEventListener('click', () => {
  updateCalculation('2');
});

document.querySelector('.js-3-button').addEventListener('click', () => {
  updateCalculation('3');
});

document.querySelector('.js-4-button').addEventListener('click', () => {
  updateCalculation('4');
});

document.querySelector('.js-5-button').addEventListener('click', () => {
  updateCalculation('5');
});

document.querySelector('.js-6-button').addEventListener('click', () => {
  updateCalculation('6');
});

document.querySelector('.js-7-button').addEventListener('click', () => {
  updateCalculation('7');
});

document.querySelector('.js-8-button').addEventListener('click', () => {
  updateCalculation('8');
});

document.querySelector('.js-9-button').addEventListener('click', () => {
  updateCalculation('9');
  console.log(calculation);
});

document.querySelector('.js-0-button').addEventListener('click', () => {
  updateCalculation('0');
  console.log(calculation);
});

document.querySelector('.js-plus-button').addEventListener('click', () => {
  updateCalculation(' + ');
  console.log(calculation);
});

document.querySelector('.js-minus-button').addEventListener('click', () => {
  updateCalculation(' - ');
});

document.querySelector('.js-multiply-button').addEventListener('click', () => {
  updateCalculation(' * ');
});

document.querySelector('.js-divide-button').addEventListener('click', () => {
  updateCalculation(' / ');
});

document.querySelector('.js-point-button').addEventListener('click', () => {
  updateCalculation('.');
});

document.querySelector('.js-calculate-button').addEventListener('click', () => {
  calculateCaltulation();
});

document.querySelector('.js-clear-button').addEventListener('click', () => {
  calculation = '';
  displayCalculation();
  localStorage.setItem('calculation', calculation);
});

function updateCalculation(value) {
  calculation += value;

  displayCalculation();

  localStorage.setItem('calculation', calculation);
}

function displayCalculation() {
  document.querySelector('.js-calculation').innerHTML = calculation;
}

function calculateCaltulation() {
  calculation = eval(calculation);
  displayCalculation();
  localStorage.setItem('calculation', calculation);
}
