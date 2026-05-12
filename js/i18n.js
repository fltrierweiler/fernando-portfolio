/* 
 * Lógica de Internacionalização (i18n)
 * Suporte a Português e Inglês com detecção automática
 */

// Dicionário de traduções
const i18nData = {
    'pt': {
        'navHome': 'Início',
        'navAbout': 'Sobre mim',
        'navEducation': 'Formação',
        'navPortfolio': 'Portfólio',
        'navContact': 'Contato',
        
        'themeToggle': 'Win98 / WinXP',
        'langToggle': 'EN / PT',
        
        'indexTitle': 'Bem-vindo ao Meu Portfólio!',
        'indexSubtitle': 'Explore meu currículo estilo Windows 98/XP.',
        'indexEnterBtn': 'Entrar no Portfólio',
        
        'aboutTitle': 'Sobre Mim',
        'aboutContent': 'Olá! Seja bem-vindo ao meu portfólio. Sou formado em Direito e já atuei como advogado, mas fiz uma transição de carreira e atuo como desenvolvedor há mais de quatro anos. Minha paixão por tecnologia surgiu quando eu ainda era criança, quando aprendi a desenvolver em HTML, CSS e JavaScript para criar pequenos sites e jogos. Hoje, meu trabalho é mais voltado para o backend, sendo .NET e Python parte da minha stack principal. Sou um grande saudosista da internet dos anos 2000, e isso se reflete tanto no meu estilo de desenvolvimento quanto na estética do meu portfólio, inspirado nos sistemas operacionais clássicos da Microsoft.',
        
        'eduTitle': 'Formação Profissional',
        'eduTechTitle': 'Tecnologias',
        'eduTechContent': 'Tecnologias: .NET Core, .NET Framework, ASP.NET, C#, Roslyn, Razor, Blazor, MAUI, WPF, Windows Forms, Python, Java, JavaScript, HTML/CSS, Vue, React, SQL (SQL Express, SQLite, PostgreSQL), NoSQL (MongoDB), CRUD, SOLID, HTTP, RESTful API, WebSockets, Git, GitHub, BitBucket, AWS S3, AWS CDK, GCP, Azure, Docker, Kubernetes, Kibana, DevOps, Jira, ADO, Agile/Scrum, OOP, MVC, MVVM, TDD, Unit Testing.',
        'eduLangTitle': 'Idiomas',
        'eduLang1': 'Inglês (Fluente)',
        'eduLang2': 'Português (Nativo)',
        'eduLang3': 'Francês (Intermediário)',
        'eduEduTitle': 'Formação Acadêmica',
        'eduEdu1': 'Bacharelado em Ciência da Computação (2024 - Presente) - Centro Universitário Internacional (UNINTER)',
        'eduEdu2': 'Pós-graduação em Direito Processual Civil (2021 - 2022) - Escola Brasileira de Direito (EBRADI)',
        'eduEdu3': 'Pós-graduação em Direito da Saúde (2020 - 2021) - Complexo de Ensino Renato Saraiva (CERS)',
        'eduEdu4': 'Bacharelado em Direito (2015 - 2019) - Universidade Federal do Paraná (UFPR)',
        
        'portTitle': 'Portfólio',
        'portDesc': 'Projetos realizados.',
        'detailBtn': '[Ver Detalhes]',
        'portItem1': 'JS-Breakout (HTML, CSS, JS)',
        'portItem1Desc': 'Jogo simples de Breakout projetado para mostrar as capacidades do desenvolvimento web usando apenas HTML, CSS e JavaScript vanilla.',
        'portItem2': 'Razor-MVC (ASP.NET)',
        'portItem2Desc': 'Projeto ASP.NET Core em padrão MVC, com intuito de demonstrar operações CRUD utilizando Entity Framework em um banco de dados local SQLite, com validações de dados client-side e server-side.',
        'contactTitle': 'Contato',
        'contactDesc': 'Entre em contato preenchendo o formulário abaixo:',
        'contactName': 'Nome:',
        'contactEmail': 'E-mail:',
        'contactMessage': 'Mensagem:',
        'contactSend': 'Enviar Mensagem',
        
        'errorEmptyFields': 'Erro: Todos os campos são obrigatórios!',
        'errorInvalidEmail': 'Erro: Por favor, insira um e-mail válido!',
        'successMessage': 'Mensagem enviada com sucesso!'
    },
    'en': {
        'navHome': 'Home',
        'navAbout': 'About Me',
        'navEducation': 'Education',
        'navPortfolio': 'Portfolio',
        'navContact': 'Contact',
        
        'themeToggle': 'Win98 / WinXP',
        'langToggle': 'PT / EN',
        
        'indexTitle': 'Welcome to My Portfolio!',
        'indexSubtitle': 'Explore my Windows 98/XP styled resume.',
        'indexEnterBtn': 'Enter Portfolio',
        
        'aboutTitle': 'About Me',
        'aboutContent': 'Hello! Welcome to my portfolio. I have a background in Law and even used to work as a lawyer, but I transitioned to software development over four years ago. My passion for technology started when I was a child. Back then, I learned to develop in HTML, CSS, and JavaScript to create small websites and games. Today, my work is more focused on backend development, with .NET and Python being part of my main stack. I deeply miss the early 2000s internet, which reflects both in my development style and the aesthetics of my portfolio, inspired by classic Microsoft operating systems.',
        
        'eduTitle': 'Education',
        'eduTechTitle': 'Technologies',
        'eduTechContent': 'Technologies: .NET Core, .NET Framework, ASP.NET, C#, Roslyn, Razor, Blazor, MAUI, WPF, Windows Forms, Python, Java, JavaScript, HTML/CSS, Vue, React, SQL (SQL Express, SQLite, PostgreSQL), NoSQL (MongoDB), CRUD, SOLID, HTTP, RESTful API, WebSockets, Git, GitHub, BitBucket, AWS S3, AWS CDK, GCP, Azure, Docker, Kubernetes, Kibana, DevOps, Jira, ADO, Agile/Scrum, OOP, MVC, MVVM, TDD, Unit Testing.',
        'eduLangTitle': 'Languages',
        'eduLang1': 'English (Fluent)',
        'eduLang2': 'Portuguese (Native)',
        'eduLang3': 'French (Intermediate)',
        'eduEduTitle': 'Education',
        'eduEdu1': 'Bachelor of Computer Science (2024 - Present) - International University Center (UNINTER)',
        'eduEdu2': 'Graduate Degree in Civil Procedure (2021 - 2022) - Escola Brasileira de Direito (EBRADI)',
        'eduEdu3': 'Graduate Degree in Health Law (2020 - 2021) - Complexo de Ensino Renato Saraiva (CERS)',
        'eduEdu4': 'Bachelor of Laws (2015 - 2019) - Federal University of Paraná (UFPR)',
        
        'portTitle': 'Portfolio',
        'portDesc': 'Completed projects.',
        'detailBtn': '[View Details]',
        'portItem1': 'JS-Breakout (HTML, CSS, JS)',
        'portItem1Desc': 'Simple Breakout game designed to showcase the capabilities of web development using just HTML, CSS and vanilla JavaScript.',
        'portItem2': 'Razor-MVC (ASP.NET)',
        'portItem2Desc': 'ASP.NET Core project in MVC pattern, intended to demonstrate CRUD operations using Entity Framework with a local SQLite database, featuring both client-side and server-side data validations.',
        
        'contactTitle': 'Contact',
        'contactDesc': 'Get in touch by filling out the form below:',
        'contactName': 'Name:',
        'contactEmail': 'E-mail:',
        'contactMessage': 'Message:',
        'contactSend': 'Send Message',
        
        'errorEmptyFields': 'Error: All fields are required!',
        'errorInvalidEmail': 'Error: Please enter a valid e-mail address!',
        'successMessage': 'Message sent successfully!'
    }
};

let currentLang = 'pt'; // Padrão

document.addEventListener('DOMContentLoaded', () => {
    initLang();
});

// Inicializa o idioma com base na preferência ou local do navegador
function initLang() {
    const savedLang = localStorage.getItem('lang');
    
    if (savedLang) {
        currentLang = savedLang;
    } else {
        const browserLang = navigator.language.slice(0, 2).toLowerCase();
        if (browserLang === 'en') {
            currentLang = 'en';
        }
    }
    
    updateTranslations();

    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
        langBtn.addEventListener('click', () => {
            currentLang = currentLang === 'pt' ? 'en' : 'pt';
            localStorage.setItem('lang', currentLang);
            updateTranslations();
        });
    }
}

// Atualiza o texto de todos os elementos que possuem o atributo data-i18n
function updateTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (i18nData[currentLang] && i18nData[currentLang][key]) {
            el.innerText = i18nData[currentLang][key];
        }
    });

    // Atualiza placeholders em inputs
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (i18nData[currentLang] && i18nData[currentLang][key]) {
            el.placeholder = i18nData[currentLang][key];
        }
    });
}
