import Navbar from "./components/Navbar"

import HomePage from "./pages/HomePage"
import StatsPage from "./pages/StatsPage"
import SettingsPage from "./pages/SettingsPage"

import {
  Routes,
  Route
} from "react-router-dom"

function App() {
  return (
    <div>

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
        element={<SettingsPage />}
      />

      </Routes>
      
    </div>
  )
} 

export default App