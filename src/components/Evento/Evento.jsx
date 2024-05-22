import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Style from'./Evento.module.css'


const Evento = () => {
  
  const [participando, setParticipando] = useState(false);

  const handleClick = () => {
    setParticipando(!participando);
  }
  
  
  return (
    <div className={Style.DivPai}>
        
            <div className={Style.DivImagem}>
                <img  className={Style.ImagemEvento} src="https://uploaddeimagens.com.br/images/004/527/556/full/FUNCIONAL.png?1688152616" />
            </div>
            <div className={Style.DivCorpo}>
              <div className={Style.NavBar}>
               
               
                <Link to="/">
               <div  className={Style.arrow}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m14 7l-5 5l5 5" /></svg>
               </div>
                </Link>

                <div>
                  <span className={Style.textoNavBar}>Funcional Jaqueira</span>
                </div>

                <div className={Style.share}>
                  <svg className={Style.share2} xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="black" d="M18 22q-1.25 0-2.125-.875T15 19q0-.175.025-.363t.075-.337l-7.05-4.1q-.425.375-.95.588T6 15q-1.25 0-2.125-.875T3 12t.875-2.125T6 9q.575 0 1.1.213t.95.587l7.05-4.1q-.05-.15-.075-.337T15 5q0-1.25.875-2.125T18 2t2.125.875T21 5t-.875 2.125T18 8q-.575 0-1.1-.212t-.95-.588L8.9 11.3q.05.15.075.338T9 12t-.025.363t-.075.337l7.05 4.1q.425-.375.95-.587T18 16q1.25 0 2.125.875T21 19t-.875 2.125T18 22"/></svg>
                </div>
              </div>
            <div className={Style.InformacoesEvento}>

                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#ffb600" d="M19 4h-2V3a1 1 0 0 0-2 0v1H9V3a1 1 0 0 0-2 0v1H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3m1 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7h16Zm0-9H4V7a1 1 0 0 1 1-1h2v1a1 1 0 0 0 2 0V6h6v1a1 1 0 0 0 2 0V6h2a1 1 0 0 1 1 1Z"/></svg>
                  <span className={Style.textos}>09/04/2024 das 15:30 às 16:30</span>
                </div>

                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 28 28"><path fill="#ffb600" d="M14 2.25A9.75 9.75 0 0 1 23.75 12c0 4.12-2.895 8.61-8.61 13.518a1.75 1.75 0 0 1-2.283-.002l-.378-.328C7.017 20.408 4.25 16.028 4.25 12A9.75 9.75 0 0 1 14 2.25m0 1.5A8.25 8.25 0 0 0 5.75 12c0 3.502 2.548 7.537 7.714 12.057l.373.323a.25.25 0 0 0 .326 0c5.416-4.652 8.087-8.795 8.087-12.38A8.25 8.25 0 0 0 14 3.75m0 4.5a3.75 3.75 0 1 1 0 7.5a3.75 3.75 0 0 1 0-7.5m0 1.5a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5"/></svg>
                  <span className={Style.textos}>Parque da Jaqueira</span>
                </div>
                
                <div className={Style.Organizador}>
                  <div></div>
                  <span className={Style.textos}>Organizador: Yuri Ernani</span>
                </div>

                <div className={Style.TituloDescricao}>
                  <span>Descrição do evento</span>
                </div>

                <div className={Style.Descricao}>
                  <span className={Style.textos}>Atividade funcional no parque da Jaqueira</span>
                </div>

                <div className={Style.TituloDescricao}>
                  <span>Participantes 1/10</span>
                </div>

                <div>
                  <div  className={Style.Participantes}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="30" viewBox="0 0 24 24"><path fill="black" fill-rule="evenodd" d="M12 4a8 8 0 0 0-6.96 11.947A4.99 4.99 0 0 1 9 14h6a4.99 4.99 0 0 1 3.96 1.947A8 8 0 0 0 12 4m7.943 14.076A9.959 9.959 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12a9.958 9.958 0 0 0 2.057 6.076l-.005.018l.355.413A9.98 9.98 0 0 0 12 22a9.947 9.947 0 0 0 5.675-1.765a10.055 10.055 0 0 0 1.918-1.728l.355-.413zM12 6a3 3 0 1 0 0 6a3 3 0 0 0 0-6" clip-rule="evenodd"/></svg>
                    <span>Yuri</span>
                  </div>
                </div>
            </div>
            <div className={Style.Map}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d3950.628333432154!2d-34.9052235!3d-8.0371997!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1715885307970!5m2!1spt-BR!2sbr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          <div className={Style.AbaParticipar}>
             <button onClick={handleClick} className={participando ? Style.BotaoEventoParticipando : Style.BotaoParticipar}>
              <span>{participando ? 'Sair do evento' : 'Participar do evento'}</span></button>
             
             
             <div className={Style.BotaoParticipar}><span>Chat ao vivo</span></div>
          </div>
            </div>


    </div>
  )
}

export default Evento