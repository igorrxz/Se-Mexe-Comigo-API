import React from 'react'
import "./Esportes.css"
import Cards from "../Cards/Cards"
import { Link } from 'react-router-dom'

const Esportes = ({Titulo}) => {
  return (
    <div>
        <div class='navbar'>
          <Link to="/">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m14 7l-5 5l5 5"/></svg>
          </div>
          </Link>
          
          <div class="titulonavbar">
            <span>{Titulo}</span>
          </div>
       
        </div>
      <div class="divcorpo">
        <Cards NomeAtividade={"Funcional Jaqueira"} SubnomeEsporte={"Funcional"}Imagem={"https://uploaddeimagens.com.br/images/004/527/556/full/FUNCIONAL.png?1688152616"} />
        <Cards NomeAtividade={"Funcional Jaqueira"} SubnomeEsporte={"Funcional"}Imagem={"https://uploaddeimagens.com.br/images/004/527/556/full/FUNCIONAL.png?1688152616"} />
        <Cards NomeAtividade={"Funcional Jaqueira"} SubnomeEsporte={"Funcional"}Imagem={"https://uploaddeimagens.com.br/images/004/527/556/full/FUNCIONAL.png?1688152616"} />
        <Cards NomeAtividade={"Funcional Jaqueira"} SubnomeEsporte={"Funcional"}Imagem={"https://uploaddeimagens.com.br/images/004/527/556/full/FUNCIONAL.png?1688152616"} />
        <Cards NomeAtividade={"Funcional Jaqueira"} SubnomeEsporte={"Funcional"}Imagem={"https://uploaddeimagens.com.br/images/004/527/556/full/FUNCIONAL.png?1688152616"} />
        


      </div>

    
    </div>
  )
}

export default Esportes