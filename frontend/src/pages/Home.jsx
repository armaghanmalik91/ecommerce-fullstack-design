import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ProductCard from "../components/ProductCard"
import { products } from "../data/products"

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
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 py-6">
        <section className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <aside className="bg-white rounded-xl border border-gray-200 p-5 lg:col-span-1">
            <h2 className="text-lg font-bold text-gray-800 mb-4">Categories</h2>
            <div className="space-y-3">
              {categories.map((category) => (
                <button
                  key={category}
                  className="w-full text-left px-4 py-2 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                >
                  {category}
                </button>
              ))}
            </div>
          </aside>

          <section className="lg:col-span-3 bg-blue-600 rounded-xl overflow-hidden">
            <div className="p-8 md:p-12 text-white min-h-[320px] flex flex-col justify-center">
              <p className="text-blue-100 font-medium mb-3">
                Best Online Shopping Store
              </p>
              <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                Discover Latest Products <br /> With Best Deals
              </h1>
              <p className="text-blue-100 mt-4 max-w-xl">
                Shop electronics, fashion, home products and accessories with a clean and responsive ecommerce experience.
              </p>
              <button className="mt-6 bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg w-fit hover:bg-gray-100">
                Shop Now
              </button>
            </div>
          </section>
        </section>

        <section className="mt-8 bg-white rounded-xl border border-gray-200 p-5">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Deals and Offers</h2>
              <p className="text-gray-500 text-sm mt-1">
                Special discounts on selected products
              </p>
            </div>

            <div className="flex gap-3">
              <div className="bg-gray-900 text-white rounded-lg px-4 py-2 text-center">
                <p className="font-bold">04</p>
                <p className="text-xs">Days</p>
              </div>
              <div className="bg-gray-900 text-white rounded-lg px-4 py-2 text-center">
                <p className="font-bold">13</p>
                <p className="text-xs">Hours</p>
              </div>
              <div className="bg-gray-900 text-white rounded-lg px-4 py-2 text-center">
                <p className="font-bold">45</p>
                <p className="text-xs">Mins</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-2xl font-bold text-gray-800">Featured Products</h2>
            <button className="text-blue-600 font-medium hover:underline">
              View All
            </button>
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