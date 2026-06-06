import { useState } from "react"
import { Link } from "react-router-dom"

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
            E
          </div>
          <h1 className="text-xl font-bold text-gray-800">Ecommerce</h1>
        </Link>

        <div className="hidden md:flex flex-1 max-w-xl">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full border border-gray-300 rounded-l-lg px-4 py-2 outline-none focus:border-blue-500"
          />
          <button className="bg-blue-600 text-white px-6 py-2 rounded-r-lg hover:bg-blue-700">
            Search
          </button>
        </div>

        <nav className="hidden lg:flex items-center gap-6 text-gray-700 font-medium">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/products" className="hover:text-blue-600">Products</Link>
          <Link to="/cart" className="hover:text-blue-600">Cart</Link>
          <a href="#" className="hover:text-blue-600">Login</a>
        </nav>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden bg-gray-100 px-3 py-2 rounded-lg text-gray-700"
        >
          Menu
        </button>
      </div>

      <div className="md:hidden px-4 pb-4 flex">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full border border-gray-300 rounded-l-lg px-4 py-2 outline-none"
        />
        <button className="bg-blue-600 text-white px-4 rounded-r-lg">
          Go
        </button>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 px-4 py-4">
          <nav className="flex flex-col gap-3 text-gray-700 font-medium">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="px-4 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600"
            >
              Home
            </Link>

            <Link
              to="/products"
              onClick={() => setIsMenuOpen(false)}
              className="px-4 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600"
            >
              Products
            </Link>

            <Link
              to="/cart"
              onClick={() => setIsMenuOpen(false)}
              className="px-4 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600"
            >
              Cart
            </Link>

            <a
              href="#"
              onClick={() => setIsMenuOpen(false)}
              className="px-4 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600"
            >
              Login
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar