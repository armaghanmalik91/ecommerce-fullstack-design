import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer className="bg-slate-950 text-white mt-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-xl font-black mb-3 text-white">Ecommerce</h2>
          <p className="text-gray-400 text-sm">
            A responsive dark-theme full-stack ecommerce web application built
            during internship.
          </p>
        </div>

        <div>
          <h3 className="font-bold mb-3 text-white">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <Link to="/" className="hover:text-amber-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-amber-400">
                Products
              </Link>
            </li>
            <li>
              <Link to="/cart" className="hover:text-amber-400">
                Basket
              </Link>
            </li>
            <li>
              <a href="#" className="hover:text-amber-400">
                Admin Panel
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-3 text-white">Contact</h3>
          <p className="text-gray-400 text-sm">Email: support@example.com</p>
          <p className="text-gray-400 text-sm mt-2">Location: Pakistan</p>
        </div>
      </div>

      <div className="border-t border-slate-800 text-center py-4 text-gray-500 text-sm">
        © 2026 Ecommerce Full Stack Design. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer