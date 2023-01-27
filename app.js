const quizData = [
  {
    question: "En aktif Twitter kullanıcısı?",
    a: "Fatih Kadir Akın",
    b: "İlker Kurtel",
    c: "Didem Küçükkaraaslan",
    d: "Azmi Mengü",
    e: "Onur Aslan",
    correct: "a",
  },
  {
    question: "En komik Twitter kullanıcısı?",
    a: "Fatih Kadir Akın",
    b: "İlker Kurtel",
    c: "Didem Küçükkaraaslan",
    d: "Azmi Mengü",
    e: "Onur Aslan",
    correct: "b",
  },
  {
    question: "En gezen Twitter kullanıcısı?",
    a: "Fatih Kadir Akın",
    b: "İlker Kurtel",
    c: "Didem Küçükkaraaslan",
    d: "Azmi Mengü",
    e: "Onur Aslan",
    correct: "d",
  },
  {
    question: "En üretken Twitter kullanıcısı?",
    a: "Fatih Kadir Akın",
    b: "İlker Kurtel",
    c: "Didem Küçükkaraaslan",
    d: "Azmi Mengü",
    e: "Onur Aslan",
    correct: "c",
  },
  {
    question: " Co-founder zetupme?",
    a: "Fatih Kadir Akın",
    b: "İlker Kurtel",
    c: "Didem Küçükkaraaslan",
    d: "Azmi Mengü",
    e: "Onur Aslan",
    correct: "e",
  },
];
const container = document.getElementById("quiz-container");
const questionEl = document.querySelector(".question");
const answerEls = document.querySelectorAll(".answer");
const text_A = document.getElementById("a_text");
const text_B = document.getElementById("b_text");
const text_C = document.getElementById("c_text");
const text_D = document.getElementById("d_text");
const text_E = document.getElementById("e_text");
const btnEl = document.getElementById("submit");

let questionNum = 0;
let score = 0;

loadQuiz();
function loadQuiz() {
  const currentQuizData = quizData[questionNum];
  deSelectedAnswers();

  questionEl.innerText = currentQuizData.question;
  text_A.innerText = currentQuizData.a;
  text_B.innerText = currentQuizData.b;
  text_C.innerText = currentQuizData.c;
  text_D.innerText = currentQuizData.d;
  text_E.innerText = currentQuizData.e;
}
//sonraki soruda seçili gelmemesi için

function deSelectedAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

// function getSelected(){
//     let answer;
//     answerEls.forEach((answerEl)=>{
//         if(answerEl.checked){
//             answer=answerEl.id
//         }
//     })
//     return answer
// }

btnEl.addEventListener("click", () => {
  let answer = () => {
    answerEls.forEach((answerEl) => {
      if (answerEl.checked) {
        answer = answerEl.id;
        if (answer === quizData[questionNum].correct) {
          score++;
        }
        questionNum++;

        if (questionNum < quizData.length) {
          loadQuiz();
        } else {
          container.innerHTML = `
          <h2>Test Tamamlandı, ${score * 20} Puan Aldınız 🤞 </h2>
          <button id="submit" onclick="location.reload()">Tekrar Dene</button> `}
      }
    });
  };
  answer();
});
