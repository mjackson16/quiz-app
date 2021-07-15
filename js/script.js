const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const aAnswer = document.getElementById('a');
const bAnswer = document.getElementById('b');
const cAnswer = document.getElementById('c');
const dAnswer = document.getElementById('d');
const quizContainer = document.querySelector('.quiz-container');
const answerEls = document.querySelectorAll('.answer');

const submitBtn = document.getElementById('submit');

const quizData = [
    {
        question: 'Inside which HTML element do we put the JavaScript?',
        a: '<script>',
        b: '<js>',
        c: '<scripting>',
        d: '<javascript>',
        correct: 'a',
    },
    {
        question:
            'Which of the following will write the message “Hello DataFlair!” in an alert box?',
        a: 'alertBox(“Hello DataFlair!”);',
        b: 'alert(Hello DataFlair!);',
        c: 'msgAlert(“Hello DataFlair!”);',
        d: 'alert(“Hello DataFlair!”);',
        correct: 'd',
    },
];

let currentQuestion = 0;
let answerChoice;

let score = 0;

function loadQuiz() {
    const currentQuizData = quizData[currentQuestion];

    questionEl.innerHTML = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

    answerChoice = getChecked();

    if (answerChoice === currentQuizData.correct) {
        score++;
    }
}

function getChecked() {
    let answer;

    for (const answerEl of answerEls) {
        if (answerEl.checked) {
            return answerEl.id;
        }
    }
    return undefined;
}

loadQuiz();

submitBtn.addEventListener('click', () => {
    //Store selected choice in answer
    const answer = getChecked();

    //Check to see if any choice is selected is 
    if (answer) {
        if (answer === quizData[currentQuestion].correct) {
            score++;
        }

        //Deselect choice
         for (const answerEl of answerEls) {
             if (answerEl.checked) {
                 answerEl.checked = false;
             }
         }
         
        currentQuestion++;

        if (currentQuestion < quizData.length) {
            loadQuiz();
        } else {
            quizContainer.innerHTML= `<h2>You've scored ${score} out of ${quizData.length}!<h2>`;
        }
    }
});
