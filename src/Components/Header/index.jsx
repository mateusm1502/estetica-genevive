import React from 'react';
import './style.css';

export default function Header({ setPaginaAtual }) {
  return (
    <header class="navbar">
      <div class="logo" onClick={() => setPaginaAtual('home')}>Genevive</div>
      <nav>
        <ul class="nav-links">
          <li><button onClick={() => setPaginaAtual('home')}>Início</button></li>
          <li><button onClick={() => setPaginaAtual('pag1')}>Facial</button></li>
          <li><button onClick={() => setPaginaAtual('pag2')}>Corporal</button></li>
          <li><button onClick={() => setPaginaAtual('pag3')}>Laser</button></li>
          <li><button onClick={() => setPaginaAtual('pag4')}>Tecnologias</button></li>
          <li><button onClick={() => setPaginaAtual('pag5')}>Contato</button></li>
        </ul>
      </nav>
    </header>
  );
}