import React from "react"

import { BrowserRouter, Routes, Route } from "react-router-dom"

import ProfilePage from "@/pages/Profile/ProfilePage"
import HomePage from "@/pages/HomePage/HomePage"

export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={ProfilePage} path="/profile" />
        <Route Component={HomePage} path="/" />
      </Routes>
    </BrowserRouter>
  )
}