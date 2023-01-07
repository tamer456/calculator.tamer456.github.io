const buttons = document.querySelectorAll('button');
const display = document.querySelector('#display');
const clearButton = document.querySelector('.clear');
const resultButton = document.querySelector('.result');

let firstValue = null;
let operator = null;

for (const button of buttons) {
  button.addEventListener('click', function() {
    if (display.textContent === '0') {
        display.textContent = '';
      }
    if (this.classList.contains('number')) {
      display.textContent += this.textContent;
    } else if (this.classList.contains('operator')) {
      display.textContent += ' ' + this.textContent + ' ';
    }
  });
}

clearButton.addEventListener('click', function() {
  display.textContent = '';
  firstValue = null;
  operator = null;
});


resultButton.addEventListener('click', function() {
    const displayTokens = display.textContent.split(' ');
    let result = parseInt(displayTokens[0]);
  
    for (let i = 1; i < displayTokens.length; i += 2) {
      const operator = displayTokens[i];
      const value = parseInt(displayTokens[i + 1]);
      
      switch (operator) {
        case '+':
          result += value;
          break;
        case '-':
          result -= value;
          break;
        case '*':
          result *= value;
          break;
        case '/':
          result /= value;
          break;
      }
    }
    console.log(result);
    display.textContent = result;
  });

