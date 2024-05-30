import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import HomePage from './pages/Homepage/HomePage.jsx'
import EsportesPage from './pages/EsportesPage/EsportesPage.jsx'
import Evento from './components/Evento/Evento.jsx'
import FinalizarCriarEventosPage from './pages/CriarEventosPage/FinalizarCriarEventosPage.jsx';
import SideBar from './components/SideBar/SideBar.jsx'


import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import EventoPage from './pages/EventoPage/EventoPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },

  {
    path: "/EsportesPage/:esporteClicado",
    element: <EsportesPage />
  },

  {
    path: "/EventoPage",
    element: <EventoPage/>
  },
  {
    path: "/FinalizarCriarEventosPage",
    element: <FinalizarCriarEventosPage/>
  }

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
