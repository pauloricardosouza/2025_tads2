
# Queijaria Recanto Colonial - Site

## Resumo
Site completo e responsivo para a **Queijaria Recanto Colonial** (fictícia, inspirada em Telêmaco Borba - PR). Desenvolvido com HTML, CSS, Bootstrap 5, Bootstrap Icons e JavaScript.

## Estrutura de pastas
```
queijaria_site_full/
├─ index.html
├─ contato.html
├─ formLogin.html
├─ css/styles.css
├─ js/main.js
└─ img/logo.png (logo enviada pelo usuário)
```

## Customizações realizadas
- Template: versão personalizada usando componentes do Bootstrap 5 (navbar, carousel, cards, modal).
- Identidade visual: cores e tipografia ajustadas para combinar com a logo (tons creme/dourado e marrom).
- Imagens: a logo enviada foi copiada para `img/logo.png` e usada em várias seções. Imagens de produto foram replicadas para manter o pacote auto-contido.

## Formulários e validação
- `contato.html` inclui formulário de contato com validação HTML5 e validação customizada via JavaScript (classe `.needs-validation`). 
- Modal de newsletter em `index.html` com validação e feedback de envio (simulado com `alert`).
- `formLogin.html` demonstra validação de login (sem backend).

## Recursos interativos em JavaScript
- Validação de formulários (customizada, usando padrão Bootstrap).
- Efeito de rolagem suave para links internos.
- Carrossel de produtos (Bootstrap carousel).
- Modal dinâmico para newsletter.
- Pequeno carrinho de demonstração usando `localStorage` (botões "Adicionar ao carrinho").

## Uso da IA
A IA colaborou no planejamento do layout, no preenchimento dos conteúdos, geração de código HTML/CSS/JS e na montagem do pacote ZIP final.

## Como usar / Deploy
1. Extraia o ZIP e abra `index.html` no navegador.
2. Para testar formulários: preencha e envie; o envio é simulado pelo JavaScript e exibirá uma mensagem de confirmação.
3. Para transformar em site real: conectar formulários a um backend (PHP, Node.js, Google Forms, ou serviço de e-mail) para persistência.

---
Desenvolvido para fins acadêmicos e demonstração.
