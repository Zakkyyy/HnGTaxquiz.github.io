const quizData = [
    {
        question: "PT. Mantan Selalu Indah melakukan penghitungan kembali Pajak Masukan yang telah dikreditkan atas pembelian 3 unit kendaraan distribusi yang digunakan untuk distribusi peralatan rumah tangga dan beras Kendaraan dibeli pada tahun 2019 dengan harga seluruh kendaraan sebesar Rp 600.000.000,00 dan Pajak Masukannya sebesar Rp 60.000.000,00 telah dikreditkan dalam SPT Masa PPN Maret 2019. Pada tahun 2020 telah dikeluarkan biaya perawatan dan service berkenaan dengan kendaraan tersebut sebesar Rp 6.000.000. Jumlah peredaran tahun 2020 sebesar Rp 60.000.000.000,00 yang terdiri dari penyerahan peralatan rumah tangga Rp 54.000.000.000,00 dan penyerahan beras sebesar Rp 6.000.000.000,00. Hitung Pajak kembali pajak masukan yang seharusnya dapat dikreditkan?",
        a: "Menambah Pajak Masukan sebesar Rp6.750.000",
        b: "Mengurangi Pajak Masukan sebesar Rp750.000",
        c: "Mengurangi Pajak Masukan sebesar Rp6.750.000",
        d: "Menambah Pajak Masukan sebesar Rp750.000",
        correct: "b",
    },
    {
        question: "Penghapusan NPWP orang yang meninggal dunia dilakukan dengan cara?",
        a: "Pemeriksaan",
        b: "Jabatan",
        c: "Verifikasi",
        d: "Secara Langsung",
        correct: "c",
    },
    {
        question: "Books, Record, or basic bookkeeping documents must be kept in Indonesia for at least?",
        a: "5 years",
        b: "10 years",
        c: "20 Years",
        d: "15 years",
        correct: "b",
    },
    {
        question: "Lohe Lohe International School membayar seorang native speaker, Mr. James Brick, seorang Warga Negara Inggris atas kontrak mengajar selama 1 bulan sebesar US $ 8.000. Mr. James Brick berada di Indonesia selama 2 bulan dan langsung kembali ke Inggris setelah kontrak habis. Dalam hal Kurs KMK ditetapkan sebesar 1 US$ = Rp10.000, berapa PPh yang dipotong?",
        a: "Rp16.000.000",
        b: "Rp4.000.000",
        c: "Rp1.600.000",
        d: "Jawaban a, b, dan c semua salah",
        correct: "a",
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
