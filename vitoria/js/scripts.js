/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

document.getElementById("formAgendamento").addEventListener("submit", function(event) {
    event.preventDefault(); // impede envio automático

    let nome = document.getElementById("nomeAgendamento").value.trim();
    let email = document.getElementById("emailAgendamento").value.trim();
    let telefone = document.getElementById("telefoneAgendamento").value.trim();
    let mensagem = document.getElementById("mensagemAgendamento").value.trim();
    let msg = document.getElementById("mensagemForm");

    if (nome === "" || email === "" || telefone === "" || mensagem === "") {
        msg.style.color = "red";
        msg.textContent = "Por favor, preencha todos os campos antes de enviar.";
    } else {
        msg.style.color = "green";
        msg.textContent = "Formulário enviado com sucesso!";
        
        // limpa os campos
        document.getElementById("formAgendamento").reset();
    }
});
