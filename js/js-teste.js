// Função para incluir uma nova postagem
function addPost(title, image, date, content) {
  // Crie um novo elemento div para a postagem
  const postDiv = document.createElement("div");
  postDiv.classList.add("post");

  // Adicione o conteúdo da postagem
  postDiv.innerHTML = `
    <h2>${title}</h2>
    <img src="${image}" alt="${title}">
    <p>Data: ${date}</p>
    <p>${content}</p>
  `;

  // Adicione a postagem ao layout principal
  const mainContainer = document.querySelector(".main-container");
  mainContainer.appendChild(postDiv);
}

// Obtenha o formulário de inclusão de postagens
const postForm = document.getElementById("postForm");

// Adicione um ouvinte de evento para o envio do formulário
postForm.addEventListener("submit", function(event) {
  event.preventDefault();

  // Obtenha os valores dos campos de entrada
  const title = document.getElementById("title").value;
  const image = document.getElementById("image").value;
  const date = document.getElementById("date").value;
  const content = document.getElementById("content").value;

  // Chame a função addPost para incluir a postagem
  addPost(title, image, date, content);

  // Limpe os campos do formulário
  postForm.reset();
});
