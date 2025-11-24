import React from 'react';
import { motion } from 'framer-motion';
import './banner.scss';
import bannerImage from '../../assets/image/banner.jpg';

function Banner() {
  return (
    // Section do banner com animação de fade-in ao carregar
    <motion.section
      className="banner"
      initial={{ opacity: 0 }} // Começa invisível
      animate={{ opacity: 1 }} // Anima até ficar visível
      transition={{ duration: 0.8, ease: 'easeInOut' }} // Duração de 0.8s com transição suave
    >
      {/* Imagem principal do banner */}
      <img 
        src={bannerImage}
        alt="Banner Revitalift - Sérum Preenchedor com 1.5% Ácido Hialurônico"
        className="banner__image"
        loading="eager" // Carrega imediatamente (prioritária, não lazy)
      />
    </motion.section>
  );
}

export default Banner;