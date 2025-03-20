const questions = [
  { q: "¿Donde me declare por primera vez?", a: "parking" },
  { q: "¿Que fue lo que me hizo enamorarme del todo de ti?", a: "coran" },
  { q: "¿Donde estaba cuando te hable por primera vez?", a: "barcelona" },
  { q: "¿Que libro te preste?", a: "wu wei" },
  { q: "¿Cuanto te quiero PISTA: es un ingrediente de cocina?", a: "un huevo" },
  { q: "¿Soy un mimado?", a: "si" }


];
let currentIndex = 0;
function askQuestion(index) {
  currentIndex = index;
  document.getElementById('question-text').innerText = questions[index].q;
  document.getElementById('question-popup').style.display = 'block';
}
function checkAnswer() {
  let userAnswer = document.getElementById('answer').value.trim().toLowerCase();
  if (userAnswer === questions[currentIndex].a) {
      alert("¡Correcto! Aquí está tu foto");
      window.open(`galeria/imagen${currentIndex + 1}.JPEG`, '_blank');
      closePopup();
  } else {
      alert("Respuesta incorrecta, intenta de nuevo");
  }
}
function closePopup() {
  document.getElementById('question-popup').style.display = 'none';
}