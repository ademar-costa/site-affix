import React, { useEffect, useState } from 'react';
import './ContatoPage.css';

function ContatoPage() {
  
  // Rola para o topo ao abrir
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Estado para controlar os campos do formulário
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: ''
  });

  // Função para atualizar o estado quando o usuário digita
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Função chamada ao enviar o formulário
  const handleSubmit = (e) => {
    e.preventDefault(); // Impede o recarregamento da página
    
    // AQUI entraria a lógica de enviar para um backend real.
    // Por enquanto, apenas mostramos um alerta.
    alert(`Obrigado, ${formData.nome}! Sua mensagem foi enviada com sucesso (Simulação).`);
    
    // Limpa o formulário
    setFormData({ nome: '', email: '', assunto: '', mensagem: '' });
  };

  return (
    <>
      <header className="page-header">
        <h1 className="page-title">Fale Conosco</h1>
        <p className="page-subtitle">
          Estamos prontos para atender sua empresa. Entre em contato pelos canais abaixo.
        </p>
      </header>

      <section className="contact-section">
        <div className="contact-grid">
          
          {/* COLUNA 1: Informações e WhatsApp */}
          <div className="contact-info-col">
            <h2>Canais de Atendimento</h2>
            
            <div className="info-item">
              <span className="info-icon">📍</span>
              <div className="info-content">
                <h4>Endereço</h4>
                <p>Av. Paulista, 1000 - Bela Vista<br/>São Paulo - SP, 01310-100</p>
              </div>
            </div>

            <div className="info-item">
              <span className="info-icon">📧</span>
              <div className="info-content">
                <h4>E-mail</h4>
                <p>contato@affixfidc.com.br</p>
                <p>comercial@affixfidc.com.br</p>
              </div>
            </div>

            <div className="info-item">
              <span className="info-icon">📞</span>
              <div className="info-content">
                <h4>Telefone</h4>
                <p>+55 (11) 3333-4444</p>
              </div>
            </div>

            {/* Box de WhatsApp */}
            <div className="whatsapp-box">
              <h3>Precisa de agilidade?</h3>
              <p>Fale diretamente com nossa equipe comercial pelo WhatsApp.</p>
              
              {/* Link para API do WhatsApp. 
                  Substitua o número 5511999999999 pelo real quando tiver. */}
              <a 
                href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Affix%20FIDC." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="whatsapp-button"
              >
                <span>📱</span> Iniciar Conversa
              </a>
            </div>
          </div>

          {/* COLUNA 2: Formulário de E-mail */}
          <div className="contact-form-col">
            <h2>Envie uma Mensagem</h2>
            <form onSubmit={handleSubmit}>
              
              <div className="form-group">
                <label htmlFor="nome">Nome Completo</label>
                <input 
                  type="text" 
                  id="nome" 
                  name="nome" 
                  required 
                  placeholder="Ex: João da Silva"
                  value={formData.nome}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">E-mail Corporativo</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  placeholder="Ex: joao@suaempresa.com.br"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="assunto">Assunto</label>
                <input 
                  type="text" 
                  id="assunto" 
                  name="assunto" 
                  required 
                  placeholder="Ex: Antecipação de Recebíveis"
                  value={formData.assunto}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="mensagem">Mensagem</label>
                <textarea 
                  id="mensagem" 
                  name="mensagem" 
                  rows="5" 
                  required 
                  placeholder="Como podemos ajudar sua empresa?"
                  value={formData.mensagem}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit" className="submit-button">
                Enviar Mensagem
              </button>

            </form>
          </div>

        </div>
      </section>
    </>
  );
}

export default ContatoPage;