const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-btns')

let shuffleQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

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
  resetState()
  showQuestion(shuffleQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffleQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }

}


const questions = [
  {
    question: 'When a user views a page containing a JavaScript program, which machine actually executes the script?',
    answers: [
      { text: 'The User/s machine running a Web browser', correct: true },
      { text: 'The Web server', correct: false }
    ]
  },
  {
    question: 'Which of the following is not a valid JavaScript variable name?',
    answers: [
      { text: '2names', correct: true },
      { text: '_first_and_last_names', correct: false },
      { text: 'FirstAneLast', correct: false },
      { text: 'None of the above', correct: false }
    ]
  },
  {
    question: 'What is the correct JavaScript syntax to write "Hello World"?',
    answers: [
      { text: 'document.write("Hello World")', correct: true },
      { text: 'System.out.println("Hello World")', correct: false }
    ]
  },
  {
    question: 'Which is the correct way to write a JavaScript array?',
    answers: [
      { text: 'var txt = new Array("tim","kim","jim")', correct: true },
      { text: 'var txt = new Array(1:"tim",2:"kim",3:"jim")', correct: false }
    ]
  },
  {
    question: 'What does the <noscript> tag do?',
    answers: [
      { text: 'Enclose text to be displayed by non-JavaScript browsers.', correct: true },
      { text: 'Prevents scripts on the page from executing.', correct: false }
    ]
  }
]
