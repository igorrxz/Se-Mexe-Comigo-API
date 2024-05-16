import React from 'react'
import EsportesPage from './pages/EsportesPage/EsportesPage'
import HomePage from './pages/Homepage/HomePage'
import TelaInicial from './components/TelaInicial/TelaInicial'
import Evento from './components/Evento/Evento'

const App = () => {
  return (
    <div>
      <HomePage />
      <EsportesPage/>
    </div>
  )
}

export default App