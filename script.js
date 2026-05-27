// Spørsmålene
const questions = [
    
{country:"Norge",      code:"no", opts:["Sverige","Danmark","Norge","Finland"]},
  {country:"Frankrike",  code:"fr", opts:["Italia","Frankrike","Nederland","Belgia"]},
  {country:"Japan",      code:"jp", opts:["Kina","Japan","Sør-Korea","Vietnam"]},
  {country:"Brasil",     code:"br", opts:["Argentina","Mexico","Brasil","Colombia"]},
  {country:"Canada",     code:"ca", opts:["USA","Canada","Australia","New Zealand"]},
  {country:"Sør-Afrika", code:"za", opts:["Kenya","Nigeria","Sør-Afrika","Ghana"]},
  {country:"Tyrkia",     code:"tr", opts:["Marokko","Pakistan","Tyrkia","Tunisia"]},
  {country:"Sveits",     code:"ch", opts:["Østerrike","Sveits","Sverige","Danmark"]},
  {country:"Nepal",      code:"np", opts:["Bhutan","Nepal","Tibet","Sri Lanka"]},
  {country:"Maladivene", code:"mv", opts:["Mauritius","Maladivene","Sri Lanka","Komoros"]}
];

// Variabler
let current = 0;
let score = 0;
let answered = false;
let timeLeft = 20;
let timerInterval = null;

// Bytter skjerm
function show(id) {
  document.querySelectorAll('.screen').forEach(s => s.style.display = 'none');
  document.getElementById(id).style.display = 'block';
}

// Starter quizen
function startQuiz() {
  current = 0;
  score = 0;
  show('question-screen');
  loadQuestion();
}

// Laster inn spørsmål
function loadQuestion() {
  answered = false;
  const q = questions[current];

  document.getElementById('q-teller').textContent = `${current + 1} / ${questions.length}`;
  document.getElementById('flag-img').src = `https://flagcdn.com/w320/${q.code}.png`;

  const ansDiv = document.getElementById('answers');
  ansDiv.innerHTML = '';
  q.opts.forEach(opt => {
    const btn = document.createElement('button');
    btn.textContent = opt;
    btn.onclick = () => selectAnswer(opt === q.country);
    ansDiv.appendChild(btn);
  });
}

// Sjekker svar
function selectAnswer(isCorrect) {
  if (answered) return;
  answered = true;
  if (isCorrect) score++;
  nextQuestion();
}

// Går videre
function nextQuestion() {
  current++;
  if (current < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

// Viser resultat
function showResult() {
  document.getElementById('final-score').textContent = `Du fikk ${score} av ${questions.length} riktige!`;
  show('result-screen');
}

// Starter på nytt
function restartQuiz() {
  startQuiz();
}
