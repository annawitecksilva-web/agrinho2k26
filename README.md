# 🌱 Agrinho - Landing Page "Agro forte: futuro sustentável"

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Acessibilidade-WCAG_2.1-005A9C?style=for-the-badge" alt="Acessibilidade">
  <img src="https://img.shields.io/badge/Responsivo-Mobile_First-4BC51B?style=for-the-badge" alt="Responsivo">
</p>

## 📋 Sobre o Projeto

Landing Page de página única desenvolvida para o **Concurso Agrinho**, com o tema **"Agro forte: futuro sustentável"**. O projeto aborda a colheita de batatas e o equilíbrio entre produção agrícola e preservação ambiental, combinando design responsivo, acessibilidade e boas práticas de desenvolvimento.

### 🎯 Objetivos

- 🌾 Demonstrar práticas sustentáveis na produção de batatas
- 🌍 Conscientizar sobre o equilíbrio entre agricultura e meio ambiente
- ♿ Oferecer uma experiência digital acessível e inclusiva
- 🌱 Inspirar jovens a repensar o futuro do campo

## 🚀 Funcionalidades

### 🌐 Interface e Design

- **Design System com CSS Variables**: Cores, espaçamentos e arredondamentos centralizados
- **Layout Responsivo**: Mobile-First com CSS Grid e Flexbox
- **Scroll Reveal**: Animações suaves ao rolar a página
- **Modo Alto Contraste**: Acessível para usuários com deficiência visual

### ♿ Acessibilidade

- **Tags Semânticas**: HTML5 semântico (header, main, section, article, footer)
- **Atributos ARIA**: Navegação por leitores de tela
- **Controle de Fonte**: Aumento/diminuição global do tamanho da fonte
- **Navegação por Teclado**: Todos os elementos interativos acessíveis via teclado

### 🧩 Componentes Dinâmicos

- **Cards Interativos**: Práticas sustentáveis com ícones e descrições
- **Sistema de Acordeão**: Conteúdo expansível sobre equilíbrio ambiental
- **Carrossel Funcional**: Galeria de imagens com autoplay e indicadores

### 📊 Gestão de Dados

- **Renderização Dinâmica**: Todo o conteúdo repetitivo gerado via JavaScript
- **Array de Objetos**: Dados centralizados e facilmente editáveis
- **Código Modular**: Fácil manutenção e escalabilidade

## 📁 Estrutura de Arquivos

```
agrinho-landing-page/
├── index.html          # Estrutura HTML (semântica e acessível)
├── style.css          # Estilos com Design System e responsividade
├── script.js          # Lógica, dados e interatividade
└── README.md          # Documentação do projeto
```

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Tags semânticas e atributos ARIA
- **CSS3**: 
  - Variáveis CSS para Design System
  - CSS Grid e Flexbox para layout responsivo
  - Transições e animações
  - Media Queries (Mobile-First)
- **JavaScript (ES6+)**:
  - Manipulação do DOM
  - Gerenciamento de estado
  - Eventos e interatividade
  - LocalStorage para preferências do usuário
- **Font Awesome**: Ícones vetoriais
- **Intersection Observer API**: Scroll Reveal
- **Unsplash**: Imagens de alta qualidade (via URL)

## 🎨 Personalização

### Cores Primárias

No arquivo `style.css`, localize a seção `:root` para alterar as cores:

```css
:root {
    /* ---------- CORES PRIMÁRIAS ---------- */
    --primary: #2D6A4F;      /* Verde escuro - principal */
    --primary-light: #40916C; /* Verde médio */
    --primary-lighter: #52B788; /* Verde claro */
    --secondary: #D4A373;    /* Terroso - contraste */
    --accent: #F4A261;       /* Laranja suave */
    
    /* ---------- CORES NEUTRAS ---------- */
    --bg: #F8F9FA;           /* Fundo claro */
    --text: #1A1A1A;         /* Texto principal */
    --text-light: #4A4A4A;   /* Texto secundário */
    --white: #FFFFFF;
    --shadow: rgba(45, 106, 79, 0.15);
}
```

### Grid de Cards

Modifique o número de colunas na seção `.grid-cards`:

```css
/* ============================================================
   ALTERE AQUI O grid-template-columns PARA MAIS/MENOS COLUNAS
   ============================================================ */
.grid-cards {
    display: grid;
    grid-template-columns: 1fr;  /* Mobile: 1 coluna */
    gap: var(--space-md);
}

/* Tablet */
@media (min-width: 768px) {
    .grid-cards {
        grid-template-columns: repeat(2, 1fr); /* Tablet: 2 colunas */
    }
}

/* Desktop */
@media (min-width: 1024px) {
    .grid-cards {
        grid-template-columns: repeat(3, 1fr); /* Desktop: 3 colunas */
    }
}
```

