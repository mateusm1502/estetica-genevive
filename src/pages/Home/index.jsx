import React from 'react';
import './style.css';

 function Home({ setPaginaAtual }) {
  return (
    <div class="home-container">
      <section class="hero-section">
        <h1>Estética Genevive</h1>
        <p>Sua beleza cuidada por especialistas de forma única e personalizada.</p>
        <button class="btn-main" onClick={() => setPaginaAtual('pag5')}>Agende uma Avaliação</button>
      </section>
    </div>
  );
}
export default Home