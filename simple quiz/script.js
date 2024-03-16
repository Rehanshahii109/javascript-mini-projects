const quizData = [
  {
      question: "What is the capital of France?",
      options: ["Paris", "Berlin", "London", "Madrid"],
      correctAnswer: "Paris"
  },
  {
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      correctAnswer: "4"
  },
  {
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      correctAnswer: "Mars"
  }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
  const questionElement = document.getElementById('question');
  const optionsElement = document.getElementById('options');
  const currentQuestion = quizData[currentQuestionIndex];

  questionElement.textContent = currentQuestion.question;
  optionsElement.innerHTML = '';

  currentQuestion.options.forEach(option => {
      const button = document.createElement('button');
      button.textContent = option;
      button.addEventListener('click', function() {
          checkAnswer(option);
      });
      optionsElement.appendChild(button);
  });
}

function checkAnswer(selectedOption) {
  const currentQuestion = quizData[currentQuestionIndex];
  if (selectedOption === currentQuestion.correctAnswer) {
      score++;
      document.getElementById('result').textContent = "Correct!";
  } else {
      document.getElementById('result').textContent = "Incorrect!";
  }
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) {
      loadQuestion();
      document.getElementById('result').textContent = "";
  } else {
      finishQuiz();
  }
}

function finishQuiz() {
  const container = document.querySelector('.container');
  container.innerHTML = `
      <h2>Quiz Finished!</h2>
      <p>Your score: ${score} out of ${quizData.length}</p>
      <button onclick="restartQuiz()">Restart</button>
  `;
}

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  loadQuestion();
}
