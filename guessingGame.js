// Assigns random number between 1 and 100 to randomNumber
var randomNumber = Math.floor(Math.random() * 100) + 1;


var guesses = document.querySelector('.guesses');
var progress = document.querySelector('.progress');
var lastResult = document.querySelector('.lastResult');

var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');

var guessCount = 1;
var resetButton;
guessField.focus();

function checkGuess() {
	var userGuess = Number(guessField.value);
	if (guessCount === 1) {
		guesses.textContent = 'Previous guesses: ';
		guesses.textContent += userGuess;
	}else
	{
		guesses.textContent += ', ' + userGuess;
	}
	
	if (userGuess === randomNumber) {
		lastResult.textContent = 'Congratulations! You guessed it right in ' + guessCount + ' tries!';
		lastResult.style.backgroundColor = 'green';
		progress.textContent = '';
		setGameOver();
	} else if (guessCount === 10) {
		lastResult.textContent = '!!!GAME OVER!!!';
		lastResult.style.backgroundColor = 'red';
		setGameOver();
	} else {
	lastResult.textContent = 'Nope';
	lastResult.style.backgroundColor = 'red';
	progress.textContent = 10 - guessCount + ' guesses left.';
	//lowOrHi.style.backgroundColor = 'yellow';
	if(userGuess < randomNumber) {
		lastResult.textContent = lastResult.textContent + ' - too low.';
		
	} else if(userGuess > randomNumber) {
	lastResult.textContent = lastResult.textContent + ' - too high.';
	}
}

guessCount++;
guessField.value = '';
guessFile.focus()
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Start new game';
  document.body.appendChild(resetButton);
  resetButton.addEventListener('click', resetGame);
}

function resetGame() {
  guessCount = 1;

  var resetParas = document.querySelectorAll('.resultParas p');
  for (var i = 0 ; i < resetParas.length ; i++) {
    resetParas[i].textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();

  lastResult.style.backgroundColor = 'white';

  randomNumber = Math.floor(Math.random() * 100) + 1;
}