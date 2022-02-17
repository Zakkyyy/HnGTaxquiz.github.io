const quizData = [
    {
        question: "Pembangunan infrastruktur seperti jalan raya merupakan fungsi pajak dari?",
        a: "Penerimaan (Budgetair)",
        b: "Mengatur (Regulerend)",
        c: "Redistribusi",
        d: "Stabilisasi",
        correct: "a",
    },
    {
        question: "Dibawah ini Siapakah yang diperkenankan tidak menyelenggarakan pembukuan?",
        a: "Wajib Pajak Orang Pribadi yang melakukan kegiatan usaha/pekerjaan bebas",
        b: "Wajib Pajak Orang Pribadi yang tidak melakukan pekerjaan bebas/kegiatan usaha",
        c: "Wajib Pajak Orang Pribadi yang melakukan kegiatan usaha/pekerjaan bebas yang peredaran brutonya lebih dari 4,8 milyar/pertahun.",
        d: "Wajib pajak badan",
        correct: "b",
    },
    {
        question: "Manakah yang bukan merupakan sebab-sebab dilakukannya pembetulan ketetapan pajak?",
        a: "Kesalahan hitung",
        b: "Kesalahan tulis",
        c: "Kesalahan tanda tangan",
        d: "Kekeliruan dalam penerapan tarif",
        correct: "c",
    },
    {
        question: "Scansindo, PTE, Ltd adalah perusahaan yang berdomisili di 535 Bedok Reservoir Road Singapura dan bergerak dalam bidang usaha pedagang perantara produk kopi (coffee broker). PT. Aneka Coffee adalah perusahaan yang tinggal di Krian Sidoarjo Indonesia dan bergerak dalam bidang manufaktur biji kopi tanpa merk. Dalam memasarkan produknya di Singapura, PT. Aneka Coffee memanfaatkan jasa Scansindo, Pte, Ltd. Jika dalam kewajiban pemotongan PPh Pasal 26, Perusahaan Scansindo, Pte, Ltd tidak menyertakan formulir Directorate General of Taxes (Form DGT) atau Ceritificate of Resicedence (COR), maka atas penghasilan yang diterima oleh Perusahaan Scansindo, Pte, Ltd di potong PPh Pasal 26 sebesar 20%. Atas pemotongan pajak pada kasus di atas sesuai dengan asas pemungutan pajak
        ?",
        a: "Asas domisili",
        b: "Asas Sumber",
        c: "Asas Kebangsaan",
        d: "Asas Campuran,
        correct: "b",
    },
    {
        question: "Rayhan Hansel (belum memiliki NPWP), seorang novelis membuat Novel “Misteri Terowongan Buntu” yang menjadi Best Seller pada tahun 2014. Pada bulan Maret 2015, PT. Pustaka Aman Jaya, perusahaan penerbit memberikan royalty kepada Rayhan Hansel sebesar Rp430.000.000. PPh yang harus dipotong perusahaan pada saat memberikan royalty kepada Rayhan Hansel adalah...?",
        a: "Rp75.500.000",
        b: "Rp64.500.000",
        c: "Rp43.000.000",
        d: "Jawaban a, b, dan c semua salah",
        correct: "d",
    },
    {
        question: "Pada bulan April 2018, PT. Bangkit Maju Bersatu menjual sebidang tanah asset perusahaan kepada Gunawan Handoko. Sesuai dengan Akta Jual Beli, tanah tersebut dijual dengan harga sebesar Rp400.000.000. Sedangkan menurut SPPT PBB, NJOP atas tanah tersebut sebesar Rp350.000.000. PPh Pengalihan Hak atasTanah dan/atauBangunanatas transaksi tersebut adalah...?",
        a: "Rp5.000.000",
        b: "Rp8.750.000",
        c: "Rp10.000.000",
        d: "Jawaban a, b, dan c semua salah",
        correct: "c",
    },
    {
        question: "Pada bulan Desember 2016, PT. Krisna Merdeka sebuah pesawat terbang milik maskapai internasional yang memiliki BUT di Indonesia. Dalam perjanjian charter tersebut disepakati bahwa nilai yang harus dibayar PT. Krisna Merdeka sesuai kontrak sebesar Rp700.000.000. Atas transaksi tersebut, PT. Krisna Merdeka wajib memotong PPh sebesar...?",
        a: "Rp8.400.000",
        b: "Rp12.600.000",
        c: "Rp18.480.000",
        d: "Rp3.080.000",
        correct: "c",
    },
    {
        question: "Lohe Lohe International School membayar seorang native speaker, Mr. James Brick, seorang Warga Negara Inggris atas kontrak mengajar selama 1 bulan sebesar US $ 8.000. Mr. James Brick berada di Indonesia selama 2 bulan dan langsung kembali ke Inggris setelah kontrak habis. Dalam hal Kurs KMK ditetapkan sebesar 1 US$ = Rp10.000, berapa PPh yang dipotong?",
        a: "Rp16.000.000",
        b: "Rp4.000.000",
        c: "Rp1.600.000",
        d: "Jawaban a, b, dan c semua salah",
        correct: "a",
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
        question: "Sabian Shaquille, seorang PKP yang melakukan usaha perdagangan lemari berkas, pada tanggal 25 Agustus 2015 menandatangani kontrak pembuatan lemari berkas dan menerima uang muka sebesar Rp 20 juta dari CV. Biang Jaya. Total kontrak sebesar Rp 100 juta dan menurut kontrak lemari berkas akan diserahkan tanggal 24 September 2015. Pada tanggal 10 September 2015 karena kondisi tertentu disepakati kontrak dibatalkan dan uang muka dikembalikan. Pernyataan yang BENAR?",
        a: "Sabian Shaquille menerbitkan Faktur Pajak dengan DPP sebesar Rp 20 juta tanggal 25 Agustus 2015",
        b: "Sabian Shaquille harus memiliki bukti dari CV. Biang Jaya yang menyatakan transaksi dibatalkan",
        c: "Tetap melaporkan Faktur Pajak dengan mencantumkan nilai 0 (nol) pada kolom DPP dan PPN",
        d: "Jawaban a, b, dan c semua benar",
        correct: "d",
    },
    {
        question: "PT. Almira sudah dikukuhkan sebagai PKP dengan usaha industri tekstil menyumbang 15.000 lembar selimut kepada korban gempa bumi, maka?",
        a: "terutang PPN karena penyerahan sumbangan ini sekaligus sebagai sarana promosi",
        b: "tidak terutang PPN karena dimaksudkan untuk tujuan kemanusiaan",
        c: "tidak terutang PPN sepanjang dilakukan secara sukarela",
        d: "terutang PPN karena yang disumbangkan berupa BKP",
        correct: "d",
    },
    {
        question: "Bendahara Dinas Pekerjaan Umum Pemkot Surabaya membayarkan jasa cetering sebesar Rp 880.000,00 ke Rumah Makan Prima Rasa, atas pembayaran ini.....?",
        a: "dipungut PPN oleh bendahara",
        b: "dipungut PPN oleh Rumah Makan Prima Rasa karena jumlah pembayaran tidak lebih dari Rp 1 Juta",
        c: "tidak dipungut PPN",
        d: "jawaban a, b, dan c semua salah",
        correct: "c",
    },
    {
        question: "PT. Mantan Selalu Indah melakukan penghitungan kembali Pajak Masukan yang telah dikreditkan atas pembelian 3 unit kendaraan distribusi yang digunakan untuk distribusi peralatan rumah tangga dan beras Kendaraan dibeli pada tahun 2019 dengan harga seluruh kendaraan sebesar Rp 600.000.000,00 dan Pajak Masukannya sebesar Rp 60.000.000,00 telah dikreditkan dalam SPT Masa PPN Maret 2019. Pada tahun 2020 telah dikeluarkan biaya perawatan dan service berkenaan dengan kendaraan tersebut sebesar Rp 6.000.000. Jumlah peredaran tahun 2020 sebesar Rp 60.000.000.000,00 yang terdiri dari penyerahan peralatan rumah tangga Rp 54.000.000.000,00 dan penyerahan beras sebesar Rp 6.000.000.000,00. Hitung Pajak kembali pajak masukan yang seharusnya dapat dikreditkan?",
        a: "Menambah Pajak Masukan sebesar Rp6.750.000",
        b: "Mengurangi Pajak Masukan sebesar Rp750.000",
        c: "Mengurangi Pajak Masukan sebesar Rp6.750.000",
        d: "Menambah Pajak Masukan sebesar Rp750.000",
        correct: "b",
    },
    {
        question: "Apabila pada masa September 2015 Peredaran Bruto CV. Aku Sakit (dikukuhkan PKP menggunakan pedoman) telah mencapai Rp 1,8 Milyar, maka:?",
        a: "Masa Oktober 2015 sudah tidak boleh lagi mengunakan PPN 1111 DM",
        b: "Masa September 2015 sudah tidak boleh lagi mengunakan PPN 1111 DM",
        c: "Masa Januari 2016 sudah tidak boleh lagi menggunakan PPN 111 DM",
        d: "Masih boleh menggunakan PPN 1111 DM sampai Peredaran Bruto mencapai Rp 4,8 Milyar",
        correct: "a",
    },
    {
        question: "PT Herdiana Sukendra Jaya Menyampaikan SPT Tahunan PPh Badan Tahun Pajak 2017 (Tahun buku = Tahun Kalender) dengan status Lebih Bayar pada tanggal 19 Januari 2020 secara langusng ke KPP, Wajib pajak mengajukan permohonan pengembalian atas kelebihan pembayaran pajak tersebut. sesuai ketentuan perpajakan maka?",
        a: "KPP dapat menolak SPT tersebut",
        b: "Memberitahukan bahwa SPT dianggap tidak disampaikan",
        c: "Menerbitkan SKPKB atas keterlambatan pelaporan",
        d: "Menerima SPT dan melakukan pemeriksaan guna menyelesaikan permohonan WP tersebut dalam jangka waktu 12 Bulan",
        correct: "d",
    },
    {
        question: "Wajib Pajak Menerima SKPKB sebesar Rp100.000.000 dan berdasarkan pembahasan akhir hasil pemeriksaan tidak menyetujui seluruhnya, Wajib Pajak mengajukan permohonan keberatan atas SKPKB tersebut. Apabila DJP menolak seluruh permohonan keberatan pada 5 Februari 2022 dan WP tidak mengajukan banding, maka WP akan dikenakan sanksi denda sebesar?",
        a: "Rp50.000.000",
        b: "Rp60.000.000",
        c: "Rp100.000.000",
        d: "Rp30.000.000",
        correct: "d",
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
        question: "Surat Paksa disampaikan ke penanggung pajak dalam hal?",
        a: "7 hari setelah jatuh tempo surat teguran",
        b: "Setelah lewat 14 hari sejak diterbitkan surat teguran",
        c: "Setelah 2 x 24 jam sejak surat teguran tidak dilunasi",
        d: "Setelah lewat 21 hari sejak disampaikan surat teguran",
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