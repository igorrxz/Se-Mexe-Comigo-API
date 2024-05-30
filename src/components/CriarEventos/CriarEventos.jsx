import React from 'react'
import Input from '../Input/Input'
import './CriarEventos.css'
import { Link } from 'react-router-dom'
import FinalizarCriarEvento from '../CriarEventos/FinalizarCriarEvento'

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
          
          <Link to="/FinalizarCriarEventosPage">
          <button class="ButtonProximo">
            <span>Proximo</span>
          </button>
          </Link>
        </div>


    </div>
  )
}

export default CriarEvento