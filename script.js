document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button');
    const displayText = document.querySelector('.display');
    let currentInput = '';
    let previousInput = '';
    let operator = '';


    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            const buttonText = event.target.textContent;
            displayText.textContent += event.target.textContent;
            if(button.textContent === "C") {
                currentInput = '';
                previousInput = '';
                operator = '';
                displayText.textContent = ""
            }
            else if (buttonText === '=') {
                if (currentInput !== '' && previousInput !== '' && operator !== '') {
                    currentInput = calculate(previousInput, currentInput, operator);
                    displayText.textContent = currentInput;
                    previousInput = '';
                    operator = '';
                }

            }
         else if (['+', '-', '*', '/'].includes(buttonText)) {
            // Store the operator and move the current input to previous input
            if (currentInput !== '') {
                previousInput = currentInput;
                currentInput = '';
                operator = buttonText;
            }
        } else { // Append the number to the current input 
        currentInput += buttonText; 
        display.textContent = currentInput; 
          }
        });
      
    });

   
    
});

function calculate(num1, num2, op) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    
    switch (op) {
        case '+':
            return (num1 + num2).toString();
        case '-':
            return (num1 - num2).toString();
        case '*':
            return (num1 * num2).toString();
        case '/':
            return (num2 !== 0) ? (num1 / num2).toString() : 'Error';
        default:
            return '';
    }
}
