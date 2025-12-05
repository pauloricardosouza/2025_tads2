/* js/scripts.js - versão com delegation e debug */

(function () {
  let carrinho = [];

  function log(...args) { console.log("[CART]", ...args); }

  function atualizarContador() {
    const badge = document.getElementById("cartCount");
    if (badge) badge.textContent = carrinho.length;
    log("contador:", carrinho.length);
  }

  function atualizarCarrinho() {
    const lista = document.getElementById("cartItems");
    const totalEl = document.getElementById("cartTotal");
    if (!lista || !totalEl) {
      log("Elemento do carrinho não encontrado:", !!lista, !!totalEl);
      return;
    }

    lista.innerHTML = "";
    let total = 0;

    carrinho.forEach((item, idx) => {
      total += item.preco;
      const li = document.createElement("li");
      li.className = "list-group-item d-flex justify-content-between align-items-center";
      li.innerHTML = `
        <div>
          <strong>${item.nome}</strong><br/><small>R$ ${item.preco.toFixed(2)}</small>
        </div>
        <div>
          <button class="btn btn-sm btn-outline-danger remove-btn" data-index="${idx}">Remover</button>
        </div>
      `;
      lista.appendChild(li);
    });

    totalEl.textContent = total.toFixed(2);

    // ligar listeners de remover (delegation abaixo também cuida disso, mas mantemos)
    document.querySelectorAll(".remove-btn").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const i = parseInt(btn.getAttribute("data-index"), 10);
        if (!isNaN(i)) removerItem(i);
      });
    });

    log("carrinho atualizado - itens:", carrinho.length, "total:", total.toFixed(2));
  }

  function adicionarAoCarrinho(nome, preco) {
    carrinho.push({ nome, preco });
    log("adicionado:", nome, preco);
    atualizarContador();
    atualizarCarrinho();
  }

  function removerItem(i) {
    if (isNaN(i)) return;
    const removed = carrinho.splice(i, 1);
    log("removido:", removed);
    atualizarContador();
    atualizarCarrinho();
  }

  // Delegation: captura clicks em todo documento
  function onDocumentClick(e) {
    const addBtn = e.target.closest && e.target.closest('.add-to-cart');
    if (addBtn) {
      e.preventDefault();
      const nome = addBtn.dataset.name || "Produto";
      const precoRaw = addBtn.dataset.price || "0";
      const preco = parseFloat(precoRaw.toString().replace(",", "."));
      if (isNaN(preco)) {
        console.error("[CART] preço inválido:", precoRaw, addBtn);
        return;
      }
      adicionarAoCarrinho(nome, preco);
      return;
    }

    const removeBtn = e.target.closest && e.target.closest('.remove-btn');
    if (removeBtn) {
      e.preventDefault();
      const idx = parseInt(removeBtn.getAttribute('data-index'), 10);
      removerItem(idx);
      return;
    }
  }

  function inicializar() {
    log("inicializando scripts do carrinho...");
    document.addEventListener('click', onDocumentClick);
    atualizarContador();
    atualizarCarrinho();
    // informação extra para debug
    log("botões .add-to-cart encontrados:", document.querySelectorAll('.add-to-cart').length);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", inicializar);
  } else {
    inicializar();
  }
})();
