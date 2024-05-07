import React from 'react'
import "./Tela_inicial.css"
import Cards from "../Cards/Cards"

const TelaInicial = () => {
    return (

        <div class="div_pai">
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
                    <div class="botao_lateral">
                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" focusable="false" class="tamanho_botao_lateral" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                    </div>
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

                    <button>
                        <img class="imagem_esportes" src="https://conecta.vivendocfit.com/assets/ICON%20FUNCIONAL-34454444.svg" />
                        <span>Funcional</span>
                    </button>



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
                    <div class="div_eventos">
                        Meus eventos
                    </div>
                    <div class="div_eventos">
                        Próximos eventos
                    </div>
                    <div class="div_eventos">
                        Criar Evento
                    </div>
                </div>
                <div className='cards'>
                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />
                </div>
                {/* <div class="sessao_cards">
                    <button>
                        
                            <img class="img_cards" src="https://uploaddeimagens.com.br/images/004/527/556/full/FUNCIONAL.png?1688152616" />
                            <div class="info_cards">
                                <p class="nome_esporte">Funcional Jaqueira</p>
                                <p class="sub_nome_esporte">Funcional</p>
                            </div>
                            <div class="data_esporte">
                                <div class="data_hora">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M19 4h-2V3a1 1 0 0 0-2 0v1H9V3a1 1 0 0 0-2 0v1H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3m1 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7h16Zm0-9H4V7a1 1 0 0 1 1-1h2v1a1 1 0 0 0 2 0V6h6v1a1 1 0 0 0 2 0V6h2a1 1 0 0 1 1 1Z"/></svg>
                                30/04/2024
                                </div>
                                
                                <div class="data_hora">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 256 256"><path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m62-90a6 6 0 0 1-6 6h-56a6 6 0 0 1-6-6V72a6 6 0 0 1 12 0v50h50a6 6 0 0 1 6 6"/></svg>
                                08:00
                                </div>
                            </div>
                        
                    </button>
                    <button>
                        <img class="img_cards" src="https://uploaddeimagens.com.br/images/004/527/556/full/FUNCIONAL.png?1688152616" />
                        <div class="info_cards">
                            <p class="nome_esporte">Funcional Jaqueira</p>
                            <p class="sub_nome_esporte">Funcional</p>
                        </div>
                        <div class="data_esporte">
                            <div class="data_hora">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M19 4h-2V3a1 1 0 0 0-2 0v1H9V3a1 1 0 0 0-2 0v1H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3m1 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7h16Zm0-9H4V7a1 1 0 0 1 1-1h2v1a1 1 0 0 0 2 0V6h6v1a1 1 0 0 0 2 0V6h2a1 1 0 0 1 1 1Z"/></svg>
                            30/04/2024
                            </div>
                            
                            <div class="data_hora">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 256 256"><path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m62-90a6 6 0 0 1-6 6h-56a6 6 0 0 1-6-6V72a6 6 0 0 1 12 0v50h50a6 6 0 0 1 6 6"/></svg>
                            08:00
                            </div>
                        </div>
                    </button>
                    <button>
                        <img class="img_cards" src="https://uploaddeimagens.com.br/images/004/527/556/full/FUNCIONAL.png?1688152616" />
                        <div class="info_cards">
                            <p class="nome_esporte">Funcional Jaqueira</p>
                            <p class="sub_nome_esporte">Funcional</p>
                        </div>
                        <div class="data_esporte">
                            <div class="data_hora">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M19 4h-2V3a1 1 0 0 0-2 0v1H9V3a1 1 0 0 0-2 0v1H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3m1 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7h16Zm0-9H4V7a1 1 0 0 1 1-1h2v1a1 1 0 0 0 2 0V6h6v1a1 1 0 0 0 2 0V6h2a1 1 0 0 1 1 1Z"/></svg>
                            30/04/2024
                            </div>
                            
                            <div class="data_hora">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 256 256"><path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m62-90a6 6 0 0 1-6 6h-56a6 6 0 0 1-6-6V72a6 6 0 0 1 12 0v50h50a6 6 0 0 1 6 6"/></svg>
                            08:00
                            </div>
                        </div>
                    </button>
                    <button>
                        <img class="img_cards" src="https://uploaddeimagens.com.br/images/004/527/556/full/FUNCIONAL.png?1688152616" />
                        <div class="info_cards">
                            <p class="nome_esporte">Funcional Jaqueira</p>
                            <p class="sub_nome_esporte">Funcional</p>
                        </div>
                        <div class="data_esporte">
                            <div class="data_hora">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M19 4h-2V3a1 1 0 0 0-2 0v1H9V3a1 1 0 0 0-2 0v1H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3m1 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7h16Zm0-9H4V7a1 1 0 0 1 1-1h2v1a1 1 0 0 0 2 0V6h6v1a1 1 0 0 0 2 0V6h2a1 1 0 0 1 1 1Z"/></svg>
                            30/04/2024
                            </div>
                            
                            <div class="data_hora">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 256 256"><path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m62-90a6 6 0 0 1-6 6h-56a6 6 0 0 1-6-6V72a6 6 0 0 1 12 0v50h50a6 6 0 0 1 6 6"/></svg>
                            08:00
                            </div>
                        </div>
                    </button>
                    <button>
                        <img class="img_cards" src="https://uploaddeimagens.com.br/images/004/527/556/full/FUNCIONAL.png?1688152616" />
                        <div class="info_cards">
                            <p class="nome_esporte">Funcional Jaqueira</p>
                            <p class="sub_nome_esporte">Funcional</p>
                        </div>
                        <div class="data_esporte">
                            <div class="data_hora">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M19 4h-2V3a1 1 0 0 0-2 0v1H9V3a1 1 0 0 0-2 0v1H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3m1 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7h16Zm0-9H4V7a1 1 0 0 1 1-1h2v1a1 1 0 0 0 2 0V6h6v1a1 1 0 0 0 2 0V6h2a1 1 0 0 1 1 1Z"/></svg>
                            30/04/2024
                            </div>
                            
                            <div class="data_hora">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 256 256"><path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m62-90a6 6 0 0 1-6 6h-56a6 6 0 0 1-6-6V72a6 6 0 0 1 12 0v50h50a6 6 0 0 1 6 6"/></svg>
                            08:00
                            </div>
                        </div>
                    </button>
                    <button>
                        <img class="img_cards" src="https://uploaddeimagens.com.br/images/004/527/556/full/FUNCIONAL.png?1688152616" />
                        <div class="info_cards">
                            <p class="nome_esporte">Funcional Jaqueira</p>
                            <p class="sub_nome_esporte">Funcional</p>
                        </div>
                        <div class="data_esporte">
                            <div class="data_hora">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M19 4h-2V3a1 1 0 0 0-2 0v1H9V3a1 1 0 0 0-2 0v1H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3m1 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7h16Zm0-9H4V7a1 1 0 0 1 1-1h2v1a1 1 0 0 0 2 0V6h6v1a1 1 0 0 0 2 0V6h2a1 1 0 0 1 1 1Z"/></svg>
                            30/04/2024
                            </div>
                            
                            <div class="data_hora">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 256 256"><path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m62-90a6 6 0 0 1-6 6h-56a6 6 0 0 1-6-6V72a6 6 0 0 1 12 0v50h50a6 6 0 0 1 6 6"/></svg>
                            08:00
                            </div>
                        </div>
                    </button>
                
                    
                </div> */}


                </div>
            </div>
    )
}

export default TelaInicial