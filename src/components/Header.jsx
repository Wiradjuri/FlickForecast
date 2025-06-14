import { Link } from 'react-router-dom'
import AuthButton from './AuthButton'

export default function Header() {
  return (
    <header className="bg-zinc-800 text-white shadow-md">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold tracking-wide">🎬 FlickForecast</h1>
        <div className="flex items-center gap-6">
          <ul className="flex gap-6 text-lg">
            <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
            <li><Link to="/upcoming" className="hover:text-yellow-400">Upcoming</Link></li>
            <li><Link to="/watchlist" className="hover:text-yellow-400">Watchlist</Link></li>
            <li><Link to="/about" className="hover:text-yellow-400">About</Link></li>
          </ul>
          <AuthButton />
        </div>
      </nav>
    </header>
  )
}
