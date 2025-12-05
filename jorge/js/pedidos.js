const form = document.getElementById("pedidoForm");
const mensagemForm = document.getElementById("mensagemForm");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nome        = document.getElementById("nome").value.trim();
    const email       = document.getElementById("email").value.trim();
    const nomeCarta   = document.getElementById("nomeCarta").value.trim();
    const edicao      = document.getElementById("edicao").value.trim();
    const numeroCarta = document.getElementById("numeroCarta").value.trim();
    const idioma      = document.getElementById("idioma").value;
    const estado      = document.getElementById("estado").value;
    const obs         = document.getElementById("obs").value.trim();

    if (nome === "" || email === "" || nomeCarta === "" || edicao === "" || numeroCarta === "") {
        mensagemForm.textContent = "Atenção! Preencha todos os campos obrigatórios.";
        mensagemForm.style.color = "red";
    }

    else if (!email.includes("@")) {
        mensagemForm.textContent = "Digite um e-mail válido.";
        mensagemForm.style.color = "red";
    }

    else if (numeroCarta.length < 2) {
        mensagemForm.textContent = "Número da carta inválido.";
        mensagemForm.style.color = "orange";
    }

    else {
        mensagemForm.textContent = "Pedido enviado com sucesso! Entraremos em contato em breve.";
        mensagemForm.style.color = "green";
        form.reset();
    }
});
