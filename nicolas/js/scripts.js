document.addEventListener('DOMContentLoaded', event => {
    
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    }

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
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (this.getAttribute('data-bs-toggle') !== 'modal') {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    const form = document.getElementById('contactForm');
    if (form) {
        const emailInput = document.getElementById('email');

        const validDomains = ['gmail.com', 'hotmail.com', 'outlook.com', 'yahoo.com', 'bol.com.br'];

        const validateEmailDomain = () => {
            const emailValue = emailInput.value.toLowerCase();
            let isValidDomain = false;

            if (emailValue.includes('@')) {
                const domain = emailValue.substring(emailValue.indexOf('@') + 1);
                
                isValidDomain = validDomains.some(d => domain.startsWith(d));
            }

            if (emailInput.validity.typeMismatch) {
                return; 
            }

            if (!isValidDomain && emailValue.length > 0) {
                emailInput.setCustomValidity('Por favor, use um e-mail de provedor comum (ex: @gmail, @hotmail, @outlook).');
            } else {
                emailInput.setCustomValidity('');
            }

            emailInput.reportValidity(); 
        };

        emailInput.addEventListener('input', validateEmailDomain);
        emailInput.addEventListener('change', validateEmailDomain);
        
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            
            validateEmailDomain();

            if (!form.checkValidity()) {
                e.stopPropagation();
            } else {
                alert('Feedback enviado com sucesso! (Simulação)');
                
                form.reset();
                form.classList.remove('was-validated');
                
                const modal = bootstrap.Modal.getInstance(document.getElementById('feedbackModal'));
                if (modal) {
                    modal.hide();
                }
            }
            
            form.classList.add('was-validated');
        }, false);
    }

    const signupForm = document.getElementById('signupForm');

    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const nameInput = document.getElementById('signupName');
            const emailInput = document.getElementById('signupEmail');
            const passwordInput = document.getElementById('signupPassword');
            
            let errors = [];

            if (nameInput.value.trim() === "") {
                errors.push("O Nome de Usuário é obrigatório.");
            }
            if (emailInput.value.trim() === "") {
                errors.push("O E-mail é obrigatório.");
            }
            if (passwordInput.value.trim() === "") {
                errors.push("A Senha é obrigatória.");
            }
            
            if (errors.length === 0) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(emailInput.value)) {
                    errors.push("Por favor, insira um endereço de E-mail válido.");
                }

                if (nameInput.value.length < 4) {
                    errors.push("O Nome de Usuário deve ter no mínimo 4 caracteres.");
                }
                if (passwordInput.value.length < 8) {
                    errors.push("A Senha deve ter no mínimo 8 caracteres.");
                }

                const nameRegex = /^[a-zA-Z0-9_]+$/;
                if (!nameRegex.test(nameInput.value)) {
                    errors.push("O Nome de Usuário só pode conter letras, números e '_'.");
                }
            }

            if (errors.length > 0) {
                alert("Erros no Formulário:\n\n" + errors.join('\n'));
            } else {
                alert("Cadastro/Login bem-sucedido! (Simulação da Aplicação Funcional)");
                signupForm.reset(); 
                
                const modal = bootstrap.Modal.getInstance(document.getElementById('signupModal'));
                if (modal) {
                    modal.hide();
                }
            }
        });
    }

    const modalButtons = document.querySelectorAll('[data-bs-toggle="modal"]');
    
    modalButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            setTimeout(() => {
                event.currentTarget.blur();
            }, 0);
        });
    });

    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb-sidenav-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});