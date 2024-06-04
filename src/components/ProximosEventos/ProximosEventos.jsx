import React from 'react'
import Cards from '../Cards/Cards'
import { Link } from 'react-router-dom'
import './ProximosEventos.css'

function ProximosEventos() {
  return (
    <div className="ListasCards">

                <Link to="/EventoPage">
                    <Cards NomeAtividade={"Funcional Jaqueira"} SubnomeEsporte={"Funcional"}Imagem={"https://uploaddeimagens.com.br/images/004/527/556/full/FUNCIONAL.png?1688152616"} />
                </Link>
                <Link to="/EventoPage">
                    <Cards NomeAtividade={"Funcional Jaqueira"} SubnomeEsporte={"Funcional"}Imagem={"https://uploaddeimagens.com.br/images/004/527/556/full/FUNCIONAL.png?1688152616"} />
                </Link>
                <Link to="/EventoPage">
                    <Cards NomeAtividade={"Funcional Jaqueira"} SubnomeEsporte={"Funcional"}Imagem={"https://uploaddeimagens.com.br/images/004/527/556/full/FUNCIONAL.png?1688152616"} />
                </Link>
                <Link to="/EventoPage">
                    <Cards NomeAtividade={"Funcional Jaqueira"} SubnomeEsporte={"Funcional"}Imagem={"https://uploaddeimagens.com.br/images/004/527/556/full/FUNCIONAL.png?1688152616"} />
                </Link>
                <Link to="/EventoPage">
                    <Cards NomeAtividade={"Funcional Jaqueira"} SubnomeEsporte={"Funcional"}Imagem={"https://uploaddeimagens.com.br/images/004/527/556/full/FUNCIONAL.png?1688152616"} />
                </Link>
                <Link to="/EventoPage">
                    <Cards NomeAtividade={"Funcional Jaqueira"} SubnomeEsporte={"Funcional"}Imagem={"https://uploaddeimagens.com.br/images/004/527/556/full/FUNCIONAL.png?1688152616"} />
                </Link>
                <Link to="/EventoPage">
                    <Cards NomeAtividade={"Funcional Jaqueira"} SubnomeEsporte={"Funcional"}Imagem={"https://uploaddeimagens.com.br/images/004/527/556/full/FUNCIONAL.png?1688152616"} />
                </Link>

    </div>
  )
}

export default ProximosEventos