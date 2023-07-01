function mostrarInclusao() {
  var inclusaoDiv = document.getElementById("incluir-nova-postagem");
  var botaoIncluir = document.getElementById("botao-incluir");

  if (inclusaoDiv.style.display === "none") {
    inclusaoDiv.style.display = "block";
    botaoIncluir.innerText = "Cancelar";
  } else {
    inclusaoDiv.style.display = "none";
    botaoIncluir.innerText = "Incluir";
  }
}

document.getElementById("inclusao-form").addEventListener("submit", function (event) {
  event.preventDefault();

  var titulo = document.getElementById("titulo").value;
  var imagem = document.getElementById("imagem").value;
  var data = document.getElementById("data").value;
  var conteudo = document.getElementById("conteudo").value;

  // Aqui você pode adicionar a lógica para adicionar a postagem ao layout principal da página HTML do Projeto 1
});
