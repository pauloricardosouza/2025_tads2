/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

document.addEventListener("DOMContentLoaded", function () {

    // ================================
    // MÁSCARA DE TELEFONE
    // ================================
    const phoneInput = document.getElementById("phone");

    phoneInput.addEventListener("input", function () {
        let v = this.value.replace(/\D/g, "");

        if (v.length > 11) v = v.slice(0, 11);

        if (v.length >= 1) v = "(" + v;
        if (v.length >= 3) v = v.slice(0, 3) + ") " + v.slice(3);
        if (v.length >= 10) v = v.slice(0, 10) + "-" + v.slice(10);

        this.value = v;
    });


    // ================================
    // FORM VALIDATION + SUCCESS MESSAGE
    // ================================
    const btn = document.getElementById("submitButton");
    const sucesso = document.getElementById("submitSuccessMessage");

    btn.addEventListener("click", function () {

        const nome = document.getElementById("name").value.trim();
        const telefone = document.getElementById("phone").value.trim();
        const dia = document.getElementById("dia").value;
        const horario = document.getElementById("horario").value;

        // Verificar se os campos estão preenchidos
        if (!nome || !telefone || dia === "dia" || horario === "hr") {
            alert("Por favor, preencha todos os campos para marcar o horário.");
            return;
        }

        // Mostra mensagem de sucesso
        sucesso.classList.remove("d-none");

        // Opcional: esconder após 3s
        setTimeout(() => {
            sucesso.classList.add("d-none");
        }, 3000);

        // (Opcional) limpar formulário:
        // document.getElementById("contactForm").reset();
    });

});
