const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerElement = document.getElementById('answer-btns')

let shuffleQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)

function startGame() {
  console.log('started')
  startButton.classList.add('hide')
  // shuffle the quesitons by randomly sorting it
  shuffleQuestions = questions.sort(() => Math.random() - 0.5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  showQuestion(shuffleQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question

}

function selectAnswer() {

}
const questions = [
  {
    question: 'Who is awesome?',
    answers: [
      { text: 'me', correct: true },
      { text: 'Chloe', correct: false }
    ]
  }
]
