function adicionarConteudo() {
  /**
   * Adiciona conteúdo mock dentro do corpo do post
   */
  let texto = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ";
  for (let i = 0; i < 5; ++i) {
    texto += texto;
  }
  let conteudo = document.getElementById("postContent");
  conteudo.innerHTML += texto;
}