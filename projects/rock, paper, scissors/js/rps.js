function play(userChoice) {
    let UserImage = document.getElementById('userInput');
    let randomImage = document.getElementById('randomInput');
    let choices = ['rock', 'paper', 'scissors'];
    let randomChoice = choices[Math.floor(Math.random() * choices.length)];
    let result = document.getElementById('result');
    if (userChoice === 'rock' && randomChoice === 'rock') {
        UserImage.src = './img/rock.png';
        randomImage.src = './img/rock.png';
        result.innerHTML = 'Tie!';
    } 
    else if (userChoice === 'paper' && randomChoice === 'paper') {
        UserImage.src = './img/paper.png';
        randomImage.src = './img/paper.png';
        result.innerHTML = 'Tie!';
    }
    else if (userChoice === 'scissors' && randomChoice === 'scissors') {
        UserImage.src = './img/scissors.png';
        randomImage.src = './img/scissors.png';
        result.innerHTML = 'Tie!';
    }
    else if (userChoice === 'rock' && randomChoice === 'paper') {
        UserImage.src = './img/rock.png';
        randomImage.src = './img/paper.png';
        result.innerHTML = 'You lose!';
    } else if (userChoice === 'rock' && randomChoice === 'scissors') {
        UserImage.src = './img/rock.png';
        randomImage.src = './img/scissors.png';
        result.innerHTML = 'You win!';
    } else if (userChoice === 'paper' && randomChoice === 'rock') {
        UserImage.src = './img/paper.png';
        randomImage.src = './img/rock.png';
        result.innerHTML = 'You win!';
    } else if (userChoice === 'paper' && randomChoice === 'scissors') {
        UserImage.src = './img/paper.png';
        randomImage.src = './img/scissors.png';
        result.innerHTML = 'You lose!';
    } else if (userChoice === 'scissors' && randomChoice === 'rock') {
        UserImage.src = './img/scissors.png';
        randomImage.src = './img/rock.png';
        result.innerHTML = 'You lose!';
    } else if (userChoice === 'scissors' && randomChoice === 'paper') {
        UserImage.src = './img/scissors.png';
        randomImage.src = './img/paper.png';
        result.innerHTML = 'You win!';
    }
    //display the score in a new variable
    let userScore = document.getElementById('userScore');
    let randomScore = document.getElementById('randomScore');
    let userScoreValue = parseInt(userScore.innerHTML);
    let randomScoreValue = parseInt(randomScore.innerHTML);
    if (result.innerHTML === 'You win!') {
        userScoreValue++;
        userScore.innerHTML = userScoreValue;
    }
    else if (result.innerHTML === 'You lose!') {
        randomScoreValue++;
        randomScore.innerHTML = randomScoreValue;
    }
    else if (result.innerHTML === 'Tie!') {
        userScoreValue = userScoreValue;
        randomScoreValue = randomScoreValue;
    }
}