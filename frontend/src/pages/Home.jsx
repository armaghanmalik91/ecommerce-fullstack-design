import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ProductCard from "../components/ProductCard"
import { products } from "../data/products"
import { Link } from "react-router-dom"

function Home() {
  const categories = [
    "Electronics",
    "Fashion",
    "Home & Living",
    "Sports",
    "Bags",
    "Accessories",
  ]

  return (
    <div className="min-h-screen bg-slate-950 overflow-x-hidden">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 py-6">
        <section className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <aside className="bg-slate-900 rounded-2xl border border-slate-800 p-5 lg:col-span-1">
            <h2 className="text-lg font-black text-white mb-4">Categories</h2>

            <div className="space-y-3">
              {categories.map((category) => (
                <button
                  key={category}
                  className="w-full text-left px-4 py-3 rounded-xl text-gray-300 hover:bg-slate-800 hover:text-amber-400"
                >
                  {category}
                </button>
              ))}
            </div>
          </aside>

          <section className="lg:col-span-3 rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900 via-zinc-900 to-stone-950 border border-slate-800 relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(245,158,11,0.20),_transparent_35%)]"></div>

            <div className="relative p-8 md:p-12 text-white min-h-[340px] flex flex-col justify-center">
              <p className="text-amber-400 font-bold mb-3">
                Premium Online Shopping Store
              </p>

              <h1 className="text-3xl md:text-5xl font-black leading-tight">
                Discover Modern Products <br /> With Luxury Deals
              </h1>

              <p className="text-gray-400 mt-5 max-w-xl">
                Shop electronics, fashion, home products and accessories with a clean,
                dark and responsive ecommerce experience.
              </p>

              <Link
                to="/products"
                className="mt-7 bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 font-black px-7 py-3 rounded-xl w-fit hover:from-amber-300 hover:to-orange-400 shadow-lg shadow-amber-500/20"
              >
                Shop Now
              </Link>
            </div>
          </section>
        </section>

        <section className="mt-8 bg-slate-900 rounded-2xl border border-slate-800 p-5">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div>
              <h2 className="text-2xl font-black text-white">Deals and Offers</h2>
              <p className="text-gray-400 text-sm mt-1">
                Special discounts on selected products
              </p>
            </div>

            <div className="flex gap-3">
              {[
                ["04", "Days"],
                ["13", "Hours"],
                ["45", "Mins"],
              ].map(([number, label]) => (
                <div
                  key={label}
                  className="bg-slate-950 border border-slate-800 text-white rounded-xl px-4 py-2 text-center"
                >
                  <p className="font-black text-amber-400">{number}</p>
                  <p className="text-xs text-gray-400">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-8">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-2xl font-black text-white">Featured Products</h2>

            <Link
              to="/products"
              className="text-amber-400 font-bold hover:text-amber-300"
            >
              View All
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Home