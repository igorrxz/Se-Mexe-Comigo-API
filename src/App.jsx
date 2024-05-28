import React from "react"

import { BrowserRouter, Routes, Route } from "react-router-dom"

import ProfilePage from "@/pages/Profile/ProfilePage"
import HomePage from "@/pages/HomePage/HomePage"
import LoginPage from "./pages/LoginPage/LoginPage"
import { CalendarPage } from "./pages/Calendar/CalendarPage"

export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={CalendarPage} path="/calendar" />
        <Route Component={LoginPage} path="/" />
        <Route Component={ProfilePage} path="/profile" />
        <Route Component={HomePage} path="/home" />
      </Routes>
    </BrowserRouter>
  )
}
