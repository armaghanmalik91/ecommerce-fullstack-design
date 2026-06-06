import { useState } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ProductCard from "../components/ProductCard"
import { products } from "../data/products"

function Products() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = ["All", ...new Set(products.map((product) => product.category))]

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gray-100 overflow-x-hidden">
      <Navbar />

      <main className="w-full max-w-7xl mx-auto px-4 py-6">
        <section className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-800">All Products</h1>
          <p className="text-gray-500 mt-2">
            Browse all available products and filter them by name or category.
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            <input
              type="text"
              placeholder="Search by product name or category..."
              className="w-full min-w-0 md:col-span-2 border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            <select
              className="w-full min-w-0 border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500 bg-white"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-2xl font-bold text-gray-800">
              Products ({filteredProducts.length})
            </h2>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="bg-white border border-gray-200 rounded-xl p-10 text-center">
              <h3 className="text-xl font-bold text-gray-800">No products found</h3>
              <p className="text-gray-500 mt-2">
                Try searching with another name or category.
              </p>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Products