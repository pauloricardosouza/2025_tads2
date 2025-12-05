const form = document.getElementById("formContato");
const mensagemForm = document.getElementById("mensagemForm");

form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const nomeUsuario = document.getElementById("nomeUsuario").value.trim();
    const emailUsuario = document.getElementById("emailUsuario").value.trim();
    const mensagemUsuario = document.getElementById("mensagemUsuario").value.trim();

    if (nomeUsuario === "" || emailUsuario === "" || mensagemUsuario === "") {
        mensagemForm.textContent = "Atenção! Todos os campos são obrigatórios!";
        mensagemForm.style.color = "red";
    }

    else if (!emailUsuario.includes("@")) {
        mensagemForm.textContent = "Digite um e-mail válido!";
        mensagemForm.style.color = "orange";
    }

    else {
        mensagemForm.textContent = "Mensagem enviada com sucesso!";
        mensagemForm.style.color = "green";
        form.reset();
    }
});
