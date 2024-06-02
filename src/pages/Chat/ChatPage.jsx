import React from 'react';
import './ChatPage.css'
import Chat from '../../common/components/UserChat/UserChat';

import logoEvento from '../../assets/logo-evento.png';
import removeButton from '../../assets/remove-button.png';

function Evento() {
  return (
    <>
    <div className="background"></div>
    <div className="Evento">
      <div className="titulo">
        <a href="#">
          <img src={logoEvento} alt="Ícone do Evento" className="icone-evento" />
        </a>

        <a href="#">
          <img src={removeButton} alt="Botão de Fechar" className="botao-fechar" />
        </a>

        <h2>
          Evento Teste - 09/04 15:30 - 16:30
        </h2>

        <hr className="custom-line" />

        <Chat />
      </div>
    </div>
    </>
  );
}

export default Evento;
