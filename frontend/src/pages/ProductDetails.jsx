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
      <div className="min-h-screen bg-gray-100">
        <Navbar />

        <main className="max-w-7xl mx-auto px-4 py-10">
          <div className="bg-white rounded-xl border border-gray-200 p-10 text-center">
            <h1 className="text-2xl font-bold text-gray-800">
              Product not found
            </h1>
            <p className="text-gray-500 mt-2">
              The product you are looking for does not exist.
            </p>

            <Link
              to="/products"
              className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
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
    <div className="min-h-screen bg-gray-100 overflow-x-hidden">
      <Navbar />

      <main className="w-full max-w-7xl mx-auto px-4 py-6">
        <div className="mb-5">
          <Link
            to="/products"
            className="text-blue-600 font-medium hover:underline"
          >
            ← Back to Products
          </Link>
        </div>

        <section className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-5 md:p-8">
            <div className="bg-gray-100 rounded-xl overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[300px] md:h-[450px] object-cover"
              />
            </div>

            <div className="flex flex-col justify-center">
              <p className="text-blue-600 font-semibold">
                {product.category}
              </p>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
                {product.name}
              </h1>

              <div className="flex items-center gap-3 mt-5">
                <span className="text-3xl font-bold text-gray-900">
                  ${product.price}
                </span>
                <span className="text-lg text-gray-400 line-through">
                  ${product.oldPrice}
                </span>
              </div>

              <p className="text-gray-600 leading-relaxed mt-5">
                {product.description}
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <p className="text-sm text-gray-500">Availability</p>
                  <p className="font-bold text-green-600 mt-1">
                    In Stock
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <p className="text-sm text-gray-500">Stock</p>
                  <p className="font-bold text-gray-800 mt-1">
                    {product.stock} items available
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => addToCart(product)}
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700"
                >
                  Add to Cart
                </button>

                <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50">
                  Add to Wishlist
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8 bg-white rounded-xl border border-gray-200 p-5 md:p-8">
          <h2 className="text-2xl font-bold text-gray-800">
            Product Information
          </h2>

          <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-500">Category</p>
              <p className="font-semibold text-gray-800 mt-1">
                {product.category}
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-500">Product ID</p>
              <p className="font-semibold text-gray-800 mt-1">
                #{product.id}
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-500">Delivery</p>
              <p className="font-semibold text-gray-800 mt-1">
                3 to 5 working days
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default ProductDetails