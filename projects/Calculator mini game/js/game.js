// Generate random numbers and operator, and display them
function displayNumbersAndOperator() {
    var num1 = parseFloat(Math.floor(Math.random() * 10) + 1); // Random number between 1 and 10
    var num2 = parseFloat(Math.floor(Math.random() * 10) + 1); // Random number between 1 and 10
    var operatorIndex = Math.floor(Math.random() * 4); // Random operator index: 0 for +, 1 for -, 2 for *, 3 for /
    var operator;
    var operatorImg = document.getElementById('operator');

    switch (operatorIndex) {
        case 0:
            operator = '+';
            operatorImg.src = '/projects/Calculator mini game/images/addition-plus-sign.png';
            operatorImg.alt = 'Addition';
            break;
        case 1:
            operator = '-';
            operatorImg.src = '/projects/Calculator mini game/images/minus.png';
            operatorImg.alt = 'Subtraction';
            break;
        case 2:
            operator = '*';
            operatorImg.src = '/projects/Calculator mini game/images/close.png';
            operatorImg.alt = 'Multiplication';
            break;
        case 3:
            operator = '/';
            operatorImg.src = '/projects/Calculator mini game/images/division.png';
            operatorImg.alt = 'Division';
            break;
    }

    var num1Element = document.getElementById('num1');
    var num2Element = document.getElementById('num2');
    num1Element.textContent = num1;
    num2Element.textContent = num2;

    return calculateAnswer(num1, num2, operator); // Return the correct answer
}

// Calculate the answer based on the operator
function calculateAnswer(num1, num2, operator) {
    var answer;

    switch (operator) {
        case '+':
            answer = num1 + num2;
            break;
        case '-':
            answer = num1 - num2;
            break;
        case '*':
            answer = num1 * num2;
            break;
        case '/':
            answer = num1 / num2;
            break;
    }

    return answer;
}

// Check the user's answer
function checkAnswer() {
    var userAnswerElement = document.getElementById('userAnswer');
    var resultElement = document.getElementById('result');
    var userAnswer = parseFloat(userAnswerElement.value);
    var num1 = parseFloat(document.getElementById('num1').textContent);
    var num2 = parseFloat(document.getElementById('num2').textContent);
    var operator = document.getElementById('operator').alt;
    var correctAnswer = calculateAnswer(num1, num2, operator);

    var tolerance = 0.0001; // Tolerance threshold for comparison

    if (Math.abs(userAnswer - correctAnswer) <= tolerance) {
        resultElement.textContent = 'True';
    } else {
        resultElement.textContent = 'False';
    }

    // Clear the input field
    userAnswerElement.value = '';
    displayNumbersAndOperator();
}

// Initialize the game
displayNumbersAndOperator();

