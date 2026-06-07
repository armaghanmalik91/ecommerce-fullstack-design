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
    <div className="min-h-screen bg-slate-950 overflow-x-hidden">
      <Navbar />

      <main className="w-full max-w-7xl mx-auto px-4 py-6">
        <section className="bg-slate-900 rounded-2xl border border-slate-800 p-6 mb-6">
          <h1 className="text-3xl font-black text-white">Shopping Basket</h1>
          <p className="text-gray-400 mt-2">
            Review your selected products before checkout.
          </p>
        </section>

        {cartItems.length === 0 ? (
          <section className="bg-slate-900 rounded-2xl border border-slate-800 p-10 text-center">
            <h2 className="text-2xl font-black text-white">
              Your basket is empty
            </h2>
            <p className="text-gray-400 mt-2">
              Add products to your basket and they will appear here.
            </p>

            <Link
              to="/products"
              className="inline-block mt-6 bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 px-6 py-3 rounded-xl font-black hover:from-amber-300 hover:to-orange-400"
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
                  className="bg-slate-900 rounded-2xl border border-slate-800 p-4 flex flex-col md:flex-row gap-4 hover:border-amber-400/60"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full md:w-32 h-40 md:h-32 object-cover rounded-xl bg-slate-800"
                  />

                  <div className="flex-1">
                    <p className="text-sm text-amber-400 font-bold">
                      {item.category}
                    </p>

                    <Link to={`/product/${item.id}`}>
                      <h2 className="text-xl font-black text-white mt-1 hover:text-amber-400">
                        {item.name}
                      </h2>
                    </Link>

                    <p className="text-gray-400 text-sm mt-2">
                      Unit Price: ${item.price}
                    </p>

                    <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => decreaseQuantity(item.id)}
                          className="w-10 h-10 border border-slate-700 text-white rounded-xl font-black hover:bg-slate-800 hover:text-amber-400"
                        >
                          -
                        </button>

                        <span className="font-black text-white">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() => increaseQuantity(item.id)}
                          className="w-10 h-10 border border-slate-700 text-white rounded-xl font-black hover:bg-slate-800 hover:text-amber-400"
                        >
                          +
                        </button>
                      </div>

                      <div className="flex items-center gap-4">
                        <p className="text-lg font-black text-white">
                          ${item.price * item.quantity}
                        </p>

                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-400 font-bold hover:text-red-300"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <aside className="bg-slate-900 rounded-2xl border border-slate-800 p-6 h-fit">
              <h2 className="text-2xl font-black text-white">Order Summary</h2>

              <div className="mt-5 space-y-4">
                <div className="flex justify-between text-gray-400">
                  <span>Total Items</span>
                  <span>{totalItems}</span>
                </div>

                <div className="flex justify-between text-gray-400">
                  <span>Subtotal</span>
                  <span>${totalPrice}</span>
                </div>

                <div className="flex justify-between text-gray-400">
                  <span>Shipping Fee</span>
                  <span>${shippingFee}</span>
                </div>

                <div className="border-t border-slate-800 pt-4 flex justify-between text-xl font-black text-white">
                  <span>Total</span>
                  <span>${finalTotal}</span>
                </div>
              </div>

              <button className="w-full mt-6 bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 py-3 rounded-xl font-black hover:from-amber-300 hover:to-orange-400 shadow-lg shadow-amber-500/20">
                Proceed to Checkout
              </button>

              <button
                onClick={clearCart}
                className="w-full mt-3 border border-red-500/50 text-red-400 py-3 rounded-xl font-bold hover:bg-red-500/10"
              >
                Clear Basket
              </button>

              <Link
                to="/products"
                className="block text-center mt-4 text-amber-400 font-bold hover:text-amber-300"
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