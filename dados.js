const botao1 = document.getElementById("botao1");
const botao2 = document.getElementById("botao2");
const botao3 = document.getElementById("botao3");

botao1.addEventListener("click", function() {
  window.open("https://www.google.com", "_blank"); // Abre em nova aba
});

botao2.addEventListener("click", function() {
  window.open("https://www.facebook.com", "_blank"); // Abre em nova aba
});

botao3.addEventListener("click", function() {
  window.open("https://www.youtube.com", "_blank"); // Abre em nova aba
});