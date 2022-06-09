const quizData = [
    {
        question: 'Siapa presiden Indonesia yang pertama?',
        a: 'Ir. Soekarno',
        b: 'Megawati',
        c: 'Moh Yamin',
        d: 'Joko Widodo',
        correct: 'a'
    },
    {
        question: 'Indonesia merdeka pada tahun?',
        a: '1946',
        b: '1942',
        c: '1944',
        d: '1945',
        correct: 'd'
    },
    {
        question: 'Siapa presiden Indonesia sekarang?',
        a: 'Ir. Soekarno',
        b: 'Megawati',
        c: 'Moh Yamin',
        d: 'Joko Widodo',
        correct: 'd'
    },
    {
        question: 'HTML adalah singkatan dari?',
        a: 'Hypertext Markup Language',
        b: 'Helikopter Tiba Mendarat Lapangan',
        c: 'Cascading Style Sheet',
        d: 'Jason Object Notations',
        correct: 'a'
    },
    {
        question: 'Pada tahun berapa javascript diluncurkan?',
        a: '1996',
        b: '1997',
        c: '1998',
        d: '1995',
        correct: 'd'
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

//menampilkan kuis
loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

//memilih jawaban yg benar
function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

//digunakan untuk deselect jawaban
function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

//digunakan untuk berlanjut ke pertanyaan selanjutnya, jika jawaban benar maka score bertambah 1
submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>`;
        }
    }
});