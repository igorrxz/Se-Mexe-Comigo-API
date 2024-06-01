import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginPage from '@/pages/LoginPage/LoginPage';
import HomePage from '@/pages/HomePage/HomePage';
import ProfilePage from '@/pages/Profile/ProfilePage';
import FriendsPage from '@/pages/Friends/FriendsPage';
import FriendsProfile from '@/pages/FriendsProfile';
import SportScorePage from '@/pages/SportScore/SportScorePage';
import CalendarPage from '@/pages/Calendar/CalendarPage';
import Chat from '@/pages/Chat/ChatPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={LoginPage} path="/login" />
        <Route Component={HomePage} path="/home" />
        <Route Component={ProfilePage} path="/profile" />
        <Route Component={FriendsPage} path="/friends" />
        <Route Component={FriendsProfile} path="/friendsprofile" />
        <Route Component={SportScorePage} path="/" />
        <Route Component={CalendarPage} path="/calendar" />
        <Route Component={Chat} path="/chat" />
      </Routes>
    </BrowserRouter>
  );
}
