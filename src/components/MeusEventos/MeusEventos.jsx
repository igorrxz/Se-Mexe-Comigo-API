import React from 'react'
import Cards from '../Cards/Cards'
import { Link } from 'react-router-dom'
import './MeusEventos.css'

function MeusEventos() {
  return (
    <div className='ListasCardsMeusEventos'>
                <Link to="/Evento">
                    <Cards NomeAtividade={"Atlético bull"} SubnomeEsporte={"Futebol"}Imagem={"https://uploaddeimagens.com.br/images/004/527/560/full/FUTEBOL.png?1688152713"} />
                </Link>
                <Link to="/Evento">
                    <Cards NomeAtividade={"Jogo de vôlei"} SubnomeEsporte={"Vôlei"}Imagem={"https://uploaddeimagens.com.br/images/004/527/585/full/VOLEIBOL.png?1688153703"} />
                </Link>
                <Link to="/Evento">
                    <Cards NomeAtividade={"Funcional Jaqueira"} SubnomeEsporte={"Funcional"}Imagem={"https://uploaddeimagens.com.br/images/004/527/556/full/FUNCIONAL.png?1688152616"} />
                </Link>
    </div>
  )
}

export default MeusEventos