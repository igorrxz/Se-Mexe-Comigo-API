import React from 'react'
import "./Esportes.css"
import Cards from "../Cards/Cards"
import { Link } from 'react-router-dom'

const Esportes = ({Titulo, NomeAtividade, SubnomeEsporte, img}) => {
  return (
    <div>
        <div className='navbar'>
          <Link to="/home">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m14 7l-5 5l5 5"/></svg>
          </div>
          </Link>
          
          <div className="titulonavbar">
            <span>{Titulo}</span>
          </div>
       
        </div>
      <div className="divcorpo">
       <div className='ListasCards'>
        
          <Cards NomeAtividade={NomeAtividade} SubnomeEsporte={SubnomeEsporte}Imagem={img} />
          <Cards NomeAtividade={NomeAtividade} SubnomeEsporte={SubnomeEsporte}Imagem={img} />
          <Cards NomeAtividade={NomeAtividade} SubnomeEsporte={SubnomeEsporte}Imagem={img} />
          <Cards NomeAtividade={NomeAtividade} SubnomeEsporte={SubnomeEsporte}Imagem={img} />
          <Cards NomeAtividade={NomeAtividade} SubnomeEsporte={SubnomeEsporte}Imagem={img} />
       </div>
        
        {/* https://uploaddeimagens.com.br/images/004/527/556/full/FUNCIONAL.png?1688152616 */}

      </div>

    
    </div>
  )
}

export default Esportes