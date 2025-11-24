# 💄 PASSOIA - Site de Maquiagem e Skincare

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.4.10-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)

> 🎓 **Desafio Final - Vai na Web**
> 
> E-commerce de maquiagem desenvolvido como projeto final do programa [Vai na Web](https://vainaweb.com.br/). O desafio consistiu em replicar um design do Figma para React, aplicando boas práticas de desenvolvimento, responsividade e acessibilidade.

---

## 📋 Sobre o Projeto

Site responsivo de e-commerce especializado em produtos de maquiagem e skincare, desenvolvido com foco em:

- ✨ **UX/UI**: Interface intuitiva com animações suaves
- 📱 **Responsivo**: Mobile-first, adaptável a todos os dispositivos
- ♿ **Acessível**: Seguindo padrões WCAG com ARIA labels
- ⚡ **Performático**: Lazy loading e otimizações
- 🎨 **Fiel ao Design**: Replicação precisa do Figma com melhorias

---

## ✨ Principais Funcionalidades

- 🏠 **Header** sticky com menu responsivo e smooth scroll
- 🎭 **Banner Hero** animado com fade-in
- 💅 **Seção de Looks** com 4 categorias e animações stagger
- 🛍️ **Showcase de Produto** com:
  - 3 thumbnails clicáveis
  - Seletor de 4 cores interativo
  - Sistema de avaliação (5 estrelas)
  - Botão "Adicionar ao Carrinho" com loading
  - Preço com desconto (33% OFF)
- 🆕 **Banner de Novidades** com hover effect
- 📞 **Footer** com links institucionais, formas de pagamento e redes sociais

---

## 🚀 Tecnologias

- **React 18** - Componentização e hooks
- **Vite** - Build tool ultra-rápido
- **SCSS** - Estilização modular (BEM)
- **Framer Motion** - Animações fluidas
- **Lucide React** - Ícones SVG

---

## 🔧 Instalação e Uso

```bash
# Clone o repositório
git clone https://github.com/SEU_USUARIO/passoia-makeup.git

# Entre na pasta
cd passoia-makeup

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev

# Build para produção
npm run build
```

Acesse: `http://localhost:5173`

---

## 📁 Estrutura

```
src/
├── assets/image/        # Imagens do projeto
├── components/
│   ├── Banner/         # Banner hero
│   ├── Header/         # Cabeçalho
│   └── Footer/         # Rodapé
├── App.jsx             # Componente principal
├── App.scss            # Estilos globais
└── main.jsx            # Entry point
```

---

## 📱 Responsividade

- **Mobile**: < 768px - Menu hambúrguer, grid 2x2
- **Tablet**: 768px - 1023px - Menu completo, grid 4 cols
- **Desktop**: 1024px+ - Layout otimizado, todas as features

---

## ♿ Acessibilidade

- ✅ ARIA labels e roles
- ✅ Navegação por teclado
- ✅ Skip links
- ✅ Alt texts descritivos
- ✅ Respeita `prefers-reduced-motion`
- ✅ Contraste adequado (WCAG AA)

---

## 📄 Licença

MIT License - Veja [LICENSE](LICENSE) para detalhes.

---

## 👤 Autor

**Seu Nome**
- GitHub: [@BeatrizS97](https://github.com/BeatrizS97)
- LinkedIn: [Seu Perfil](https://linkedin.com/in/beatrizsilvasantos-dev)

---

## 🙏 Agradecimentos

- **[Vai na Web](https://vainaweb.com.br/)** - Programa de formação
- Design fornecido via Figma
- [Lucide Icons](https://lucide.dev/) e [Framer Motion](https://www.framer.com/motion/)

---

⭐ **Desenvolvido com 💜 como desafio final do Vai na Web**
