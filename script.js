// // pick a random number between 1 and 100
// let randomNumber = Math.floor(Math.random() * 100) + 1;
// let attempts = 0;

// // get elements from the page
// let guessInput = document.getElementById("guessInput");
// let guessBtn = document.getElementById("guessBtn");
// let message = document.getElementById("message");
// let attemptsText = document.getElementById("attempts");
// let restartBtn = document.getElementById("restartBtn");

// // runs when the user clicks the Guess button
// guessBtn.addEventListener("click", function() {

//     let userGuess = Number(guessInput.value);

//     // check if input is empty or not a number
//     if (guessInput.value === "" || isNaN(userGuess)) {
//         message.textContent = "Please enter a valid number.";
//         return;
//     }

//     attempts = attempts + 1;
//     attemptsText.textContent = "Attempts: " + attempts;

//     if (userGuess === randomNumber) {
//         message.textContent = "Correct! The number was " + randomNumber;
//         guessBtn.disabled = true;
//         guessInput.disabled = true;
//         restartBtn.style.display = "inline-block";
//     } else if (userGuess < randomNumber) {
//         message.textContent = "Too low. Try again.";
//     } else {
//         message.textContent = "Too high. Try again.";
//     }

//     guessInput.value = "";
// });

// // runs when the user clicks Restart
// restartBtn.addEventListener("click", function() {
//     randomNumber = Math.floor(Math.random() * 100) + 1;
//     attempts = 0;
//     attemptsText.textContent = "Attempts: 0";
//     message.textContent = "";
//     guessBtn.disabled = false;
//     guessInput.disabled = false;
//     restartBtn.style.display = "none";
// });


//--------------------------------------------------------------------------
//                               New Game
//--------------------------------------------------------------------------

randomNumber=Math.floor(Math.random() * 100) + 1;

const guessInput=document.getElementById("txtInputNumber");

answerbar=document.getElementById("lblMessage");

console.log(answerbar);





function checkGuess() {
    const NewguessInput=parseInt(guessInput.value); 

    if (isNaN(NewguessInput) || NewguessInput < 1 || NewguessInput > 100) {
        answerbar.textContent = "Please enter a valid number between 1 and 100.";
        return;
    }

    else if (NewguessInput === randomNumber) {
       answerbar.textContent = "Congratulations! You guessed the correct number: " + randomNumber;
    }

    else if (NewguessInput < randomNumber) {
        answerbar.textContent = "Too low! Try again.";
    }

    else {
        answerbar.textContent = "Too high! Try again.";
    }

}