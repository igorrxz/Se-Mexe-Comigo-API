import React, { useState } from 'react'
import Esportes from '../../components/Esportes/Esportes'
import { useParams } from 'react-router-dom'


const EsportesPages = () => {
  let { esporteClicado } = useParams();
  return (
    <div>
      {esporteClicado === "Funcional" && <Esportes Titulo={"Funcional"} NomeAtividade={"Funcional Jaqueira"} SubnomeEsporte={"Funcional"} img={"https://uploaddeimagens.com.br/images/004/527/556/full/FUNCIONAL.png?1688152616"} />}
      {esporteClicado === "ExibirTodos" && <Esportes Titulo={"Todos eventos"} NomeAtividade={"Funcional Jaqueira"} SubnomeEsporte={"Funcional"} img={"https://uploaddeimagens.com.br/images/004/527/556/full/FUNCIONAL.png?1688152616"} />}
      {esporteClicado === "Futebol" && <Esportes Titulo={"Futebol"} NomeAtividade={"Futebol Geraldão"} SubnomeEsporte={"Futebol"} img={"https://uploaddeimagens.com.br/images/004/527/560/full/FUTEBOL.png?1688152713"} />}
      {esporteClicado === "Futsal" && <Esportes Titulo={"Futsal"} NomeAtividade={"Futsal Geraldão"} SubnomeEsporte={"Futsal"} img={"https://uploaddeimagens.com.br/images/004/629/415/original/OUTROS.png?1696593196"} />}
      {esporteClicado === "Yoga" && <Esportes Titulo={"Yoga"} NomeAtividade={"Yoga"} SubnomeEsporte={"Yoga"} img={"https://uploaddeimagens.com.br/images/004/629/415/original/OUTROS.png?1696593196"} />}
      {esporteClicado === "Malhação" && <Esportes Titulo={"Caminhão daMalhação"} NomeAtividade={"Caminhão da malhação"} SubnomeEsporte={"Caminhão da malhação"} img={"https://uploaddeimagens.com.br/images/004/629/415/original/OUTROS.png?1696593196"} />}
      {esporteClicado === "Ciclismo" && <Esportes Titulo={"Ciclismo"} NomeAtividade={"Ciclismo"} SubnomeEsporte={"Ciclismo"} img={"https://uploaddeimagens.com.br/images/004/527/546/full/CICLISMO.png?1688152279"} />}
    </div>
  )
}

export default EsportesPages