### Conteúdo Dinâmico

Edite os arrays no `script.js` para modificar o conteúdo:

```javascript
// ============================================================
// CARDS - Seção "Colheita de Batatas"
// ============================================================
const cardsData = [
    {
        icon: 'fa-seedling',        // Ícone Font Awesome
        title: 'Rotação de Culturas',
        description: 'Sua descrição aqui...'
    },
    // Adicione mais cards...
];

// ============================================================
// ACORDEÃO - Seção "Equilíbrio"
// ============================================================
const accordionData = [
    {
        title: '🌱 Solo vivo e produtivo',
        content: 'Seu conteúdo aqui...'
    }
];

// ============================================================
// GALERIA - Carrossel
// ============================================================
const galleryData = [
    {
        image: 'URL da imagem',
        alt: 'Descrição acessível',
        caption: 'Legenda da imagem'
    }
];
```

## 📱 Responsividade

O layout foi desenvolvido com abordagem **Mobile-First**:

- **Mobile** (até 480px): Layout otimizado para telas pequenas
- **Tablet** (768px - 1023px): Layout adaptado para tablets
- **Desktop** (1024px+): Layout completo para desktops

## ♿ Recursos de Acessibilidade

### Alto Contraste

Clique no ícone de círculo (⬤) na barra de ferramentas para ativar/desativar o alto contraste. A preferência é salva no `localStorage`.

### Controle de Fonte

Botões `+` e `-` na barra de ferramentas permitem ajustar o tamanho da fonte globalmente (0.8rem a 1.4rem).

### Navegação por Teclado

- `Tab`: Navega entre elementos interativos
- `Enter`/`Space`: Ativa botões e links
- `Setas ← →`: Navega no carrossel

## 🔧 Instalação e Uso

1. **Clone o repositório**:
```bash
git clone https://github.com/seu-usuario/agrinho-landing-page.git
```

2. **Abra o arquivo `index.html`** no seu navegador:
```bash
# Ou utilize uma extensão como Live Server no VS Code
```

3. **Personalize** conforme necessário editando os arquivos.

## 📚 Conteúdo do Site

### Seções

1. **Hero**: Apresentação do tema com chamada para ação
2. **Sobre**: Contextualização do concurso Agrinho
3. **Colheita de Batatas**: Cards com práticas sustentáveis
4. **Equilíbrio**: Acordeão com informações detalhadas
5. **Galeria**: Carrossel com imagens do campo sustentável

### Temas Abordados

- 🌱 Rotação de culturas
- 💧 Irrigação inteligente
- 🐛 Controle biológico
- ♻️ Compostagem
- ☀️ Energia solar
- 🤝 Agricultura familiar
- 🌍 Solo vivo e produtivo
- 🐝 Biodiversidade
- 💚 Conservação de água

## 🎯 Critérios de Avaliação

- ✅ Tags semânticas HTML5 e atributos ARIA
- ✅ Design System com CSS Variables
- ✅ Layout Responsivo (Mobile-First)
- ✅ Modo Alto Contraste
- ✅ Animações Scroll Reveal
- ✅ Renderização dinâmica via JavaScript
- ✅ Controle de tamanho da fonte
- ✅ Carrossel funcional
- ✅ Sistema de acordeão
- ✅ Código modular e comentado

## 🧪 Testes Realizados

- ✅ Validação W3C (HTML e CSS)
- ✅ Teste de contraste (WCAG 2.1 AA)
- ✅ Navegação por teclado
- ✅ Leitor de tela (NVDA/VoiceOver)
- ✅ Dispositivos móveis e tablets
- ✅ Diferentes navegadores (Chrome, Firefox, Safari, Edge)

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto é de uso educacional e está sob a licença MIT.

## 👨‍💻 Desenvolvedor

**Full-Stack Developer** com foco em UX e Acessibilidade

- 🌐 [GitHub](https://github.com/seu-usuario)
- 💼 [LinkedIn](https://linkedin.com/in/seu-usuario)

---

## 📸 Preview

### Desktop
![Desktop Preview](https://via.placeholder.com/800x400/2D6A4F/FFFFFF?text=Agrinho+-+Desktop+View)

### Mobile
![Mobile Preview](https://via.placeholder.com/300x600/2D6A4F/FFFFFF?text=Agrinho+-+Mobile+View)

---

<p align="center">
  <strong>🌱 Feito com ❤️ para um futuro agrícola mais sustentável e acessível 🌱</strong>
</p>

<p align="center">
  <sub>Concurso Agrinho - Agro forte: futuro sustentável</sub>
</p>