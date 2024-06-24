// Array of quiz questions and answers
let quizLevel1 = [
    {
        question: "Jika x = 2, y = 3, dan z = 4, berapakah nilai dari x^2 + y^2 - z^2?",
        answer: "5"
    },
    {
        question: "Sebuah lingkaran memiliki diameter 14 cm. Berapakah luas lingkaran tersebut? (π = 22/7)",
        answer: "154 cm²"
    },
    {
        question: "Jika a = 3 dan b = 4, berapakah nilai dari 2a + 3b?",
        answer: "18"
    },
    {
        question: "Sebuah segitiga memiliki panjang sisi 6 cm, 8 cm, dan 10 cm. Berapakah luas segitiga tersebut?",
        answer: "24 cm²"
    },
    {
        question: "Jika suatu bilangan dikalikan 3 dan kemudian ditambahkan 6 hasilnya adalah 24. Berapakah bilangan tersebut?",
        answer: "6"
    },
    {
        question: "Sebuah tabung memiliki jari-jari 7 cm dan tinggi 10 cm. Berapakah volume tabung tersebut? (π = 22/7)",
        answer: "1540 cm³"
    },
    {
        question: "Jika f(x) = 2x + 3, berapakah nilai f(5)?",
        answer: "13"
    },
    {
        question: "Dari deret aritmetika 3, 7, 11, 15, ..., berapakah suku ke-10?",
        answer: "39"
    },
    {
        question: "Jika 4x - 5 = 3x + 7, berapakah nilai x?",
        answer: "12"
    },
    {
        question: "Berapakah akar kuadrat dari 169?",
        answer: "13"
    },
    {
        question: "Jika suatu sudut pada segitiga adalah 90 derajat dan dua sudut lainnya masing-masing 45 derajat, berapakah panjang sisi miring jika panjang satu sisi adalah 5 cm?",
        answer: "5√2 cm"
    },
    {
        question: "Berapakah hasil dari (2^3) * (2^4)?",
        answer: "128"
    },
    {
        question: "Jika suatu prisma segitiga memiliki alas berbentuk segitiga dengan panjang alas 6 cm dan tinggi 4 cm serta tinggi prisma 10 cm, berapakah volume prisma tersebut?",
        answer: "120 cm³"
    },
    {
        question: "Jika nilai x memenuhi persamaan x^2 - 5x + 6 = 0, berapakah nilai x?",
        answer: "2 dan 3"
    },
    {
        question: "Berapakah hasil dari 7! (faktorial dari 7)?",
        answer: "5040"
    },
    {
        question: "Jika luas sebuah persegi adalah 64 cm², berapakah panjang sisinya?",
        answer: "8 cm"
    },
    {
        question: "Jika x + y = 10 dan x - y = 4, berapakah nilai x?",
        answer: "7"
    },
    {
        question: "Sebuah bola memiliki jari-jari 5 cm. Berapakah volume bola tersebut? (π = 3.14)",
        answer: "523.33 cm³"
    },
    {
        question: "Jika suatu barisan geometri memiliki suku pertama 3 dan rasio 2, berapakah suku ke-5?",
        answer: "48"
    },
    {
        question: "Berapakah keliling dari sebuah persegi panjang dengan panjang 10 cm dan lebar 5 cm?",
        answer: "30 cm"
    }
];

