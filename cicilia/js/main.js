
// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Bootstrap custom validation for forms
(function () {
  'use strict'
  var forms = document.querySelectorAll('.needs-validation')
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        } else {
          // Emulate form send: show a toast or alert
          event.preventDefault()
          const title = form.querySelector('.modal-title') ? form.querySelector('.modal-title').textContent : 'Formulário enviado';
          alert(title + '\\nObrigado! Em breve entraremos em contato.');
          // close modal if inside one
          var modalEl = form.closest('.modal');
          if(modalEl){
            var modal = bootstrap.Modal.getInstance(modalEl);
            if(modal) modal.hide();
          }
          form.reset();
        }
        form.classList.add('was-validated')
      }, false)
    })
})()

// Simple add-to-cart demo using localStorage
document.addEventListener('click', function(e){
  if(e.target && e.target.classList.contains('add-to-cart')){
    const name = e.target.getAttribute('data-name');
    const price = Number(e.target.getAttribute('data-price')||0);
    let cart = JSON.parse(localStorage.getItem('qc_cart')||'[]');
    cart.push({name, price, qty:1});
    localStorage.setItem('qc_cart', JSON.stringify(cart));
    // show a temporary toast-like message (simple)
    const el = document.createElement('div');
    el.className = 'position-fixed top-0 end-0 m-3 p-2 bg-success text-white rounded shadow';
    el.style.zIndex = 9999;
    el.textContent = name + ' adicionado ao carrinho';
    document.body.appendChild(el);
    setTimeout(()=>el.remove(),2000);
  }
});

// Optional: reveal a welcome modal on first visit using sessionStorage
document.addEventListener('DOMContentLoaded', function(){
  if(!sessionStorage.getItem('qc_seen_welcome')){
    const welcomeModal = new bootstrap.Modal(document.createElement('div'));
    // we won't create a new modal element; instead show newsletter modal as welcome
    var nm = document.getElementById('newsletterModal');
    if(nm) bootstrap.Modal.getOrCreateInstance(nm).show();
    sessionStorage.setItem('qc_seen_welcome','1');
  }
});
