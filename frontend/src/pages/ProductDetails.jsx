import { Link, useParams } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { products } from "../data/products"
import { useCart } from "../context/CartContext"

function ProductDetails() {
  const { id } = useParams()
  const product = products.find((item) => item.id === Number(id))
  const { addToCart } = useCart()

  if (!product) {
    return (
      <div className="min-h-screen bg-slate-950">
        <Navbar />

        <main className="max-w-7xl mx-auto px-4 py-10">
          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-10 text-center">
            <h1 className="text-2xl font-black text-white">Product not found</h1>
            <p className="text-gray-400 mt-2">
              The product you are looking for does not exist.
            </p>

            <Link
              to="/products"
              className="inline-block mt-6 bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 px-6 py-3 rounded-xl font-black"
            >
              Back to Products
            </Link>
          </div>
        </main>

        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-950 overflow-x-hidden">
      <Navbar />

      <main className="w-full max-w-7xl mx-auto px-4 py-6">
        <div className="mb-5">
          <Link
            to="/products"
            className="text-amber-400 font-bold hover:text-amber-300"
          >
            ← Back to Products
          </Link>
        </div>

        <section className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-5 md:p-8">
            <div className="bg-slate-950 rounded-2xl overflow-hidden border border-slate-800">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[300px] md:h-[450px] object-cover"
              />
            </div>

            <div className="flex flex-col justify-center">
              <p className="text-amber-400 font-bold">{product.category}</p>

              <h1 className="text-3xl md:text-4xl font-black text-white mt-2">
                {product.name}
              </h1>

              <div className="flex items-center gap-3 mt-5">
                <span className="text-4xl font-black text-white">
                  ${product.price}
                </span>
                <span className="text-lg text-gray-500 line-through">
                  ${product.oldPrice}
                </span>
              </div>

              <p className="text-gray-400 leading-relaxed mt-5">
                {product.description}
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="border border-slate-800 bg-slate-950 rounded-xl p-4">
                  <p className="text-sm text-gray-500">Availability</p>
                  <p className="font-black text-emerald-400 mt-1">In Stock</p>
                </div>

                <div className="border border-slate-800 bg-slate-950 rounded-xl p-4">
                  <p className="text-sm text-gray-500">Stock</p>
                  <p className="font-black text-white mt-1">
                    {product.stock} items available
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => addToCart(product)}
                  className="bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 px-8 py-3 rounded-xl font-black hover:from-amber-300 hover:to-orange-400 shadow-lg shadow-amber-500/20"
                >
                  Add to Basket
                </button>

                <button className="border border-slate-700 text-gray-200 px-8 py-3 rounded-xl font-bold hover:bg-slate-800 hover:text-amber-400">
                  Add to Wishlist
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8 bg-slate-900 rounded-2xl border border-slate-800 p-5 md:p-8">
          <h2 className="text-2xl font-black text-white">Product Information</h2>

          <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-4">
              <p className="text-sm text-gray-500">Category</p>
              <p className="font-bold text-white mt-1">{product.category}</p>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-xl p-4">
              <p className="text-sm text-gray-500">Product ID</p>
              <p className="font-bold text-white mt-1">#{product.id}</p>
            </div>

            <div className="bg-slate-950 border border-slate-800 rounded-xl p-4">
              <p className="text-sm text-gray-500">Delivery</p>
              <p className="font-bold text-white mt-1">3 to 5 working days</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default ProductDetails