import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import Logo from '../../assets/image/logo.jpg';
import './header.scss';

function Header() {
  // Estado para controlar se o menu mobile está aberto ou fechado
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Variantes de animação para o menu mobile
  // Define como o menu aparece (hidden) e some (visible)
  const menuVariants = {
    hidden: { opacity: 0, y: -20 }, // Invisível e 20px acima
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } } // Visível na posição normal
  };

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__content">
          {/* Logo da empresa */}
          <div className="header__logo-wrapper">
            <img 
              className="header__logo" 
              src={Logo} 
              alt="PASSOIA - SKINCARE & MAKE UP" 
            />
          </div>

          {/* Menu de navegação para desktop (escondido no mobile) */}
          <nav className="header__nav">
            {/* Mapeamento dos 3 links principais (Looks, Lançamentos, Novidades) */}
            {['#looks', '#lancamentos', '#novidades'].map((href, index) => (
              <motion.a
                key={index}
                href={href}
                whileHover={{ scale: 1.05 }} // Aumenta 5% ao passar o mouse
                transition={{ duration: 0.2 }}
              >
                {/* Remove o # e transforma em maiúsculas para exibição */}
                {href.slice(1).toUpperCase()}
              </motion.a>
            ))}
          </nav>

          {/* Botão hambúrguer para abrir/fechar menu mobile (apenas visível no mobile) */}
          <button 
            className="header__menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} // Alterna entre aberto/fechado
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'} // Acessibilidade
            aria-expanded={mobileMenuOpen} // Indica se o menu está expandido
          >
            {/* Alterna entre ícone X (fechar) e Menu (abrir) */}
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu mobile - só aparece quando mobileMenuOpen é true */}
        {mobileMenuOpen && (
          <motion.nav
            className="header__mobile-nav"
            initial="hidden" // Estado inicial da animação
            animate="visible" // Estado final da animação
            variants={menuVariants} // Usa as variantes definidas acima
          >
            {/* Links de navegação do menu mobile */}
            <a href="#looks" onClick={() => setMobileMenuOpen(false)}>LOOKS</a>
            <a href="#lancamentos" onClick={() => setMobileMenuOpen(false)}>LANÇAMENTOS</a>
            <a href="#novidades" onClick={() => setMobileMenuOpen(false)}>NOVIDADES</a>
          </motion.nav>
        )}
      </div>
    </header>
  );
}

export default Header;