import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Upcoming from './pages/Upcoming'
import About from './pages/About'
import Watchlist from './pages/Watchlist';


function App() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/about" element={<About />} />
        <Route path="/watchlist" element={<Watchlist />} />

      </Routes>
    </div>
  )
}

export default App
