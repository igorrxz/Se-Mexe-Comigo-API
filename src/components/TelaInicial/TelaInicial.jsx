import React, { useState, useRef, useEffect } from 'react'
import "./TelaInicial.css"
import Cards from "../Cards/Cards"
import { Link } from 'react-router-dom'
import CriarEventos from '../CriarEventos/CriarEventos'
import ProximosEventos from '../ProximosEventos/ProximosEventos'
import MeusEventos from '../MeusEventos/MeusEventos'
import SideBar from '../SideBar/SideBar'


const TelaInicial = () => {
    const [clicado, setClicado] = useState(<ProximosEventos/>);
    const [botao, setBotaoClicado] = useState('ProximosEventos')
    const [sideBarInvisible, setSidebarVisible] = useState(false)
   
    const sideBarClicada = () =>{
        setSidebarVisible(!sideBarInvisible);
    }
    const handleClick = (componente) =>{
        switch(componente) {
            case "MeusEventos":
                setClicado(<MeusEventos/>);
                setBotaoClicado('MeusEventos')
                break;
            case "ProximosEventos":
                setClicado(<ProximosEventos/>);
                setBotaoClicado('ProximosEventos')
                break;
            case 'CriarEventos':
                setClicado(<CriarEventos/>);
                setBotaoClicado('CriarEventos')
                break;
            default:
                setClicado(<ProximosEventos/>);
        }
    }

    return (

        <div class="div_pai">
            {sideBarInvisible &&(<div className='ContainerSideBar'><SideBar/> </div>)}
            
            <div class="div_pai_navbar">
                <div class="div_barra_principal">
                    <div>
                        <img class="imagem" src="https://conecta.vivendocfit.com/assets/logo_fav-a853b0e2.svg" />
                    </div>
                    <div class="nome_usuario">
                        <p class="nome">
                            Olá, MATHEUS GUILHERME
                        </p>
                        <p class="bora_semexer">
                            Bora se mexer?
                        </p>
                       
                    </div>
                </div>
                <div class="container_lateral">
                    <button onClick={sideBarClicada} class="botao_lateral">
                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" focusable="false" class="tamanho_botao_lateral" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                    </button>
                </div>
                    


            </div>
                <div className="container">

                
                <div class="barra_pesquisa">
                    <svg class="barra_icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256"><path fill="currentColor" d="m229.66 218.34l-50.07-50.06a88.11 88.11 0 1 0-11.31 11.31l50.06 50.07a8 8 0 0 0 11.32-11.32M40 112a72 72 0 1 1 72 72a72.08 72.08 0 0 1-72-72" /></svg>
                    <input class="input_pesquisa" type="text" placeholder='Pesquisar Eventos' />

                </div>

                <div class="texto_esportes">
                    <b>Nossos esportes</b>
                </div>

                <div class="menu_esportes">

                    <svg class="arrow" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m14 7l-5 5l5 5" /></svg>
                    
                    <Link to="/EsportesPage">
                    <button>
                        <img class="imagem_esportes" src="https://conecta.vivendocfit.com/assets/ICON%20FUNCIONAL-34454444.svg" />
                        <span>Funcional</span>
                    </button>
                    </Link>



                    <button>
                        <img class="imagem_esportes" src="https://conecta.vivendocfit.com/assets/ICON%20FUTEBOL-87a06d75.svg" />
                        <span>Futebol</span>
                    </button>

                    <button>
                        <img class="imagem_esportes" src="https://conecta.vivendocfit.com/assets/ICON%20FUTSAL-e112da7a.svg" />
                        <span>Futsal </span>
                    </button>


                    {/* <div class="esportes">
                        <img class="imagem_esportes" src="https://conecta.vivendocfit.com/assets/ICON%20OUTROS-fd8ee86d.svg"/>
                        Outros
                    </div> */}

                    <svg class="arrow" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m10 17l5-5l-5-5" /></svg>

                </div>
                <div class="opcoes_eventos">
                    
                    <button onClick={() =>{handleClick("MeusEventos");}} class={botao === 'MeusEventos' ?'DivEventosAtivo' : "div_eventos"}>
                        Meus eventos
                    </button>


                    <button onClick={() =>{handleClick("ProximosEventos");}} class={botao === 'ProximosEventos' ?'DivEventosAtivo' : "div_eventos"}>
                        Próximos eventos
                    </button>


                    <button onClick={() =>{handleClick("CriarEventos");}} class={botao === 'CriarEventos' ?'DivEventosAtivo': "div_eventos"}>
                        Criar Evento
                    </button>


                </div>
                <div className='cards'>
                    {clicado}
                
               
                </div>
                


                </div>
            </div>
    )
}

export default TelaInicial