document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.testimonials-slider');
    const cards = document.querySelectorAll('.testimonial-card');
    const prevBtn = document.querySelector('.nav-button.prev');
    const nextBtn = document.querySelector('.nav-button.next');
    
    let currentIndex = 0;
    const maxIndex = cards.length - 1;

    function updateSlider() {
        cards.forEach((card, index) => {
            card.style.transform = `translateX(${(index - currentIndex) * 100}%)`;
            card.style.opacity = index === currentIndex ? '1' : '0.5';
        });
    }

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < maxIndex) {
            currentIndex++;
            updateSlider();
        }
    });

    // Inicializa o slider
    updateSlider();

    // Adiciona suporte para touch/swipe
    let touchStartX = 0;
    let touchEndX = 0;

    slider.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
    });

    slider.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].clientX;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > 50) {
            if (diff > 0 && currentIndex < maxIndex) {
                currentIndex++;
            } else if (diff < 0 && currentIndex > 0) {
                currentIndex--;
            }
            updateSlider();
        }
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        
        header.addEventListener('click', () => {
            // Fecha todos os outros itens
            accordionItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });

            // Alterna o estado do item clicado
            item.classList.toggle('active');
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('whatsappForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Pegar os valores do formulário
        const name = document.getElementById('name').value;
        const objective = document.getElementById('objective').value;
        const experience = document.getElementById('experience').value;
        
        // Criar a mensagem
        const message = `Olá Kevin! Me chamo ${name}, meu objetivo é ${objective} e meu nível de experiência é ${experience}. Gostaria de saber mais sobre a consultoria.`;
        
        // Número do WhatsApp específico
        const whatsappLink = `https://wa.me/559193537043?text=${encodeURIComponent(message)}`;
        
        // Redirecionar para o WhatsApp
        window.location.href = whatsappLink;
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const menuLinks = document.querySelectorAll('.footer-nav a');

    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});



// Adicione este JavaScript
const sr = ScrollReveal({
    distance: '60px',
    duration: 2000,
    delay: 300
});

sr.reveal('.hero-content', {origin: 'top'});
sr.reveal('.benefit-card', {origin: 'bottom', interval: 80});
sr.reveal('.testimonial-card', {origin: 'left', interval: 80});
sr.reveal('.about-content', {origin: 'right'});
sr.reveal('.service-card', {origin: 'bottom', interval: 80});




document.addEventListener('DOMContentLoaded', function() {
    const quizData = {
        questions: [
            {
                question: "O que mais te motiva a começar uma transformação física?",
                options: [
                    "Saúde e bem-estar",
                    "Estética e aparência",
                    "Força e performance",
                    "Autoestima e confiança",
                    "Qualidade de vida"
                ]
            },
            {
                question: "Quem ou o que te inspira na jornada fitness?",
                options: [
                    "Atletas profissionais",
                    "Transformações de pessoas comuns",
                    "Influenciadores fitness",
                    "Amigos/familiares",
                    "Metas pessoais"
                ]
            },
            {
                question: "Qual seu principal objetivo ao treinar?",
                options: [
                    "Ganhar massa muscular",
                    "Perder gordura",
                    "Melhorar condicionamento",
                    "Definição muscular",
                    "Saúde geral"
                ]
            },
            {
                question: "Qual seu maior desafio para manter a rotina?",
                options: [
                    "Falta de tempo",
                    "Procrastinação",
                    "Resultados demorados",
                    "Motivação inconstante",
                    "Cansaço/stress"
                ]
            },
            {
                question: "Quanto tempo você pode dedicar aos treinos?",
                options: [
                    "30 minutos/dia",
                    "1 hora/dia",
                    "1-2 horas/dia",
                    "2+ horas/dia",
                    "Tempo flexível"
                ]
            }
        ]
    };

    let currentQuestion = 0;
    let answers = [];

    const startButton = document.getElementById('startButton');
    const quizStart = document.getElementById('quizStart');
    const quizQuestions = document.getElementById('quizQuestions');
    const quizResult = document.getElementById('quizResult');
    const questionText = document.getElementById('questionText');
    const optionsContainer = document.getElementById('optionsContainer');
    const progress = document.getElementById('progress');

    startButton.addEventListener('click', startQuiz);

    function startQuiz() {
        quizStart.style.display = 'none';
        quizQuestions.style.display = 'block';
        showQuestion();
    }

    function showQuestion() {
        const question = quizData.questions[currentQuestion];
        questionText.textContent = question.question;
        progress.style.width = `${(currentQuestion + 1) * 20}%`;
        
        optionsContainer.innerHTML = question.options.map((option, index) => `
            <button class="option-button" onclick="selectOption(${index})">
                ${option}
            </button>
        `).join('');

        // Adiciona os event listeners para as opções
        document.querySelectorAll('.option-button').forEach((button, index) => {
            button.addEventListener('click', () => selectOption(index));
        });
    }

    function selectOption(index) {
        answers.push(index);
        
        if (currentQuestion < quizData.questions.length - 1) {
            currentQuestion++;
            showQuestion();
        } else {
            showResult();
        }
    }

    function showResult() {
        quizQuestions.style.display = 'none';
        quizResult.style.display = 'block';
        
        const profile = determineProfile(answers);
        document.getElementById('resultProfile').textContent = profile.title;
        document.getElementById('resultDescription').textContent = profile.description;
    }

    function determineProfile(answers) {
        const sum = answers.reduce((a, b) => a + b, 0);
        
        const profiles = {
            warrior: {
                title: "Guerreiro(a) Determinado",
                description: "Você tem uma forte motivação interna e é focado em resultados. O ideal é um programa desafiador com metas progressivas."
            },
            changeMaker: {
                title: "Buscador(a) de Mudança",
                description: "Você é motivado pela transformação e foca no processo. Um acompanhamento próximo será perfeito para sua jornada."
            },
            athlete: {
                title: "Atleta em Construção",
                description: "Você é motivado por performance e evolução. Metas claras e progressivas serão essenciais para seu sucesso."
            },
            lifestyle: {
                title: "Lifestyle Fitness",
                description: "Você busca qualidade de vida e equilíbrio. Um programa flexível e adaptável será ideal para seus objetivos."
            }
        };

        if (sum <= 8) return profiles.lifestyle;
        if (sum <= 12) return profiles.changeMaker;
        if (sum <= 16) return profiles.athlete;
        return profiles.warrior;
    }
});


