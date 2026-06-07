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
    <div className="min-h-screen bg-slate-950 overflow-x-hidden">
      <Navbar />

      <main className="w-full max-w-7xl mx-auto px-4 py-6">
        <section className="bg-slate-900 rounded-2xl border border-slate-800 p-6 mb-6">
          <h1 className="text-3xl font-black text-white">All Products</h1>
          <p className="text-gray-400 mt-2">
            Browse all available products and filter them by name or category.
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            <input
              type="text"
              placeholder="Search by product name or category..."
              className="w-full min-w-0 md:col-span-2 bg-slate-950 border border-slate-700 text-white placeholder:text-gray-500 rounded-xl px-4 py-3 outline-none focus:border-amber-400"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            <select
              className="w-full min-w-0 bg-slate-950 border border-slate-700 text-white rounded-xl px-4 py-3 outline-none focus:border-amber-400"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((category) => (
                <option key={category} value={category} className="bg-slate-900">
                  {category}
                </option>
              ))}
            </select>
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-2xl font-black text-white">
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
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-10 text-center">
              <h3 className="text-xl font-black text-white">No products found</h3>
              <p className="text-gray-400 mt-2">
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