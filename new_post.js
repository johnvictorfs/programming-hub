'use strict';

function enviarPost() {
  let form = document.getElementById('newPostForm');
  if (validarPost()) {
    form.submit();
  }
}

function validarPost() {
  let form = document.getElementById('newPostForm');
  // -1 no form.length evita o botão ser incluido na lista de elementos que o loop vai checar
  for (let i = 0; i < form.length - 1; ++i) {
    // Passa por todos os elementos da form e retorna falso se algum deles estiver vazio
    if (form.elements.item(i).value === '') {
      alert("Você não pode deixar campos em branco!");
      return false;
    }
  }
  let categoria = document.getElementById('categoriaInput');
  if (categoria.value === 'Escolha Categoria...') {
    // Retorna falso se nenhuma categoria foi escolhida
    alert("Você precisa escolher uma Categoria!");
    return false;
  }
  alert("Post enviado com sucesso!");
  return true;
}
