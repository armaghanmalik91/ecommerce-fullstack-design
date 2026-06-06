import { Link } from "react-router-dom"

function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition w-full min-w-0">
      <Link to={`/product/${product.id}`}>
        <div className="h-48 bg-gray-100 w-full overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover block hover:scale-105 transition duration-300"
          />
        </div>
      </Link>

      <div className="p-4">
        <p className="text-sm text-blue-600 font-medium">{product.category}</p>

        <Link to={`/product/${product.id}`}>
          <h3 className="text-lg font-semibold text-gray-800 mt-1 hover:text-blue-600">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center gap-2 mt-3">
          <span className="text-xl font-bold text-gray-900">
            ${product.price}
          </span>
          <span className="text-sm text-gray-400 line-through">
            ${product.oldPrice}
          </span>
        </div>

        <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard