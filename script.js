// ============================================================
// DADOS - ARRAY DE OBJETOS (Cards, Acordeão, Galeria)
// ============================================================

// Cards da seção "Colheita de Batatas"
const cardsData = [
    {
        icon: 'fa-seedling',
        title: 'Rotação de Culturas',
        description: 'Alternar batata com leguminosas melhora o solo, reduz pragas e aumenta a biodiversidade.'
    },
    {
        icon: 'fa-tint',
        title: 'Irrigação Inteligente',
        description: 'Sistemas de gotejamento e captação de água da chuva reduzem o consumo em até 40%.'
    },
    {
        icon: 'fa-leaf',
        title: 'Controle Biológico',
        description: 'Uso de predadores naturais e fungos benéficos elimina a necessidade de defensivos químicos.'
    },
    {
        icon: 'fa-recycle',
        title: 'Compostagem',
        description: 'Resíduos da colheita viram adubo orgânico, fechando o ciclo de nutrientes no solo.'
    },
    {
        icon: 'fa-sun',
        title: 'Energia Solar',
        description: 'Bombas e maquinários movidos a energia limpa reduzem a pegada de carbono da produção.'
    },
    {
        icon: 'fa-hand-holding-heart',
        title: 'Agricultura Familiar',
        description: 'Fortalecimento de pequenos produtores com técnicas sustentáveis e certificação justa.'
    }
];

// Dados do Acordeão (Seção Equilíbrio)
const accordionData = [
    {
        title: '🌱 Solo vivo e produtivo',
        content: 'A batata prospera em solos ricos em matéria orgânica. Plantio direto, cobertura morta e biofertilizantes mantêm a vida no solo, aumentando a retenção de água e nutrientes.'
    },
    {
        title: '💧 Água: recurso precioso',
        content: 'A irrigação por gotejamento e o monitoramento da umidade do solo reduzem o desperdício. A captação de água da chuva complementa a demanda sem sobrecarregar aquíferos.'
    },
    {
        title: '🐝 Biodiversidade no campo',
        content: 'Cercas vivas, faixas de flores e rotação de culturas atraem polinizadores e inimigos naturais de pragas, criando um ecossistema equilibrado e resiliente.'
    }
];

// Dados da Galeria (Carrossel)
const galleryData = [
    { image: 'https://images.unsplash.com/photo-1587307718953-9ac016fb2084?w=800&h=400&fit=crop', alt: 'Campo de batatas em flor', caption: 'Florescência da batata: beleza e produtividade' },
    { image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&h=400&fit=crop', alt: 'Colheita manual de batatas', caption: 'Colheita manual: tradição e cuidado' },
    { image: 'https://images.unsplash.com/photo-1587307718832-2c5cb2e0094d?w=800&h=400&fit=crop', alt: 'Batatas recém-colhidas', caption: 'Batatas orgânicas: sabor e sustentabilidade' },
    { image: 'https://images.unsplash.com/photo-1587307719010-3e4b1d8e0fa5?w=800&h=400&fit=crop', alt: 'Sistema de irrigação sustentável', caption: 'Tecnologia a serviço da água' }
];

// ============================================================
// RENDERIZAÇÃO DOS CARDS
// ============================================================
function renderCards() {
    const container = document.getElementById('cards-container');
    if (!container) return;
    
    container.innerHTML = cardsData.map((card, index) => `
        <div class="card" role="listitem" data-index="${index}">
            <i class="fas ${card.icon}" aria-hidden="true"></i>
            <h3>${card.title}</h3>
            <p>${card.description}</p>
        </div>
    `).join('');
}

// ============================================================
// RENDERIZAÇÃO DO ACORDEÃO
// ============================================================
function renderAccordion() {
    const container = document.getElementById('accordion-container');
    if (!container) return;
    
    container.innerHTML = accordionData.map((item, index) => `
        <div class="accordion-item" role="tab" aria-expanded="false">
            <button class="accordion-header" aria-controls="accordion-content-${index}" id="accordion-header-${index}">
                <span>${item.title}</span>
                <span class="icon"><i class="fas fa-chevron-down" aria-hidden="true"></i></span>
            </button>
            <div class="accordion-content" id="accordion-content-${index}" role="tabpanel" aria-labelledby="accordion-header-${index}">
                <p>${item.content}</p>
            </div>
        </div>
    `).join('');
    
    // Adicionar eventos de clique para cada acordeão
    document.querySelectorAll('.accordion-item').forEach((item, index) => {
        const header = item.querySelector('.accordion-header');
        header.addEventListener('click', function(e) {
            e.stopPropagation();
            const isActive = item.classList.contains('active');
            
            // Fechar todos os outros acordeões
            document.querySelectorAll('.accordion-item').forEach(el => {
                if (el !== item) {
                    el.classList.remove('active');
                    el.setAttribute('aria-expanded', 'false');
                }
            });
            
            // Alternar o clicado
            if (isActive) {
                item.classList.remove('active');
                item.setAttribute('aria-expanded', 'false');
            } else {
                item.classList.add('active');
                item.setAttribute('aria-expanded', 'true');
            }
        });
    });
}

// ============================================================
// RENDERIZAÇÃO DO CARROSSEL
// ============================================================
let currentSlide = 0;
let carouselInterval;

function renderCarousel() {
    const track = document.getElementById('carousel-track');
    const indicators = document.getElementById('carousel-indicators');
    if (!track || !indicators) return;
    
    // Renderizar slides
    track.innerHTML = galleryData.map((item, index) => `
        <div class="carousel-slide" data-index="${index}" role="tabpanel">
            <img src="${item.image}" alt="${item.alt}" loading="lazy">
            <p>${item.caption}</p>
        </div>
    `).join('');
    
    // Renderizar indicadores
    indicators.innerHTML = galleryData.map((_, index) => `
        <button role="tab" aria-label="Slide ${index + 1}" data-slide="${index}" class="${index === 0 ? 'active' : ''}"></button>
    `).join('');
    
    // Adicionar eventos aos indicadores
    indicators.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', function() {
            const slideIndex = parseInt(this.getAttribute('data-slide'));
            goToSlide(slideIndex);
        });
    });
    
    // Configurar botões do carrossel
    document.querySelector('.carousel-btn.prev')?.addEventListener('click', () => {
        goToSlide(currentSlide - 1);
        resetCarouselInterval();
    });
    
    document.querySelector('.carousel-btn.next')?.addEventListener('click', () => {
        goToSlide(currentSlide + 1);
        resetCarouselInterval();
    });
    
    // Iniciar autoplay
    startCarouselInterval();
}

function goToSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.carousel-indicators button');
    
    if (!slides.length) return;
    
    // Ajustar índice circular
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    
    currentSlide = index;
    
    // Mover track
    const track = document.getElementById('carousel-track');
    if (track) {
        track.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
    
    // Atualizar indicadores
    indicators.forEach((btn, i) => {
        btn.classList.toggle('active', i === currentSlide);
        btn.setAttribute('aria-selected', i === currentSlide);
    });
    
    // Atualizar aria-expanded dos slides
    slides.forEach((slide, i) => {
        slide.setAttribute('aria-hidden', i !== currentSlide);
    });
}

function startCarouselInterval() {
    if (carouselInterval) clearInterval(carouselInterval);
    carouselInterval = setInterval(() => {
        goToSlide(currentSlide + 1);
    }, 5000);
}

function resetCarouselInterval() {
    clearInterval(carouselInterval);
    startCarouselInterval();
}

// ============================================================
// SCROLL REVEAL
// ============================================================
function handleScrollReveal() {
    const revealElements = document.querySelectorAll('.scroll-reveal');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
    
    revealElements.forEach(el => observer.observe(el));
}

// ============================================================
// ACESSIBILIDADE - AUMENTAR/DIMINUIR FONTE
// ============================================================
let currentFontSize = 1;

function changeFontSize(delta) {
    const newSize = Math.min(Math.max(currentFontSize + delta, 0.8), 1.4);
    currentFontSize = newSize;
    document.body.style.fontSize = `${newSize}rem`;
}

// ============================================================
// ACESSIBILIDADE - ALTO CONTRASTE
// ============================================================
function toggleHighContrast() {
    document.body.classList.toggle('high-contrast');
    const isHighContrast = document.body.classList.contains('high-contrast');
    localStorage.setItem('highContrast', isHighContrast);
}

// ============================================================
// INICIALIZAÇÃO
// ============================================================
function init() {
    // Renderizar componentes
    renderCards();
    renderAccordion();
    renderCarousel();
    
    // Scroll Reveal
    handleScrollReveal();
    
    // Eventos de acessibilidade
    document.getElementById('aumentar-fonte')?.addEventListener('click', () => changeFontSize(0.1));
    document.getElementById('diminuir-fonte')?.addEventListener('click', () => changeFontSize(-0.1));
    document.getElementById('alto-contraste')?.addEventListener('click', toggleHighContrast);
    
    // Restaurar estado do alto contraste
    if (localStorage.getItem('highContrast') === 'true') {
        document.body.classList.add('high-contrast');
    }
    
    // Iniciar carrossel na primeira posição
    goToSlide(0);
}

// Iniciar quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', init);