import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="bg-green-600 text-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <h1 className="text-2xl font-bold">
            <Link to="/" className="hover:text-green-200">Isaac's Landscaping</Link>
          </h1>
          <nav>
            <ul className="flex space-x-4">
              <li><Link to="/" className="hover:text-green-200">Home</Link></li>
              <li><Link to="/about" className="hover:text-green-200">About</Link></li>
              <li><Link to="/work" className="hover:text-green-200">Work</Link></li>
              <li><Link to="/contact" className="hover:text-green-200">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header