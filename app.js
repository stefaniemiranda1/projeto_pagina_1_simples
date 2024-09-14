const circleContainer = document.getElementById('circleContainer');
const image = document.createElement('img'); 

// Correção: Use o caminho correto da imagem.
image.src = 'Capturar.PNG'; // Substitua 'Capturar.PNG' pelo caminho correto da imagem.
image.alt = 'Logo'; 

image.onload = () => { // Aguarda o carregamento da imagem
  circleContainer.appendChild(image);

  // Estilização da imagem dentro do círculo (opcional)
  image.style.width = '100%'; 
  image.style.height = 'auto';
};

// Correção: Não precisa de outra variável 'image' aqui, 
// use a mesma criada anteriormente.
image.addEventListener('click', function() {
  window.location.href = "https://aistudio.google.com/app/prompts/new_chat?pli=1"; // Altere para o link desejado
});