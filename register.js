function enviarCadastro() {
  /**
   * Dá submit na form do cadastro caso ela esteja válida.
   */
  if (cadastroValido()) {
    let form = document.getElementById("registerForm");
    form.submit();
  }
}

function cadastroValido() {
  /**
   * Retorna falso se algum dos campos tiver vazio, ou se as 2 senhas não combinarem.
   * Caso contrário retorna verdadeiro.
   */
  let username = document.getElementById("usernameInput").value;
  let password1 = document.getElementById("passwordInput").value;
  let password2 = document.getElementById("passwordInput2").value;
  if (username === '' || password1 === '' || password2 === '') {
    alert("Você não pode deixar campos em branco!");
    return false;
  }
  if (password1 !== password2) {
    alert("As senhas precisam ser iguais!");
    return false;
  }
  alert("Cadastro realizado com sucesso!");
  return true;
}