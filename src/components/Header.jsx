import { Link } from 'react-router-dom'
import { useState } from 'react'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="bg-green-600 text-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <h1 className="text-2xl font-bold">
            <Link to="/" className="hover:text-green-200">Isaac's Landscaping</Link>
          </h1>
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              <li><Link to="/" className="hover:text-green-200">Home</Link></li>
              <li><Link to="/about" className="hover:text-green-200">About</Link></li>
              <li><Link to="/work" className="hover:text-green-200">Work</Link></li>
              <li><Link to="/contact" className="hover:text-green-200">Contact</Link></li>
            </ul>
          </nav>
          <button
            className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-600 rounded"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            <span className="block w-6 h-0.5 bg-white mb-1"></span>
            <span className="block w-6 h-0.5 bg-white mb-1"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </button>
        </div>
        {isMenuOpen && (
          <nav id="mobile-navigation" className="md:hidden">
            <ul className="flex flex-col space-y-2 py-4">
              <li><Link to="/" className="hover:text-green-200 block" onClick={toggleMenu}>Home</Link></li>
              <li><Link to="/about" className="hover:text-green-200 block" onClick={toggleMenu}>About</Link></li>
              <li><Link to="/work" className="hover:text-green-200 block" onClick={toggleMenu}>Work</Link></li>
              <li><Link to="/contact" className="hover:text-green-200 block" onClick={toggleMenu}>Contact</Link></li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
