/* 
 * Lógica principal da aplicação
 * Inclui responsividade do menu, troca de tema e simulação do envio do formulário
 */

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initMobileMenu();
    initContactForm();
    initWindowControls();
});

// --- TEMA WIN 98 / WIN XP ---
function initTheme() {
    const themeBtn = document.getElementById('theme-toggle');
    const rootEl = document.documentElement;
    
    // Recupera tema do LocalStorage ou do sistema
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        rootEl.setAttribute('data-theme', currentTheme);
    }

    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            let theme = rootEl.getAttribute('data-theme');
            if (theme === 'xp') {
                rootEl.setAttribute('data-theme', 'win98');
                localStorage.setItem('theme', 'win98');
            } else {
                rootEl.setAttribute('data-theme', 'xp');
                localStorage.setItem('theme', 'xp');
            }
        });
    }
}

// --- CONTROLES DA JANELA ---
function initWindowControls() {
    // Fechar: Retorna para o Index/Desktop
    document.querySelectorAll('[aria-label="Close"]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Ignorar se formos apenas fechar a Modal customizada
            if(!e.target.closest('#custom-modal')) {
                window.location.href = 'index.html';
            }
        });
    });
}

// --- MENU MOBILE ---
function initMobileMenu() {
    const menuBtn = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
}

// --- VALIDAÇÃO DO FORMULÁRIO ---
function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Impede o envio real do formulário

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Validação simples
        if (!name || !email || !message) {
            showModal(i18nData[currentLang].errorEmptyFields || "Todos os campos são obrigatórios!");
            return;
        }

        // Validação de E-mail (Regex)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showModal(i18nData[currentLang].errorInvalidEmail || "Por favor, insira um e-mail válido!");
            return;
        }

        // Simulação de envio com sucesso
        showModal(i18nData[currentLang].successMessage || "Mensagem enviada com sucesso!");
        form.reset(); // Limpa os campos
    });
}

// --- MODAL PERSONALIZADO ---
function showModal(message) {
    let modal = document.getElementById('custom-modal');
    
    // Cria o modal se não existir
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'custom-modal';
        modal.className = 'modal-overlay';
        
        modal.innerHTML = `
            <div class="modal-content">
                <div class="title-bar">
                    <div class="title-bar-text">Aviso do Sistema</div>
                    <div class="title-bar-controls">
                        <button aria-label="Close" onclick="closeModal()">X</button>
                    </div>
                </div>
                <div class="modal-body">
                    <p id="modal-text"></p>
                    <button onclick="closeModal()">OK</button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    }
    
    document.getElementById('modal-text').innerText = message;
    modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('custom-modal');
    if (modal) {
        modal.style.display = 'none';
    }
}
