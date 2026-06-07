import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { useCart } from "../context/CartContext"

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { totalItems } = useCart()

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-amber-400 font-semibold"
      : "text-gray-300 hover:text-amber-400"

  return (
    <header className="bg-slate-950/95 border-b border-slate-800 sticky top-0 z-50 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-11 h-11 bg-gradient-to-br from-amber-400 to-orange-600 rounded-xl flex items-center justify-center text-slate-950 font-black text-xl shadow-lg shadow-amber-500/20">
            E
          </div>
          <div>
            <h1 className="text-xl font-black text-white leading-none">
              Ecommerce
            </h1>
            <p className="text-xs text-gray-400 mt-1">Premium Store</p>
          </div>
        </Link>

        <div className="hidden md:flex flex-1 max-w-xl">
          <input
            type="text"
            placeholder="Search premium products..."
            className="w-full bg-slate-900 border border-slate-700 text-white placeholder:text-gray-500 rounded-l-xl px-4 py-2.5 outline-none focus:border-amber-400"
          />
          <button className="bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 font-bold px-6 py-2.5 rounded-r-xl hover:from-amber-300 hover:to-orange-400 shadow-lg shadow-amber-500/20">
            Search
          </button>
        </div>

        <nav className="hidden lg:flex items-center gap-6 font-medium">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/products" className={navLinkClass}>
            Products
          </NavLink>

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `relative ${isActive ? "text-amber-400 font-semibold" : "text-gray-300 hover:text-amber-400"}`
            }
          >
            Basket 🛒
            {totalItems > 0 && (
              <span className="absolute -top-3 -right-5 bg-emerald-500 text-slate-950 text-xs font-black w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </NavLink>

          <a href="#" className="text-gray-300 hover:text-amber-400">
            Login
          </a>
        </nav>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden bg-slate-900 border border-slate-700 px-4 py-2 rounded-xl text-gray-200 hover:bg-slate-800 hover:text-amber-400"
        >
          {isMenuOpen ? "Close" : "Menu"}
        </button>
      </div>

      <div className="md:hidden px-4 pb-4 flex">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full bg-slate-900 border border-slate-700 text-white placeholder:text-gray-500 rounded-l-xl px-4 py-2 outline-none focus:border-amber-400"
        />
        <button className="bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 font-bold px-4 rounded-r-xl">
          Go
        </button>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-slate-950 border-t border-slate-800 px-4 py-4">
          <nav className="flex flex-col gap-3 font-medium">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="px-4 py-3 rounded-xl text-gray-300 hover:bg-slate-900 hover:text-amber-400"
            >
              Home
            </Link>

            <Link
              to="/products"
              onClick={() => setIsMenuOpen(false)}
              className="px-4 py-3 rounded-xl text-gray-300 hover:bg-slate-900 hover:text-amber-400"
            >
              Products
            </Link>

            <Link
              to="/cart"
              onClick={() => setIsMenuOpen(false)}
              className="px-4 py-3 rounded-xl text-gray-300 hover:bg-slate-900 hover:text-amber-400 flex items-center justify-between"
            >
              <span>Basket 🛒</span>
              {totalItems > 0 && (
                <span className="bg-emerald-500 text-slate-950 text-xs font-black px-2 py-1 rounded-full">
                  {totalItems}
                </span>
              )}
            </Link>

            <a
              href="#"
              onClick={() => setIsMenuOpen(false)}
              className="px-4 py-3 rounded-xl text-gray-300 hover:bg-slate-900 hover:text-amber-400"
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