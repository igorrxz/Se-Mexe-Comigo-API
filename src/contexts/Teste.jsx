import React, { useState, createContext } from 'react'

export const variavelContext = createContext();


export default function Teste({children}) {
    const [variavel, setVariavel] = useState(null);
  return (
    <variavelContext.teste value={{variavel, setVariavel}}>
        {children}
    </variavelContext.teste>
  )
}
