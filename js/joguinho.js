const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function createGame() {
  const shuffledAlphabet = shuffle(alphabet.split(''));
  const gameContainer = document.getElementById('game-container');

  shuffledAlphabet.forEach(letter => {
    const letterDiv = document.createElement('div');
    letterDiv.classList.add('letter');
    letterDiv.textContent = letter;
    gameContainer.appendChild(letterDiv);

    letterDiv.addEventListener('click', () => {
      if (letterDiv.textContent === letterDiv.dataset.match) {
        letterDiv.classList.add('matched');
        const allMatched = [...document.querySelectorAll('.matched')];
        if (allMatched.length === alphabet.length) {
          alert('Parabéns! Você encontrou todos os pares!');
        }
      }
    });
  });

  const matchedLetters = shuffle([...shuffledAlphabet]);
  shuffledAlphabet.forEach((letter, index) => {
    const letterDiv = document.createElement('div');
    letterDiv.classList.add('letter');
    letterDiv.textContent = matchedLetters[index];
    letterDiv.dataset.match = letter;
    gameContainer.appendChild(letterDiv);
  });
}

createGame();