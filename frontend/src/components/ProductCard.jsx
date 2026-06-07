import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"

function ProductCard({ product }) {
  const { addToCart } = useCart()

  return (
    <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden hover:border-amber-400/70 hover:shadow-2xl hover:shadow-amber-500/10 transition w-full min-w-0 group">
      <Link to={`/product/${product.id}`}>
        <div className="h-48 bg-slate-800 w-full overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover block group-hover:scale-110 transition duration-500"
          />
        </div>
      </Link>

      <div className="p-5">
        <p className="text-sm text-amber-400 font-semibold">
          {product.category}
        </p>

        <Link to={`/product/${product.id}`}>
          <h3 className="text-lg font-bold text-white mt-1 hover:text-amber-400">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center gap-2 mt-3">
          <span className="text-2xl font-black text-white">
            ${product.price}
          </span>
          <span className="text-sm text-gray-500 line-through">
            ${product.oldPrice}
          </span>
        </div>

        <button
          onClick={() => addToCart(product)}
          className="w-full mt-5 bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 py-3 rounded-xl font-black hover:from-amber-300 hover:to-orange-400 shadow-lg shadow-amber-500/20"
        >
          Add to Basket
        </button>
      </div>
    </div>
  )
}

export default ProductCard