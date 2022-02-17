const quizData = [
    {
        question: "Pembangunan infrastruktur seperti jalan raya merupakan fungsi pajak dari?",
        a: "Penerimaan (Budgetair)",
        b: "Mengatur (Regulerend)",
        c: "PRedistribusi",
        d: "Stabilisasi",
        correct: "a",
    },
    {
        question: "Atas pemotongan pajak pada kasus di atas sesuai dengan asas pemungutan pajak?",
        a: "Asas domisili",
        b: "Asas Sumber",
        c: "Asas Kebangsaan",
        d: "Asas Campuran",
        correct: "b",
    },
    {
        question: "Yang bukan merupakan penghasilan yang dikenakan PPh Pasal 21 adalah....?",
        a: "Tunjangan Perumahan sebesar Rp3.500.000,00 sebulan yang diterima oleh Sabian",
        b: "Honorarium sebagai pembawa acara sebesar Rp500.000,00 yang diterima Hansel",
        c: "Iuran Pensiun senilai Rp550.000,00 yang dibayar sendiri oleh Sakil",
        d: "Hadiah berupa Laptop senilai Rp14.000.000,00 yang diperoleh Rayhan setelah memenangkan kompetisi mobile legend",
        correct: "c",
    },
    {
        question: "PT. Almira sudah dikukuhkan sebagai PKP dengan usaha industri tekstil menyumbang 15.000 lembar selimut kepada korban gempa bumi, maka?",
        a: "terutang PPN karena penyerahan sumbangan ini sekaligus sebagai sarana promosi",
        b: "tidak terutang PPN karena dimaksudkan untuk tujuan kemanusiaan",
        c: "tidak terutang PPN sepanjang dilakukan secara sukarela",
        d: "terutang PPN karena yang disumbangkan berupa BKP",
        correct: "d",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})
