/* ============================================
   ROLAGEM SUAVE PELO MENU
============================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: "smooth"
            });
        }
    });
});


/* ============================================
   VALIDAÇÃO DO FORMULÁRIO DE CONTATO
============================================ */
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formContato");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const nome = document.getElementById("nome");
            const email = document.getElementById("email");
            const mensagem = document.getElementById("mensagem");

            let valido = true;

            // Validação do nome
            if (nome.value.trim() === "") {
                nome.classList.add("is-invalid");
                valido = false;
            } else {
                nome.classList.remove("is-invalid");
            }

            // Validação do email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email.value)) {
                email.classList.add("is-invalid");
                valido = false;
            } else {
                email.classList.remove("is-invalid");
            }

            // Validação da mensagem
            if (mensagem.value.trim().length < 10) {
                mensagem.classList.add("is-invalid");
                valido = false;
            } else {
                mensagem.classList.remove("is-invalid");
            }

            // Se tudo estiver OK
            if (valido) {
                exibirMensagemSucesso();
                form.reset();
            }
        });
    }
});


/* ============================================
   MENSAGEM DE SUCESSO PADRÃO
============================================ */
function exibirMensagemSucesso() {
    const alerta = document.getElementById("msg-sucesso");

    if (alerta) {
        alerta.style.display = "block";
        alerta.classList.add("show");

        // some automaticamente depois de 4s
        setTimeout(() => {
            alerta.classList.remove("show");
            alerta.style.display = "none";
        }, 4000);
    }
}


/* ============================================
   BOTÃO “VOLTAR AO TOPO”
============================================ */
const btnTopo = document.getElementById("btnTopo");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        btnTopo.style.display = "block";
    } else {
        btnTopo.style.display = "none";
    }
});

if (btnTopo) {
    btnTopo.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}
