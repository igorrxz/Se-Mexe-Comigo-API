import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginPage from '@/pages/LoginPage/LoginPage';
import HomePage from './pages/HomePage/HomePage';
import ProfilePage from '@/pages/Profile/ProfilePage';
import FriendsPage from '@/pages/Friends/FriendsPage';
import FriendsProfile from '@/pages/FriendsProfile';
import SportScorePage from '@/pages/SportScore/SportScorePage';
import CalendarPage from '@/pages/Calendar/CalendarPage';
import Chat from '@/pages/Chat/ChatPage';
import EventoPage from './pages/EventoPage/EventoPage';
import EsportesPages from './pages/EsportesPage/EsportesPage';
import FinalizarCriarEventosPage from './pages/CriarEventosPage/FinalizarCriarEventosPage';



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={LoginPage} path="/" />
        <Route Component={HomePage} path="/home" />
        <Route Component={ProfilePage} path="/profile" /> 
        <Route Component={FriendsPage} path="/friends" />
        <Route Component={FriendsProfile} path="/friendsprofile" />
        <Route Component={SportScorePage} path="/sportscore" />
        <Route Component={CalendarPage} path="/calendar" />
        <Route Component={Chat} path="/chat" />
        <Route Component={EventoPage} path="/EventoPage"/>
        <Route Component={EsportesPages} path="/EsportesPage/:esporteClicado" />
        <Route Component={FinalizarCriarEventosPage} path="FinalizarCriarEventosPage" />
      </Routes>
    </BrowserRouter>
  );
}
