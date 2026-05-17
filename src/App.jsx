import { useState, useEffect } from "react"

import Navbar from "./components/Navbar"

import HomePage from "./pages/HomePage"
import StatsPage from "./pages/StatsPage"
import SettingsPage from "./pages/SettingsPage"

import {
  Routes,
  Route
} from "react-router-dom"

function App() {

const [darkMode, setDarkMode] =
useState(() => {

  const savedTheme =
  localStorage.getItem("darkMode")

  return savedTheme === "true"
})

useEffect(() => {

  localStorage.setItem(
    "darkMode", darkMode
  )

}, [darkMode])

function toggleDarkMode() {

  setDarkMode(!darkMode)

}

  return (
    <div 
    style={{
      backgroundColor: darkMode ? "black" : "white",
      color: darkMode ? "white" : "black",
      minHeight: "100vh"
    }}>

      <Navbar />

      <Routes>

        <Route 
        path="/"
        element={<HomePage />}
      />

      <Route path="/stats"
        element={<StatsPage />}
      />

      <Route path="/settings"
        element={<SettingsPage 
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        />
      }
    />

      </Routes>
      
    </div>
  )
} 

export default App