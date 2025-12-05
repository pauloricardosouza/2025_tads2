document.addEventListener("DOMContentLoaded", function () {
  const formCadastro = document.querySelector("form");

  if (formCadastro) {
    formCadastro.addEventListener("submit", function (event) {
      event.preventDefault();

      const nome = document.getElementById("nomeUsuario").value;
      const email = document.getElementById("emailUsuario").value;
      const senha = document.getElementById("senhaUsuario").value;
      const confirmarSenha = document.getElementById("confirmarSenhaUsuario").value;

      // Validações básicas
      if (senha !== confirmarSenha) {
        alert("As senhas não coincidem!");
        return;
      }

      if (senha.length < 8) {
        alert("A senha deve ter pelo menos 8 caracteres.");
        return;
      }

      // Salva usuário no localStorage
      const usuario = { nome, email, senha };
      localStorage.setItem("usuario", JSON.stringify(usuario));
      localStorage.setItem("logado", "true");

      alert("Cadastro realizado com sucesso! 🎉");

      // Redireciona para a página inicial
      window.location.href = "index.html";
    });
  }
});