import React from 'react'
import './Input.css'

function Input({Nome}) {
  return (
    <div>
        <div class="barra_pesquisa">
                    <input class="input_pesquisa" type="text" placeholder={Nome} />
                </div>
    </div>
  )
}
export default Input