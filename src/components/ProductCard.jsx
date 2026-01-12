import React from 'react'
import { addToCart } from '../features/productsSlice'
import { useDispatch } from 'react-redux'
import { RiShoppingCart2Line } from 'react-icons/ri'
import toast from 'react-hot-toast'

function ProductCard({ product }) {
  const { image, title, description, price } = product
  const dispatch = useDispatch()

  const addCart = () => {
    dispatch(addToCart({ ...product }))

    toast.custom(
      t => (
        <div
          className={`${
            t.visible ? 'animate-enter' : 'animate-leave'
          } max-w-[280px] w-full bg-white/95 backdrop-blur-md shadow-2xl rounded-2xl pointer-events-auto flex items-center p-3 ring-1 ring-amber-500/30 border-b-[3px] border-amber-600`}
        >

          <div className="flex-shrink-0">
            <img
              className="h-11 w-11 rounded-xl object-contain bg-amber-50 p-2 shadow-sm"
              src={image}
              alt={title}
            />
          </div>

          <div className="ml-3.5 overflow-hidden">
            <p className="text-[13px] font-black text-amber-900 leading-tight">
              Savatchaga qo'shildi!
            </p>
            <p className="mt-0.5 text-[11px] text-amber-700 truncate font-medium">
              {title}
            </p>
          </div>
        </div>
      ),
      {
        duration: 2000,
        position: 'top-center',
      }
    )
  }

  return (
    <li className="group card bg-white/80 backdrop-blur rounded-2xl border border-amber-200 shadow-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
      <figure className="relative bg-amber-50 rounded-t-2xl py-5 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-[220px] object-contain transition-transform duration-500 group-hover:scale-110"
        />
        <span className="absolute top-3 right-3 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
          $ {price}
        </span>
      </figure>

      <div className="card-body gap-2 p-4">
        <h2 className="card-title text-base font-bold text-amber-900 line-clamp-1">
          {title}
        </h2>
        <p className="text-sm text-amber-700 line-clamp-2 leading-tight">
          {description}
        </p>

        <button
          onClick={addCart}
          className="mt-2 w-full btn btn-sm bg-amber-600 hover:bg-amber-700 text-white border-none flex items-center justify-center gap-2 transition-all duration-300 active:scale-95 shadow-md shadow-amber-600/20"
        >
          <RiShoppingCart2Line size={18} />
          Add to Cart
        </button>
      </div>
    </li>
  )
}

export default ProductCard
