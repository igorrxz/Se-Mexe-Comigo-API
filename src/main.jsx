import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import HomePage from './pages/Homepage/HomePage.jsx'
import EsportesPage from './pages/EsportesPage/EsportesPage.jsx'
import Evento from './components/Evento/Evento.jsx'



import{
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>
  },

  {
    path: "EsportesPage",
    element: <EsportesPage/>
  },
  {
    path: "Evento",
    element: <Evento/>
  }

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
