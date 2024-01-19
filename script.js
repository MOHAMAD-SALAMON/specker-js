const form = document.querySelector('form');
const input = form.querySelector('input');
const button = form.querySelector('button');

button.addEventListener('click', () => {
  const text = input.value;
  const speak = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(speak);
});