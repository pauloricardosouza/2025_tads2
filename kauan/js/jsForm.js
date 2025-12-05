// Selecionar o formulario e o paragrafo de mensagens
const form = document.getElementById("form");
const nomeMsgMsg  = document.getElementById("nomeMsg");
const emailMsg  = document.getElementById("emailMsg");
const senhaMsg  = document.getElementById("senhaMsg");
const formMsg  = document.getElementById("formMsg");

let validNome = false;
let validEmail = false;
let validSenha = false;

form.addEventListener("submit", (erroPreenchimento) => {
    erroPreenchimento.preventDefault();

    const nome     = document.getElementById("nome").value.trim();
    const email    = document.getElementById("email").value.trim();
    const senha    = document.getElementById("senha").value.trim();

    if (nome === "") {
        nomeMsg.textContent = "Preencha o nome completo!"
        nomeMsg.style.color = "red";
    }
    else {
        nomeMsg.textContent = "";
        validNome = true;
    }

    if (email === "" || !email.includes("@")) {
        emailMsg.textContent = "Insira um email válido!"
        emailMsg.style.color = "red";
    }
    else {
        emailMsg.textContent = "";
        validEmail = true;
    }

    if (senha === "" || senha.length < 8) {
        senhaMsg.textContent = "A senha deve conter no minimo 8 digitos!"
        senhaMsg.style.color = "red";
    }
    else {
        senhaMsg.textContent = "";
        validSenha = true;
    }

    if (validNome === true && validEmail === true && validSenha === true) {
        formMsg.textContent = "Usuario cadastrado com sucesso!";
        formMsg.style.color = "green";
        form.reset();
    }
});