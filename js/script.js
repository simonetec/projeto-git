var words = [
  { image: "gato.jpg", answer: "gato" },
  { image: "cachorro.jpg", answer: "cachorro" },
  { image: "livro.jpg", answer: "livro" },
  // Adicione mais objetos conforme necessário
];

function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function displayRandomWord() {
  var randomWord = getRandomWord();
  document.getElementById("word-image").src = randomWord.image;
  document.getElementById("answer").value = "";
  document.getElementById("result").innerText = "";
}

function checkAnswer() {
  var answer = document.getElementById("answer").value.toLowerCase();
  var correctAnswer = document.getElementById("word-image").alt;
  var resultContainer = document.getElementById("result");

  if (answer === correctAnswer) {
      resultContainer.innerText = "Correto! Parabéns!";
      // Exibir outra palavra após alguns segundos
      setTimeout(displayRandomWord, 2000);
  } else {
      resultContainer.innerText = "Incorreto. Tente novamente.";
  }
}

// Exibir uma palavra aleatória quando a página for carregada
window.onload = displayRandomWord;