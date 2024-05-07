import React from 'react'
import "./Cards.css"
const Cards = () => {
    return (
        <div class="sessao_cards">
            <button>

                <img class="img_cards" src="https://uploaddeimagens.com.br/images/004/527/556/full/FUNCIONAL.png?1688152616" />
                <div class="info_cards">
                    <p class="nome_esporte">Funcional Jaqueira</p>
                    <p class="sub_nome_esporte">Funcional</p>
                </div>
                <div class="data_esporte">
                    <div class="data_hora">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M19 4h-2V3a1 1 0 0 0-2 0v1H9V3a1 1 0 0 0-2 0v1H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3m1 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7h16Zm0-9H4V7a1 1 0 0 1 1-1h2v1a1 1 0 0 0 2 0V6h6v1a1 1 0 0 0 2 0V6h2a1 1 0 0 1 1 1Z" /></svg>
                        30/04/2024
                    </div>

                    <div class="data_hora">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 256 256"><path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m62-90a6 6 0 0 1-6 6h-56a6 6 0 0 1-6-6V72a6 6 0 0 1 12 0v50h50a6 6 0 0 1 6 6" /></svg>
                        08:00
                    </div>
                </div>

            </button>
        </div>
    )
}

export default Cards