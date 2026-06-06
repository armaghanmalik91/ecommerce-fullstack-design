function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-3">Ecommerce</h2>
          <p className="text-gray-400 text-sm">
            A responsive full-stack ecommerce web application built during internship.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Home</li>
            <li>Products</li>
            <li>Cart</li>
            <li>Admin Panel</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <p className="text-gray-400 text-sm">Email: support@example.com</p>
          <p className="text-gray-400 text-sm mt-2">Location: Pakistan</p>
        </div>
      </div>

      <div className="border-t border-gray-800 text-center py-4 text-gray-400 text-sm">
        © 2026 Ecommerce Full Stack Design. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer