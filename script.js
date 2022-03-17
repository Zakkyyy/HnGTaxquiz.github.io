const quizData = [
    {
        question: "Wajib Pajak Menerima SKPKB sebesar Rp100.000.000 dan berdasarkan pembahasan akhir hasil pemeriksaan tidak menyetujui seluruhnya, Wajib Pajak mengajukan permohonan keberatan atas SKPKB tersebut. Apabila DJP menolak seluruh permohonan keberatan pada 5 Februari 2022 dan WP tidak mengajukan banding, maka WP akan dikenakan sanksi denda sebesar?",
        a: "Rp50.000.000",
        b: "Rp60.000.000",
        c: "Rp100.000.000",
        d: "Rp30.000.000",
        correct: "d",
    },
    {
        question: "PT Sewa Ruang menyewakan ruangan-ruangan yang ada di dalam Graha Bogor. Disamping itu PT Sewa Ruang juga melakukan pekerjaan pembersihan gedung di Menara Satu (milik PT Menara), jasa outsourcing petugas kebersihan di Menara Dua (milik PT Kebersihan). Atas penghasilan ini PT Sewa Ruang dipotong PPh Pasa 4 ayat (2) dan PPh Pasal 23. Untuk dapat menghitung PPh Badan maka...",
        a: "Wajib pajak tidak perlu melakukan pembukuan terpisah",
        b: "Wajib pajak harus menyelenggarakan pembukuan secara terpisah",
        c: "Pembukuan hanya dilakukan untuk penghasilan yang merupakan objek pajak tidak final",
        d: "Pemenuhan kewajiban pajak atas penghasilan final cukup dengan pencatatan",
        correct: "a",
    },
    {
        question: "Manakah yang termasuk penyerahan yang terutang PPN?",
        a: "Pak Budi menjual 50kg beras kepada Toko Maju jaya pada tahun 2019",
        b: "Tuan Maxwell menjual 10 unit televisi di Inggris kepada Tuan Bob",
        c: "PT Gunung Agung menjual 200 unit kulkas kepada distributor PT Distri Jaya Abadi (penjualan penyerahan terjadi di Jakarta)",
        d: "Toko Abadi dengan omzet 500 juta dan memilih untuk tidak dikukuhkan sebagai Pengusaha Kena Pajak (PKP), menjual 8 unit laptop kepada konsumen (penyerahan terjadi di Bandung)",
        correct: "c",
    },
    {
        question: "Pak Aris merupakan pedagang grosiran consumer goods. Didirikan pada februari 2019, omset penjualan Pak Aris pada tahun 2019 adalah sebagai berikut: Rp400 Juta pada Maret, Rp500 Juta pada April, dan Rp4,85 Miliar pada Mei. Berdasarkan pernyataan pada soal, maka Pak Aris harus mendaftarkan diri untuk dikukuhkan sebagai PKP paling lambat pada?",
        a: "Awal Maret, ketika Pak Aris sudah mendapatkan penghasilan.",
        b: "Akhir April, ketika penghasilan Pak Aris secara kumulatif senilai Rp900 Juta",
        c: "Ketika usaha mulai didirikan, yaitu pada Februari 2019",
        d: "Paling lambat akhir bulan berikutnya yaitu 30 Juni, ketika omset peredaran melebihi Rp4,8 Miliar pada suatu masa pajak",
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
