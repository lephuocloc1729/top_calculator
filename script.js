let beforeOperand = '';
let operator = '';
let curOperand = '0';
let floatingPoint = false;
let isComputing = false;
display()

const numbers = document.querySelectorAll('.number');
numbers.forEach(number => {
  number.addEventListener('click', handleNumbers)
})
function handleNumbers(e) {
  if (curOperand === '0' && e.target.value !== '.'){
    curOperand = e.target.value;
  }
  else if (curOperand.length < 9) {
    curOperand += e.target.value;
  }
  display()
}
const point = document.querySelector('.point');
point.addEventListener('click', (e) => {
  if (!floatingPoint){
    handleNumbers(e);
    floatingPoint = true;
  }
})

function display() {
  document.querySelector('.before-operator').innerHTML = beforeOperand + operator;
  document.querySelector('.after-operator').innerHTML = curOperand;
}



const signButtons = document.querySelectorAll('.operators');
signButtons.forEach(button => {
  button.addEventListener('click', handleSign)
})

function handleSign(event) {
  document.querySelector('.container .selected')?.classList.remove('selected');
  event.target.classList.add('selected');
  if (isComputing) {
    beforeOperand = compute();
  }
  else {
    beforeOperand = curOperand;
  }
  operator = event.target.id;
  curOperand = '';
  isComputing = true;
  display();
}

function compute() {
  let result;
  if (operator === '+'){
    result = Number(beforeOperand) + Number(curOperand);
  }
  else if (operator === '-'){
    result = Number(beforeOperand) - Number(curOperand);
  }
  else if (operator === '×'){
    result = Number(beforeOperand) * Number(curOperand);
  }
  else if (operator === '÷'){
    result = Number(beforeOperand) / Number(curOperand);
  }
  document.querySelector('.container .selected')?.classList.remove('selected');
  curOperand = result;
  beforeOperand = '';
  operator = '';
  isComputing = false;
  display();
  return result;
}
//add event listener to equal sign button.
document.getElementById('=').addEventListener('click', () => compute())

//add event listener to AC button
document.getElementById('AC').addEventListener('click', () => allClear())

function allClear() {
  document.querySelector('.container .selected')?.classList.remove('selected');
  curOperand = '0';
  operator = '';
  beforeOperand = '';
  floatingPoint = false;
  isComputing = false;
  display();
}

//add event listener to DEL button 
document.getElementById("DEL").addEventListener('click', () => del())

function del() {
  len = curOperand.length;
  curOperand = curOperand.slice(0, length - 1)
  display();
}

//add event listener to "+/-"
document.getElementById('+/-').addEventListener('click', () => changeSign());

function changeSign() {
  curOperand = `${Number(curOperand)*-1}`;
  display();
}