// -------------------------
// VERIFICA CAMPOS DO LOGIN
// -------------------------
const formLogin = document.getElementById('formLogin');

if (formLogin) {
    console.log('JS carregado no formulário de login');

    function verificarCampos() {
        const botaoLogin = document.getElementById('btnLogin');
        const campos = document.querySelectorAll('input[required]');
        let preenchido = true;

        campos.forEach((campo) => {
            if (campo.value.trim() === '') {
                preenchido = false;
            }
        });

        botaoLogin.disabled = !preenchido;
    }

    formLogin.addEventListener('input', verificarCampos);
    verificarCampos();
}



// -------------------------
// FORMULÁRIO DE CADASTRO
// -------------------------
const form = document.getElementById("form");
const formMsg = document.getElementById("formMsg");

// Evita erro caso o formulário não exista na página
if (form) {
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const nomeUsuario  = document.getElementById("nomeUsuario").value.trim();
        const emailUsuario = document.getElementById("userEmail").value.trim();
        const senhaUsuario = document.getElementById("senhaUsuario").value.trim();

        // Verificar se todos os campos foram preenchidos
        if (nomeUsuario === "" || emailUsuario === "" || senhaUsuario === "") {
            formMsg.textContent = "Atenção! Preencha todos os campos obrigatórios!";
            formMsg.style.color = "red";
        }

        // Verificar o tamanho mínimo da senha
        else if (senhaUsuario.length < 6) {
            formMsg.textContent = "A senha deve possuir pelo menos 6 caracteres";
            formMsg.style.color = "orange";
        }

        // Verificar email válido
        else if (!emailUsuario.includes("@") || !emailUsuario.includes(".") || emailUsuario.length < 5) {
            formMsg.textContent = "Digite um e-mail válido";
            formMsg.style.color = "red";
        }

        // Caso esteja tudo certo
        else {
            formMsg.textContent = "Usuário cadastrado com sucesso!";
            formMsg.style.color = "green";
            form.reset();
        }
    });
}