import React, { useState, useEffect } from 'react';
// Removido: import { Star, ShoppingCart, Loader2 } from 'lucide-react';
// Removido: import { motion } from 'framer-motion';
import './App.scss';

// Imports das imagens - Looks
import labiosImg from './assets/image/labios.jpg';
import olhosImg from './assets/image/olhos.jpg';
import rostoImg from './assets/image/rosto.jpg';
import tendenciaImg from './assets/image/tendencia.jpg';

// Imports das imagens - Lançamentos (thumbnails)
import productThumb1 from './assets/image/product-thumb-1.jpg';
import productThumb2 from './assets/image/product-thumb-2.jpg';
import productThumb3 from './assets/image/product-thumb-3.jpg';

// Imports específicos para cada cor
import productLilas from './assets/image/product-lilas.jpg';
import productVermelhoAlaranjado from './assets/image/product-vermelho-alaranjado.jpg';
import productMarrom from './assets/image/mulher-batom-marrom.jpg';
import productBegeEscuro from './assets/image/product-bege-escuro.jpg';

// Import da imagem - Novidades
import novidadesImg from './assets/image/novidades.jpg';

// Import dos componentes
import Header from './components/Header';
import Banner from './components/Banner';
import Footer from './components/Footer';

function App() {
  // Estado para controlar o loading inicial da página
  const [loading, setLoading] = useState(true);
  
  // Estado para armazenar a imagem principal do produto atualmente exibida
  const [currentImage, setCurrentImage] = useState(productLilas);
  
  // Estado para rastrear qual cor está selecionada (inicia com lilás)
  const [selectedColor, setSelectedColor] = useState('#B8A7D6');
  
  // Estado para rastrear qual thumbnail está selecionada (inicia com a primeira - índice 0)
  const [selectedThumbnail, setSelectedThumbnail] = useState(0);
  
  // Estado para controlar o loading do botão "Adicionar ao Carrinho"
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  
  // Estado para controlar a notificação toast
  const [showToast, setShowToast] = useState(false);

  // Effect para simular carregamento inicial da página (1 segundo)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Effect para implementar smooth scroll na navegação
  // Intercepta cliques em links que começam com # e faz scroll suave
  useEffect(() => {
    const handleSmoothScroll = (e) => {
      const href = e.target.getAttribute('href');
      if (href?.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  // Mapa que associa cada código de cor à sua respectiva imagem de produto
  const colorImages = {
    '#B8A7D6': productLilas,
    '#E63946': productVermelhoAlaranjado,
    '#6B2C2C': productMarrom,
    '#E8A598': productBegeEscuro,
  };

  // Mapa que associa cada código de cor ao seu nome descritivo
  const colorNames = {
    '#B8A7D6': 'Lilás',
    '#E63946': 'Vermelho Alaranjado',
    '#6B2C2C': 'Marrom',
    '#E8A598': 'Bege Escuro',
  };

  // Array com as 3 thumbnails laterais do produto
  const thumbnails = [
    { src: productThumb1, alt: 'Produto vista 1' },
    { src: productThumb2, alt: 'Produto vista 2' },
    { src: productThumb3, alt: 'Produto vista 3' }
  ];

  // Função para selecionar uma cor diferente
  // Atualiza a cor selecionada e troca a imagem principal sem animação (mudança instantânea)
  const handleColorSelect = (color) => {
    setSelectedColor(color);
    setCurrentImage(colorImages[color] || productLilas);
  };

  // Função para selecionar uma thumbnail
  // Atualiza qual thumbnail está ativa e muda a imagem principal
  const handleThumbnailClick = (index) => {
    setSelectedThumbnail(index);
    setCurrentImage(thumbnails[index].src);
  };

  // Função simulada para adicionar produto ao carrinho
  // Mostra loading por 1.5s e depois exibe um alert
  const handleAddToCart = () => {
    setIsAddingToCart(true);
    setTimeout(() => {
      setIsAddingToCart(false);
      alert('Produto adicionado ao carrinho! 🛍️');
    }, 1500);
  };

  // Array com os dados dos 4 cards da seção "Looks e Dicas"
  const looksData = [
    { src: labiosImg, alt: 'Lábios', title: 'LÁBIOS' },
    { src: olhosImg, alt: 'Olhos', title: 'OLHOS' },
    { src: rostoImg, alt: 'Rosto', title: 'ROSTO' },
    { src: tendenciaImg, alt: 'Tendência', title: 'TENDÊNCIA' }
  ];

  // Array com as 4 cores disponíveis do produto
  const colors = ['#B8A7D6', '#E63946', '#6B2C2C', '#E8A598'];

  // Se ainda está carregando, mostra tela de loading
  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner">⏳</div> {/* Spinner simples com emoji */}
        <p>Carregando...</p>
      </div>
    );
  }

  return (
    <div className="app">
      {/* Link de acessibilidade para pular direto ao conteúdo principal */}
      <a href="#main-content" className="skip-link">
        Pular para o conteúdo principal
      </a>

      <Header />
      <Banner />

      <main id="main-content">
        {/* Seção: Looks e Dicas de Maquiagem */}
        <section id="looks" className="looks-section" aria-labelledby="looks-title">
          <div className="container">
            <h2 id="looks-title" className="section-title">
              LOOKS E DICAS DE MAQUIAGEM
            </h2>
            
            {/* Grid com os 4 cards de looks - Removido motion pra simplificar, mas pode voltar se quiser */}
            <div className="looks-grid">
              {looksData.map((item, index) => (
                <div
                  key={index}
                  className="looks-card"
                  role="article"
                  aria-label={`Dicas de maquiagem para ${item.title.toLowerCase()}`}
                >
                  <div className="looks-card__image-wrapper">
                    <img 
                      src={item.src} 
                      alt={item.alt}
                      loading="lazy" // Lazy loading para melhorar performance
                    />
                  </div>
                  <div className="looks-card__overlay">
                    <h3>{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Seção: Aproveite os Lançamentos (Produto em destaque) */}
        <section id="lancamentos" className="lancamentos-section" aria-labelledby="lancamentos-title">
          <div className="container">
            <h2 id="lancamentos-title" className="section-title">
              APROVEITE OS LANÇAMENTOS
            </h2>
            
            <div className="lancamentos-content">
              {/* Lado esquerdo: thumbnails + imagem principal */}
              <div className="product-showcase">
                {/* Thumbnails laterais (3 mini imagens clicáveis) */}
                <div className="product-showcase__thumbnails" role="tablist" aria-label="Visualizações do produto">
                  {thumbnails.map((thumb, index) => (
                    <button
                      key={index}
                      className={`thumbnail-btn ${selectedThumbnail === index ? 'thumbnail-btn--active' : ''}`}
                      onClick={() => handleThumbnailClick(index)}
                      aria-label={`Visualização ${index + 1} do produto`}
                      role="tab"
                      aria-selected={selectedThumbnail === index}
                    >
                      <img 
                        src={thumb.src} 
                        alt={thumb.alt}
                        loading="lazy"
                      />
                    </button>
                  ))}
                </div>
                
                {/* Imagem principal do produto */}
                <div className="product-showcase__main">
                  <img
                    src={currentImage}
                    alt="Matte Premium - Batom"
                    loading="eager" // Carrega imediatamente (não lazy)
                  />
                </div>
              </div>

              {/* Lado direito: informações do produto */}
              <div className="product-info">
                {/* Avaliação com 5 estrelas - Simplificado com emojis */}
                <div className="product-info__rating" aria-label="Avaliação: 5 de 5 estrelas">
                  {[1,2,3,4,5].map((star) => (
                    <span key={star} className="star-icon" aria-hidden="true">⭐</span>
                  ))}
                  <span className="sr-only">5 estrelas</span>
                </div>
                
                {/* Nome do produto */}
                <h3 className="product-info__title">Matte Premium</h3>
                
                {/* Preços: antigo, atual e desconto */}
                <div className="product-info__price">
                  <span className="price-old">R$ 89,90</span>
                  <span className="price-current">R$ 59,90</span>
                  <span className="price-discount">33% OFF</span>
                </div>

                {/* Texto indicando cores disponíveis + nome da cor selecionada */}
                <p className="product-info__availability">
                  Cores disponíveis - {colorNames[selectedColor]}
                </p>
                
                {/* Seletor de cores (4 círculos coloridos) - Removido motion, mas funciona com CSS */}
                <div className="product-info__colors" role="radiogroup" aria-label="Selecione a cor">
                  {colors.map((color, index) => (
                    <button
                      key={index}
                      className={`color-swatch ${selectedColor === color ? 'color-swatch--selected' : ''}`} 
                      style={{backgroundColor: color}} 
                      aria-label={`Cor ${colorNames[color]}`}
                      aria-checked={selectedColor === color}
                      role="radio"
                      title={`Tom: ${colorNames[color]}`}
                      onClick={() => handleColorSelect(color)}
                    />
                  ))}
                </div>

                {/* Botão para adicionar ao carrinho - SIMPLIFICADO SEM FRAMER/LUCIDE */}
                <button
                  className={`add-to-cart-btn ${isAddingToCart ? 'btn-loading' : ''}`}
                  onClick={handleAddToCart}
                  disabled={isAddingToCart}
                  aria-label="Adicionar produto ao carrinho"
                >
                  {isAddingToCart ? (
                    <>
                      <span className="btn-icon btn-icon--spin">⏳</span> {/* Spinner simples */}
                      Adicionando...
                    </>
                  ) : (
                    <>
                      <span className="btn-icon">🛒</span> {/* Emoji carrinho */}
                      Adicionar ao Carrinho
                    </>
                  )}
                </button>

                {/* Descrição do produto */}
                <h4 className="product-info__subtitle">Descrição</h4>
                <p className="product-info__description">
                  O Batom Matte possui uma fórmula inovadora desenvolvida para entregar o máximo de cor na primeira aplicação com um deslize suave e macio. Tem acabamento matte aveludado e manteiga de manga que ajuda a hidratar e a proteger os lábios contra ressecamento. Ajuda na hidratação dos lábios, textura fina e macia que não pesa nos lábios.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção: Novidades para Você */}
        <section id="novidades" className="novidades-section" aria-labelledby="novidades-title">
          <div className="container">
            <h2 id="novidades-title" className="section-title">
              NOVIDADES PARA VOCÊ
            </h2>
            
            {/* Imagem grande das novidades */}
            <div className="novidades-image">
              <img 
                src={novidadesImg}
                alt="Últimas novidades em produtos de maquiagem e skincare"
                loading="lazy"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;