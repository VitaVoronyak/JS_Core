//sections
const startSection = document.querySelector('.startContainer');
const gameSection = document.querySelector('#gameContainer')
const scoreSection = document.querySelector('#scoreContainer');
const endSection = document.querySelector('#endContainer');
//buttons
const buttonStart = document.querySelector('.btnPlay');
const buttonScore = document.querySelector('.scoreBtn');
const buttonHome = document.querySelector('.homeBtn');
const saveScoreBtn = document.querySelector('#saveScoreBtn');
const playAgainBtn = document.querySelector('#playAgain');

const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
//scores
const scoreText = document.querySelector('#score');
const finalScore = document.querySelector('#finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');
const progressBarFull = document.querySelector('#progressBarFull');
const progressText = document.querySelector('#progressText');

const username = document.querySelector('#username');


let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: 'Fill in the missing numbers:_,2,6,12,20,_?',
        choice1: '1,25',
        choice2: '1.30',
        choice3: '0.25',
        choice4: '0.30',
        answer: 4,
    },
    {
        question: "The horses are running a race. If the horse in last place passes up the horse in third place, what place is the horse now?",
        choice1: "3rd",
        choice2: "2nd",
        choice3: "1st",
        choice4: "4th",
        answer: 1,
    },
    {
        question: "The day before yesterday was Monday and the day after tomorrow is Friday. What is today? ",
        choice1: "Sunday",
        choice2: "Saturday",
        choice3: "Wednesday",
        choice4: "Thursday",
        answer: 3,
    },
    {
        question: "You need me to live, but if you have to much of me, you'll die. What am i?",
        choice1: "Water",
        choice2: "Air",
        choice3: "Secrets",
        choice4: "Silence",
        answer: 1,
    },
    {
        question: "I am the color C and i help to make green. What color am i?",
        choice1: "Yellow",
        choice2: "Red",
        choice3: "Blue",
        choice4: "Black",
        answer: 3,
    },
    {
        question: "What is the next number in the pattern: 16, 25, 36, 49,_",
        choice1: "54",
        choice2: "64",
        choice3: "77",
        choice4: "72",
        answer: 2,
    },
    {
        question: "Imagine a triangle with four triangles inside it. How many triangles are there total?",
        choice1: "3",
        choice2: "5",
        choice3: "4",
        choice4: "6",
        answer: 2,
    },
    {
        question: "I come in many shapes and sizes, i create a valuable resource, but you can't always see me. What am i?",
        choice1: "A cloud",
        choice2: "An oil rig",
        choice3: "Coal mine",
        choice4: "A field",
        answer: 1,
    },
    {
        question: "Which of the following has the most weight?",
        choice1: "A pound of pencils",
        choice2: "A pound of paper",
        choice3: "A paund of leaves",
        choice4: "All of the above",
        answer: 4,
    },
    {
        question: "What is the next letter in this pattern: M,T,W,T,F,_?",
        choice1: "O",
        choice2: "E",
        choice3: "S",
        choice4: "A",
        answer: 3,
    },
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 10;


startGame = () => {
    questionCounter = 0;
    score = 0;
    scoreText.innerHTML = score;
    availableQuestions = [...questions];
    getNewQuestion();
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);
        score = localStorage.getItem('mostRecentScore');
        finalScore.innerText = score;
        username.value= '';
        gameSection.classList.add('hide');
        endSection.classList.remove('hide');
       }

    questionCounter++;

    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`;
    
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionsIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion();

        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}


buttonStart.addEventListener('click', () => {
    startSection.classList.add('hide');
    gameSection.classList.remove('hide');
    startGame();
});


const highSScores = JSON.parse(localStorage.getItem('highScores')) || [];
const MAX_HIGH_SCORES = 5;
const highScoresList = document.querySelector('#highScoresList');
let recentScore = 0;


saveHighScore = e => {
    e.preventDefault();
    recentScore = localStorage.getItem('mostRecentScore');

    const score = {
        score: recentScore,
        name: username.value
    }

    highSScores.push(score)
    highSScores.sort((a,b) => {
        return b.score - a.score
    })

    highSScores.splice(5)
    localStorage.setItem('highScores', JSON.stringify(highSScores))
} 

buttonScore.addEventListener('click', () => {
    highScoresList.innerHTML =
    highSScores.map(score => {
        return `<li class="high-score">${score.name} - ${score.score}</li>`
    }).join("")
    startSection.classList.add('hide');
    scoreSection.classList.remove('hide');
})

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value
})

saveScoreBtn.addEventListener('click', () =>{   
    endSection.classList.add('hide');
    startSection.classList.remove('hide');
})

playAgainBtn.addEventListener('click', () =>{
    endSection.classList.add('hide');
    startSection.classList.remove('hide');
})

buttonHome.addEventListener('click', () =>{
    scoreSection.classList.add('hide');
    startSection.classList.remove('hide');
})

