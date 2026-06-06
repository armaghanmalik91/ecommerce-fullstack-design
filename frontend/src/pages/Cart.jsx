import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { useCart } from "../context/CartContext"

function Cart() {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
    totalItems,
    totalPrice,
  } = useCart()

  const shippingFee = cartItems.length > 0 ? 10 : 0
  const finalTotal = totalPrice + shippingFee

  return (
    <div className="min-h-screen bg-gray-100 overflow-x-hidden">
      <Navbar />

      <main className="w-full max-w-7xl mx-auto px-4 py-6">
        <section className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Shopping Cart</h1>
          <p className="text-gray-500 mt-2">
            Review your selected products before checkout.
          </p>
        </section>

        {cartItems.length === 0 ? (
          <section className="bg-white rounded-xl border border-gray-200 p-10 text-center">
            <h2 className="text-2xl font-bold text-gray-800">
              Your cart is empty
            </h2>
            <p className="text-gray-500 mt-2">
              Add products to your cart and they will appear here.
            </p>

            <Link
              to="/products"
              className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
            >
              Continue Shopping
            </Link>
          </section>
        ) : (
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl border border-gray-200 p-4 flex flex-col md:flex-row gap-4"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full md:w-32 h-40 md:h-32 object-cover rounded-lg bg-gray-100"
                  />

                  <div className="flex-1">
                    <p className="text-sm text-blue-600 font-medium">
                      {item.category}
                    </p>

                    <Link to={`/product/${item.id}`}>
                      <h2 className="text-xl font-bold text-gray-800 mt-1 hover:text-blue-600">
                        {item.name}
                      </h2>
                    </Link>

                    <p className="text-gray-500 text-sm mt-2">
                      Unit Price: ${item.price}
                    </p>

                    <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => decreaseQuantity(item.id)}
                          className="w-9 h-9 border border-gray-300 rounded-lg font-bold hover:bg-gray-100"
                        >
                          -
                        </button>

                        <span className="font-bold text-gray-800">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() => increaseQuantity(item.id)}
                          className="w-9 h-9 border border-gray-300 rounded-lg font-bold hover:bg-gray-100"
                        >
                          +
                        </button>
                      </div>

                      <div className="flex items-center gap-4">
                        <p className="text-lg font-bold text-gray-900">
                          ${item.price * item.quantity}
                        </p>

                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-600 font-medium hover:underline"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <aside className="bg-white rounded-xl border border-gray-200 p-6 h-fit">
              <h2 className="text-2xl font-bold text-gray-800">
                Order Summary
              </h2>

              <div className="mt-5 space-y-4">
                <div className="flex justify-between text-gray-600">
                  <span>Total Items</span>
                  <span>{totalItems}</span>
                </div>

                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${totalPrice}</span>
                </div>

                <div className="flex justify-between text-gray-600">
                  <span>Shipping Fee</span>
                  <span>${shippingFee}</span>
                </div>

                <div className="border-t border-gray-200 pt-4 flex justify-between text-xl font-bold text-gray-900">
                  <span>Total</span>
                  <span>${finalTotal}</span>
                </div>
              </div>

              <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700">
                Proceed to Checkout
              </button>

              <button
                onClick={clearCart}
                className="w-full mt-3 border border-red-300 text-red-600 py-3 rounded-lg font-semibold hover:bg-red-50"
              >
                Clear Cart
              </button>

              <Link
                to="/products"
                className="block text-center mt-4 text-blue-600 font-medium hover:underline"
              >
                Continue Shopping
              </Link>
            </aside>
          </section>
        )}
      </main>

      <Footer />
    </div>
  )
}

export default Cart