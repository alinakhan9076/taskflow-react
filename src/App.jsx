import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage"
import StatsPage from "./pages/StatsPage"
import SettingsPage from "./pages/SettingsPage"

function App() {
  return (
    <div>
      <Navbar />
      <HomePage />
      <StatsPage />
      <SettingsPage />
    </div>
  )
} 

export default App