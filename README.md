# 💄 PASSOIA - Site de Maquiagem e Skincare

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.4.10-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)

> 🎓 **Projeto de Desafio Final - Vai na Web**
> 
> Site moderno e responsivo para e-commerce de produtos de maquiagem e skincare, desenvolvido como desafio final do programa **Vai na Web**. O projeto consistiu em replicar um design do Figma para React, aplicando boas práticas de desenvolvimento, acessibilidade e performance.

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias](#-tecnologias)
- [Estrutura de Pastas](#-estrutura-de-pastas)
- [Instalação](#-instalação)
- [Como Usar](#-como-usar)
- [Componentes](#-componentes)
- [Acessibilidade](#-acessibilidade)
- [Responsividade](#-responsividade)
- [Melhorias Futuras](#-melhorias-futuras)
- [Licença](#-licença)

---

## 🎯 Sobre o Projeto

O **PASSOIA** é um site de e-commerce especializado em produtos de maquiagem e skincare, desenvolvido como **desafio final do programa Vai na Web**.

### 🎓 Contexto do Desafio

Este projeto faz parte do desafio final do programa de formação em desenvolvimento web da **[Vai na Web](https://vainaweb.com.br/)**, onde o objetivo era:

1. 📐 **Replicar fielmente** um design fornecido no Figma
2. ⚛️ **Converter para React** com componentização adequada
3. 📱 **Implementar responsividade** para todos os dispositivos
4. ♿ **Aplicar acessibilidade** seguindo padrões WCAG
5. ⚡ **Otimizar performance** com lazy loading e animações suaves
6. 🎨 **Adicionar interatividade** além do design estático

### 🎯 Objetivos Alcançados

- ✨ **Experiência do Usuário**: Interface intuitiva e animações suaves
- 📱 **Responsividade**: Design adaptável para mobile, tablet e desktop
- ♿ **Acessibilidade**: Implementação de práticas WCAG e ARIA
- ⚡ **Performance**: Lazy loading, otimização de imagens e carregamento rápido
- 🎨 **Design Moderno**: Fidelidade ao Figma com melhorias de UX
- 🚀 **Funcionalidades Extras**: Carousel de produtos, seletor de cores interativo, animações

---

## ✨ Funcionalidades

### 🏠 Header
- Menu de navegação responsivo
- Menu hambúrguer animado para mobile
- Smooth scroll para seções da página
- Header sticky (fixo no topo ao rolar)

### 🎭 Banner Hero
- Banner principal com imagem de destaque
- Animação de fade-in ao carregar
- Responsivo com alturas adaptativas

### 💅 Seção de Looks
- Grid responsivo com 4 categorias (Lábios, Olhos, Rosto, Tendência)
- Cards com animação stagger (aparição escalonada)
- Efeito de zoom nas imagens ao hover
- Overlay com gradiente e títulos

### 🛍️ Seção de Lançamentos
- Showcase de produto com múltiplas visualizações
- **3 thumbnails clicáveis** que trocam a imagem principal
- **Seletor de 4 cores interativo** com preview instantâneo
- Sistema de avaliação com 5 estrelas
- Preços com desconto destacado (33% OFF)
- Botão "Adicionar ao Carrinho" com animação de loading
- Descrição detalhada do produto

### 🆕 Seção de Novidades
- Banner de novidades responsivo
- Efeito de zoom suave ao hover
- Imagem adaptativa por breakpoint

### 📞 Footer
- Grid com 3 colunas: Atendimento, Pagamento, Redes Sociais
- Links para páginas institucionais
- Ícones customizados de formas de pagamento (Mastercard, Visa, Pix, Boleto)
- Links para redes sociais com cores oficiais

### 🎨 Recursos Adicionais
- **Loading screen** inicial com spinner animado
- **Lazy loading** em todas as imagens (exceto prioritárias)
- **Skip link** para navegação por teclado
- **Smooth scroll** em toda a navegação
- **Animações** respeitando `prefers-reduced-motion`

---

## 🚀 Tecnologias

### Core
- **React 18.3.1** - Biblioteca JavaScript para construção de interfaces
- **Vite 5.4.10** - Build tool e dev server ultra-rápido
- **JavaScript (ES6+)** - Linguagem de programação

### Estilização
- **SCSS** - Pré-processador CSS para estilos modulares
- **BEM Methodology** - Convenção de nomenclatura CSS

### Animações e Interações
- **Framer Motion 11.11.17** - Biblioteca de animações para React
- **Lucide React 0.460.0** - Ícones SVG modernos e leves

### Desenvolvimento
- **ESLint** - Linter para qualidade de código
- **Vite Plugin React** - Suporte a React no Vite

---

## 📁 Estrutura de Pastas

```
passoia-makeup/
├── public/                    # Assets estáticos
├── src/
│   ├── assets/
│   │   └── image/            # Todas as imagens do projeto
│   │       ├── banner.jpg
│   │       ├── logo.jpg
│   │       ├── labios.jpg
│   │       ├── olhos.jpg
│   │       ├── rosto.jpg
│   │       ├── tendencia.jpg
│   │       ├── product-*.jpg
│   │       ├── novidades.jpg
│   │       └── react.svg
│   ├── components/
│   │   ├── Banner/
│   │   │   ├── index.jsx     # Componente do banner hero
│   │   │   └── banner.scss   # Estilos do banner
│   │   ├── Header/
│   │   │   ├── index.jsx     # Componente do cabeçalho
│   │   │   └── header.scss   # Estilos do header
│   │   └── Footer/
│   │       ├── index.jsx     # Componente do rodapé
│   │       └── footer.scss   # Estilos do footer
│   ├── App.jsx               # Componente principal
│   ├── App.scss              # Estilos globais e seções
│   └── main.jsx              # Ponto de entrada do React
├── index.html                # HTML principal
├── vite.config.js            # Configuração do Vite
├── eslint.config.js          # Configuração do ESLint
├── package.json              # Dependências do projeto
├── .gitignore                # Arquivos ignorados pelo Git
└── README.md                 # Este arquivo
```

---

## 🔧 Instalação

### Pré-requisitos
- **Node.js** (versão 16 ou superior)
- **npm** ou **yarn**

### Passos

1. **Clone o repositório**
```bash
git clone https://github.com/SEU_USUARIO/passoia-makeup.git
cd passoia-makeup
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
```

3. **Inicie o servidor de desenvolvimento**
```bash
npm run dev
# ou
yarn dev
```

4. **Acesse no navegador**
```
http://localhost:5173
```

---

## 💻 Como Usar

### Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento

# Build de Produção
npm run build        # Gera build otimizado na pasta dist/

# Preview do Build
npm run preview      # Visualiza o build de produção localmente

# Linting
npm run lint         # Executa ESLint para verificar código
```

### Build para Produção

```bash
# Gerar build otimizado
npm run build

# Testar build localmente
npm run preview
```

Os arquivos otimizados estarão na pasta `dist/`

---

## 🧩 Componentes

### Header
**Localização:** `src/components/Header/`

**Props:** Nenhuma

**Funcionalidades:**
- Logo responsiva
- Menu desktop com 3 links
- Menu mobile com animação
- Smooth scroll para seções

---

### Banner
**Localização:** `src/components/Banner/`

**Props:** Nenhuma

**Funcionalidades:**
- Imagem hero responsiva
- Animação de fade-in
- Alturas adaptativas (500px → 750px)

---

### Footer
**Localização:** `src/components/Footer/`

**Props:** Nenhuma

**Funcionalidades:**
- Grid responsivo (1 → 3 colunas)
- Links institucionais
- Ícones de pagamento customizados
- Links de redes sociais

---

### App (Principal)
**Localização:** `src/App.jsx`

**Estados Gerenciados:**
- `loading` - Controla tela de carregamento
- `currentImage` - Imagem principal do produto
- `selectedColor` - Cor selecionada do produto
- `selectedThumbnail` - Thumbnail ativa
- `isAddingToCart` - Loading do botão de carrinho

**Seções:**
1. Looks e Dicas (4 cards animados)
2. Lançamentos (showcase de produto)
3. Novidades (banner promocional)

---

## ♿ Acessibilidade

O projeto implementa diversas práticas de acessibilidade:

### ARIA Labels
- Todos os botões e links possuem `aria-label` descritivos
- Elementos interativos com `role` apropriado
- Estados com `aria-checked` e `aria-selected`

### Navegação por Teclado
- Skip link para pular ao conteúdo principal
- Focus visível em todos os elementos interativos
- Outline personalizado em foco

### Semântica HTML
- Tags HTML5 semânticas (`<header>`, `<main>`, `<section>`, `<footer>`)
- Hierarquia correta de headings (h1-h6)
- Uso apropriado de landmarks

### Screen Readers
- Classe `.sr-only` para textos apenas para leitores de tela
- Alt texts descritivos em todas as imagens
- Textos de contexto em ícones

### Preferências do Usuário
- Respeita `prefers-reduced-motion` para animações
- Contraste de cores adequado (WCAG AA)

---

## 📱 Responsividade

### Breakpoints

```scss
// Mobile First Approach
mobile:    < 640px   (padrão)
sm:        640px+    
md:        768px+    (tablet)
lg:        1024px+   (desktop)
xl:        1280px+   (desktop large)
2xl:       1440px+   (desktop extra large)
```

### Comportamentos por Dispositivo

#### Mobile (< 768px)
- Menu hambúrguer
- Grid 2x2 nos looks
- Produto empilhado (imagem acima, info abaixo)
- Footer em coluna única
- Thumbnails horizontais

#### Tablet (768px - 1023px)
- Menu hamburger ou desktop (depende do layout)
- Grid 4 colunas nos looks
- Produto lado a lado 50/50
- Footer em 3 colunas

#### Desktop (1024px+)
- Menu desktop completo
- Grid 4 colunas nos looks
- Produto 45/55 (imagem/info)
- Footer em 3 colunas com espaçamento ideal
- Thumbnails verticais

---

## 🚀 Melhorias Futuras

### Funcionalidades
- [ ] Integração com carrinho de compras real
- [ ] Sistema de autenticação de usuários
- [ ] Integração com gateway de pagamento
- [ ] Sistema de busca de produtos
- [ ] Filtros por categoria e preço
- [ ] Wishlist (lista de desejos)
- [ ] Sistema de reviews e avaliações

### Técnicas
- [ ] Implementar testes unitários (Jest + React Testing Library)
- [ ] Adicionar testes E2E (Cypress)
- [ ] Implementar PWA (Progressive Web App)
- [ ] Adicionar SEO avançado (meta tags dinâmicas)
- [ ] Implementar SSR (Server-Side Rendering) com Next.js
- [ ] Adicionar analytics (Google Analytics / Hotjar)
- [ ] Implementar CDN para imagens

### Design
- [ ] Dark mode
- [ ] Mais animações micro-interactions
- [ ] Galeria de imagens do produto com zoom
- [ ] Vídeos de demonstração dos produtos
- [ ] Seção de blog/tutoriais

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👤 Autor

**Seu Nome**
- GitHub: [@seu-usuario](https://github.com/seu-usuario)
- LinkedIn: [Seu Perfil](https://linkedin.com/in/seu-perfil)

---

## 🙏 Agradecimentos

- **[Vai na Web](https://vainaweb.com.br/)** - Pelo programa de formação e pelo desafio
- Design Original: Fornecido via Figma pelo programa
- Ícones: [Lucide Icons](https://lucide.dev/)
- Animações: [Framer Motion](https://www.framer.com/motion/)
- Mentores e colegas do Vai na Web pelo suporte durante o desenvolvimento

---

## 📸 Screenshots

### Desktop
![Desktop Screenshot](./screenshots/desktop.png)

### Mobile
![Mobile Screenshot](./screenshots/mobile.png)

### Tablet
![Tablet Screenshot](./screenshots/tablet.png)

---

## 🌟 Mostre seu apoio

Se este projeto foi útil para você, dê uma ⭐️!

---

**Desenvolvido com 💜 e ☕**