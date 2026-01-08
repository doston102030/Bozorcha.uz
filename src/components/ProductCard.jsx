import React from 'react'
import { addToCart } from '../features/productsSlice'
import { useDispatch } from 'react-redux'
import { RiShoppingCart2Line } from 'react-icons/ri'

function ProductCard({ product }) {
  const { image, title, description, price } = product
  const dispatch = useDispatch()

  const addCart = () => {
    dispatch(addToCart({ ...product }))
  }

  return (
    <li
      className="
        group card bg-white/80 backdrop-blur
        rounded-2xl border border-amber-200
        shadow-sm transition-all duration-300
        hover:shadow-2xl hover:-translate-y-2
      "
    >
      {/* IMAGE */}
      <figure className="relative bg-amber-50 rounded-t-2xl py-5 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="
            w-full h-[220px] object-contain
            transition-transform duration-500
            group-hover:scale-110
          "
        />

        {/* PRICE BADGE */}
        <span
          className="
            absolute top-3 right-3
            bg-amber-600 text-white
            px-3 py-1 rounded-full text-sm font-semibold
          "
        >
          $ {price}
        </span>
      </figure>

      {/* BODY */}
      <div className="card-body gap-3">
        <h2 className="card-title text-base text-amber-900 line-clamp-1">
          {title}
        </h2>

        <p className="text-sm text-amber-700 line-clamp-3">{description}</p>

        {/* ACTION */}
        <button
          onClick={addCart}
          className="
            mt-2 w-full btn btn-sm
            bg-amber-600 hover:bg-amber-700
            text-white border-none
            flex items-center justify-center gap-2
            transition-all duration-300
            group-hover:scale-[1.02]
          "
        >
          <RiShoppingCart2Line size={18} />
          Add to Cart
        </button>
      </div>
    </li>
  )
}

export default ProductCard