let quizLevel2 = [
    {
        question: "Diketahui ab adalah sisi tegak segitiga siku-siku dengan panjang ab = 6 dan ac = 8, berapakah sisi miring bc?",
        answer: "10"
    },
    {
        question: "Jika nilai x + 3 = 5, berapakah nilai x?",
        answer: "2"
    },
    {
        question: "Sebuah pesawat terbang dari kota A ke kota B dengan kecepatan rata-rata 600 km/jam. Perjalanan tersebut menempuh waktu 2 jam. Berapa jarak antara kota A dan kota B?",
        answer: "1200 km"
    },
    {
        question: "Sebuah trapesium memiliki panjang sisi sejajar 6 cm dan 10 cm, serta tinggi 8 cm. Berapakah luas trapesium tersebut?",
        answer: "64 cm²"
    },
    {
        question: "Jika 3/4 dari jumlah sebuah angka adalah 45, berapakah angka tersebut?",
        answer: "60"
    },
    {
        question: "Diberikan persamaan kuadrat 2x² - 5x + 3 = 0. Berapakah nilai dari x?",
        answer: "1 dan 1.5"
    },
    {
        question: "Sebuah perahu motor berjalan 12 km dalam arah utara dan kemudian 5 km dalam arah barat. Berapakah jarak perahu tersebut dari titik awal?",
        answer: "13 km"
    },
    {
        question: "Jika (a + b) / (a - b) = 2 dan a ≠ b, berapakah nilai dari a/b?",
        answer: "3"
    },
    {
        question: "Sebuah kue terbuat dari 1/3 bagian krim dan 2/3 bagian kue. Jika bagian krim dari kue adalah 240 gram, berapakah berat total kue tersebut?",
        answer: "360 gram"
    },
    {
        question: "Dalam sebuah perjalanan, mobil bergerak dengan kecepatan rata-rata 60 km/jam selama 2 jam. Berapa jarak yang ditempuh mobil tersebut?",
        answer: "120 km"
    },
    {
        question: "Diketahui √x = 3, berapakah nilai dari x?",
        answer: "9"
    },
    {
        question: "Sebuah kotak memiliki volume 192 cm³ dan tinggi 8 cm. Berapakah luas alas kotak tersebut?",
        answer: "24 cm²"
    },
    {
        question: "Jika a + b + c = 12 dan a - b = 2, berapakah nilai dari c?",
        answer: "6"
    },
    {
        question: "Diberikan barisan aritmetika dengan suku pertama 5 dan beda 4. Berapakah suku ke-10 dari barisan tersebut?",
        answer: "41"
    },
    {
        question: "Diketahui panjang diagonal sebuah persegi adalah 10√2 cm. Berapakah panjang sisi persegi tersebut?",
        answer: "10 cm"
    },
    {
        question: "Jika 2^(x-1) = 8, berapakah nilai dari x?",
        answer: "4"
    },
    {
        question: "Sebuah sumur berbentuk tabung memiliki diameter 4 m dan tinggi 6 m. Berapakah volume air maksimum yang dapat ditampung oleh sumur tersebut? (π = 22/7)",
        answer: "48 m³"
    },
    {
        question: "Diketahui jarak antara dua kota adalah 360 km. Jika mobil bergerak dengan kecepatan rata-rata 60 km/jam, berapa lama waktu yang diperlukan untuk sampai ke kota tujuan?",
        answer: "6 jam"
    },
    {
        question: "Jika harga satu buah apel adalah 2000 rupiah, berapakah harga 10 buah apel?",
        answer: "20000 rupiah"
    },
    {
        question: "Sebuah prisma segitiga memiliki alas segitiga dengan panjang 10 cm dan tinggi 8 cm serta tinggi prisma 12 cm. Berapakah volume prisma tersebut?",
        answer: "320 cm³"
    }
];

let currentQuestion = 0;
let score = 0;
let currentLevel = 1; // Level saat ini, dimulai dari level 1
let isLevelCompleted = false;

function initializeQuiz() {
    if (currentLevel === 1) {
        quiz = quizLevel1;
    } else if (currentLevel === 2) {
        quiz = quizLevel2;
    }

    showQuestion();
    updateScore();
}

function showQuestion() {
    const quizContainer = document.querySelector('.quiz-container');
    const question = quiz[currentQuestion];

    const questionDiv = document.createElement('div');
    questionDiv.classList.add('quiz-question');
    questionDiv.id = `question${currentQuestion + 1}`;
    questionDiv.innerHTML = `
        <h2>Soal ${currentQuestion + 1}</h2>
        <p>${question.question}</p>
        <input type="text" id="answerInput" placeholder="Masukkan jawaban Anda di sini">
        <button onclick="checkAnswer()">Kirim Jawaban</button>
    `;

    quizContainer.innerHTML = '';
    quizContainer.appendChild(questionDiv);
}

function checkAnswer() {
    const answerInput = document.getElementById('answerInput').value.trim().toLowerCase();
    const correctAnswer = quiz[currentQuestion].answer.toLowerCase();

    if (answerInput === correctAnswer) {
        score += 5;
        showFeedback(true);
    } else {
        score -= 2;
        showFeedback(false);
    }
    updateScore();
}

function showFeedback(isCorrect) {
    const quizContainer = document.querySelector('.quiz-container');
    const feedbackDiv = document.createElement('div');
    feedbackDiv.classList.add('feedback');

    if (isCorrect) {
        feedbackDiv.innerHTML = `<p>Jawaban Anda benar! (+5 poin)</p>`;
    } else {
        feedbackDiv.innerHTML = `<p>Jawaban Anda salah! (-2 poin)</p>`;
    }
    quizContainer.appendChild(feedbackDiv);

    setTimeout(() => {
        feedbackDiv.remove();
        if (isCorrect) {
            currentQuestion++;
            if (currentQuestion < quiz.length) {
                showQuestion();
            } else {
                completeLevel();
            }
        }
    }, 1000);
}

function completeLevel() {
    if (score >= 60) {
        if (currentLevel === 1) {
            currentLevel = 2;
            currentQuestion = 0;
            score = 0;
            isLevelCompleted = false;
            quiz = quizLevel2;
            showQuestion();
            updateScore();
        } else {
            quizContainer.innerHTML = `<h2>Selamat! Anda berhasil menyelesaikan semua level!</h2><p>Anda dapat melanjutkan ke level berikutnya.</p>`;
        }
    } else {
        quizContainer.innerHTML = `<h2>Maaf, poin Anda tidak mencukupi untuk melanjutkan ke level berikutnya. Minimal 60 poin diperlukan.</h2>`;
    }
}

function updateScore() {
    document.getElementById('score').textContent = score;
}

document.addEventListener('DOMContentLoaded', initializeQuiz);
