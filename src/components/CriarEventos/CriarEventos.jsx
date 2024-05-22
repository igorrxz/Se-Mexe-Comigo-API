import React from 'react'
import Input from '../Input/Input'
import './CriarEventos.css'

function CriarEvento() {
  return (
    <div class="DivPai">

        <Input Nome={'Nome do evento'}/>
        <Input Nome={"Modalidade"}/>
        <Input Nome={"Quantidade de participantes"}/>
        
        
        <div className="InputDescricao">
            <textarea placeholder="Descrição"></textarea>
        </div>
        <div class="DivBoddy">
          
          <button class="ButtonProximo">
            <span>Proximo</span>
          </button>
        </div>


    </div>
  )
}

export default CriarEvento