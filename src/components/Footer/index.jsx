import React from 'react';
import { Instagram, Facebook, Youtube, Twitter } from 'lucide-react';
import './footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Grid com 3 colunas: Atendimento, Formas de Pagamento, Redes Sociais */}
        <div className="footer__grid">
          
          {/* Coluna 1: Atendimento ao Cliente */}
          <div className="footer__section">
            <h3 className="footer__title">ATENDIMENTO</h3>
            <ul className="footer__list">
              <li><a href="#" aria-label="Fale Conosco">Fale Conosco</a></li>
              <li><a href="#" aria-label="Perguntas Frequentes">Perguntas Frequentes</a></li>
              <li><a href="#" aria-label="Meus Pedidos">Meus Pedidos</a></li>
              <li><a href="#" aria-label="Nossas Lojas">Nossas Lojas</a></li>
            </ul>
          </div>

          {/* Coluna 2: Formas de Pagamento */}
          <div className="footer__section">
            <h3 className="footer__title">FORMAS DE PAGAMENTO</h3>
            <div className="footer__payment">
              
              {/* Ícone Mastercard - círculos vermelho e amarelo sobrepostos */}
              <div className="footer__payment-icon footer__payment-icon--mastercard" aria-label="Mastercard">
                <div className="mastercard-circles">
                  <div className="circle circle-red"></div>
                  <div className="circle circle-yellow"></div>
                </div>
              </div>
              
              {/* Ícone Visa - texto estilizado */}
              <div className="footer__payment-icon footer__payment-icon--visa" aria-label="Visa">
                <span>VISA</span>
              </div>
              
              {/* Ícone Pix - SVG customizado */}
              <div className="footer__payment-icon footer__payment-icon--pix" aria-label="Pix">
                <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
                  {/* Forma geométrica do logo Pix */}
                  <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18L19.82 8 12 11.82 4.18 8 12 4.18zM4 9.54l7 3.5v7.32l-7-3.5V9.54zm9 10.82v-7.32l7-3.5v7.32l-7 3.5z"/>
                </svg>
              </div>
              
              {/* Ícone Boleto - representação de código de barras */}
              <div className="footer__payment-icon footer__payment-icon--boleto" aria-label="Boleto Bancário">
                <svg viewBox="0 0 40 24" fill="none" width="40" height="24">
                  {/* Barras verticais simulando código de barras */}
                  <rect x="0" width="2" height="24" fill="currentColor"/>
                  <rect x="4" width="1" height="24" fill="currentColor"/>
                  <rect x="7" width="3" height="24" fill="currentColor"/>
                  <rect x="12" width="1" height="24" fill="currentColor"/>
                  <rect x="15" width="2" height="24" fill="currentColor"/>
                  <rect x="19" width="1" height="24" fill="currentColor"/>
                  <rect x="22" width="3" height="24" fill="currentColor"/>
                  <rect x="27" width="2" height="24" fill="currentColor"/>
                  <rect x="31" width="1" height="24" fill="currentColor"/>
                  <rect x="34" width="3" height="24" fill="currentColor"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Coluna 3: Redes Sociais */}
          <div className="footer__section">
            <h3 className="footer__title">SIGA-NOS NAS REDES SOCIAIS</h3>
            <div className="footer__social">
              {/* Link para Instagram - gradiente característico */}
              <a 
                href="#" 
                className="footer__social-link footer__social-link--instagram"
                aria-label="Siga-nos no Instagram"
                target="_blank"
                rel="noopener noreferrer" // Segurança ao abrir em nova aba
              >
                <Instagram size={20} />
              </a>
              
              {/* Link para Facebook - azul característico */}
              <a 
                href="#" 
                className="footer__social-link footer__social-link--facebook"
                aria-label="Siga-nos no Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={20} />
              </a>
              
              {/* Link para YouTube - vermelho característico */}
              <a 
                href="#" 
                className="footer__social-link footer__social-link--youtube"
                aria-label="Siga-nos no YouTube"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube size={20} />
              </a>
              
              {/* Link para Twitter - azul característico */}
              <a 
                href="#" 
                className="footer__social-link footer__social-link--twitter"
                aria-label="Siga-nos no Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;