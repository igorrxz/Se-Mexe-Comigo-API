import React from 'react'
import './Input.css'

function Input({Nome}) {
  return (
    <div>
        <div className="barra_pesquisa">
                    <input className="input_pesquisa" type="text" placeholder={Nome} />
                </div>
    </div>
  )
}
export default Input