const quizData = [
    {
        question: 'Who is the president of nigeria?',
        a: 'Muhammad Buhari',
        b: 'Aburrasheed',
        c: 'Musa Haro',
        d: 'Good Luck Jonathan',
        correct: 'a'
    },
    {
        question: 'What HTML Stand For?',
        a: 'home Maker Language',
        b: 'Hypertext Markup Language',
        c: 'Cascading Style Sheet',
        d: 'None of the above',
        correct: 'b'
    },
    {
        question: 'Who create python?',
        a: 'Abba',
        b: 'Abdurrasheed',
        c: 'Anas',
        d: 'None of the above',
        correct: 'd'
    }
]

const btn = document.getElementById("btn")
const questionEl = document.getElementById('question')
const radioEl = document.getElementsByName('answer')
const quizHeader = document.querySelector('.quiz-container')

const aText = document.getElementById("a-text")
const bText = document.getElementById("b-text")
const cText = document.getElementById("c-text")
const dText = document.getElementById("d-text")


let currentQuestion = 0;
let score = 0;


loadQuiz();

btn.addEventListener('click', ()=>{
    const answer = getSelectedAnswer();
    console.log(answer)
    let currentQuizQuestion = quizData[currentQuestion];
    if (answer) {
        console.log(answer)
        if (answer === currentQuizQuestion.correct) {
            score++;
        }
        currentQuestion++;
        if (currentQuestion < quizData.length) {
            loadQuiz();
        }else {
            quizHeader.innerHTML = `
                <h2>You have correctly ${score}/${quizData.length} question.</h2>
                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})


function loadQuiz () {
    deSelectAnswer()
    let currentQuizQuestion = quizData[currentQuestion];
    questionEl.innerText = currentQuizQuestion.question
    aText.innerText = currentQuizQuestion.a;
    bText.innerText = currentQuizQuestion.b;
    cText.innerText = currentQuizQuestion.c;
    dText.innerText = currentQuizQuestion.d;
}


function getSelectedAnswer () {
    let answer = undefined;
    radioEl.forEach((answerEl)=>{
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

function deSelectAnswer () {
    radioEl.forEach((answerEl)=>{
        answerEl.checked = false
    })
}