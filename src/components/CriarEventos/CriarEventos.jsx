import React from 'react'
import Input from '../Input/Input'
import './CriarEventos.css'
import { Link } from 'react-router-dom'
import FinalizarCriarEvento from '../CriarEventos/FinalizarCriarEvento'

function CriarEvento() {
  return (
    <div className="DivPai">

        <Input Nome={'Nome do evento'}/>
        <Input Nome={"Modalidade"}/>
        <Input Nome={"Quantidade de participantes"}/>
        
        
        <div className="InputDescricao">
            <textarea placeholder="Descrição"></textarea>
        </div>
        <div className="DivBoddy">
          
          <Link to="/FinalizarCriarEventosPage">
          <button className="ButtonProximo">
            <span>Proximo</span>
          </button>
          </Link>
        </div>


    </div>
  )
}

export default CriarEvento