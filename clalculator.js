// Selecting elements
const input = document.querySelector('input');
const buttons = document.querySelectorAll('button');

// Adding event listener to each button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.textContent;
        // Handling different button actions
        switch(buttonText) {
            case 'c':
                input.value = '';
                break;
            case '=':
               
                    input.value = eval(input.value);
                
                break;
            case 'DEL':
                input.value = input.value.slice(0, -1);
                break;
            case '+/-':
                if (input.value !== '' && input.value !== '0') {
                    input.value = -parseFloat(input.value);
                }
                break;    
            default:
                input.value += buttonText;
        }
    });
});
