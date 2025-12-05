document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); 

        alert("Usuário cadastrado com sucesso!");

        form.reset(); 

        // Redirecionar depois de 1 segundo 
        setTimeout(() => {
             window.location.href = "formLogin.html";
         }, 1000);
    });
});




