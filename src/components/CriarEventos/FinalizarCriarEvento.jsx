import React from 'react'
import'./FinalizarCriarEvento.css'
import { Link } from 'react-router-dom'


function FinalizarCriarEvento() {
  return (
    <div class="DivPaiCriarEvento">
        <div class="DivImg">
            <img class="ImgCriarEvento" src="https://uploaddeimagens.com.br/images/004/527/556/full/FUNCIONAL.png?1688152616" />
        </div>
        <div class="DivInformacoesEventos">
                <Link to="/">
               <div  className="DivArrow">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m14 7l-5 5l5 5" /></svg>
               </div>
                </Link>

                <div>
                  <span className="TextoCriarEvento">Criar evento</span>
                </div>

        </div>


    </div>
  )
}

export default FinalizarCriarEvento