import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { setOrder } from '../../../features/checkoutSlice'
import {
  removeFromCart,
  increaseAmount,
  decreaseAmount,
  clearCart,
} from '../../../features/productsSlice'

function Cart() {
  const cartProduct = useSelector(state => state.products)
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    address: '',
  })
  const totalPrice = cartProduct.reduce(
    (acc, item) => acc + item.price * item.amount,
    0
  )

  const handleCheckout = e => {
    e.preventDefault()
    dispatch(setOrder({ ...formData, items: cartProduct, total: totalPrice }))
    dispatch(clearCart())
    toast.success(`Buyurtmangiz qabul qilindi!`, {
      style: { borderRadius: '12px', background: '#0F172A', color: '#fff' },
    })
    setFormData({ fullName: '', phone: '', address: '' })
  }

  return (
    <div className="min-h-screen bg-amber-50 py-12 px-4 font-sans">
      <Toaster position="top-center" />

      {/* 1. HEADER */}
      <div className="max-w-5xl mx-auto flex items-center justify-between mb-10 px-2">
        <h3 className="text-3xl font-black text-[#0F172A] flex items-center gap-4">
          Savatcha{' '}
          <span className="bg-amber-800 text-white text-sm py-1.5 px-4 rounded-full">
            {cartProduct.length}
          </span>
        </h3>
       <button
  onClick={() => (window.location.href = '/')}
  className="text-[11px] font-black text-amber-900 bg-amber-100 hover:bg-amber-200 px-6 py-3 rounded-xl uppercase tracking-[0.15em] transition-all duration-300 shadow-[0_10px_20px_rgba(217,119,6,0.2)] hover:shadow-[0_15px_25px_rgba(217,119,6,0.3)] active:scale-95 border border-amber-200/50"
>
  Xaridni Davom ettirish
</button>
      </div>

      {cartProduct.length > 0 ? (
        <div className="max-w-5xl mx-auto space-y-12">
        
          <div className="grid gap-6">
            {cartProduct.map(product => (
              <div
                key={product.id}
                className="bg-white rounded-3xl p-7 flex items-center gap-8 shadow-sm border border-[#F1F5F9] hover:shadow-md transition-all"
              >
              
                <div className="w-32 h-32 flex-shrink-0 bg-white border border-[#F1F5F9] rounded-2xl p-3">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain"
                  />
                </div>

           
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-[#1E293B] text-lg mb-2 truncate">
                    {product.title}
                  </h3>
                  <p className="text-[#64748B] text-sm line-clamp-2 mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  <p className="text-[#2563EB] font-black text-lg">
                    ${product.price.toLocaleString()}
                  </p>
                </div>

            
                <div className="flex flex-col items-end justify-between h-32 py-1">
                 
                  <button
                    onClick={() => dispatch(removeFromCart(product.id))}
                    className="group p-2 -mr-2 text-[#CBD5E1] text-red-500 transition-all transform hover:scale-110"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>

                  <div className="flex items-center bg-[#F1F5F9] rounded-xl border border-[#E2E8F0] p-1.5 shadow-inner">
                    <button
                      onClick={() => dispatch(decreaseAmount(product.id))}
                      className="w-10 h-10 flex items-center justify-center text-2xl font-medium bg-white rounded-lg shadow-sm text-red-500 active:bg-red-50 transition-all"
                    >
                      −
                    </button>
                    <span className="w-12 text-center font-black text-base text-[#0F172A]">
                      {product.amount}
                    </span>
                    <button
                      onClick={() => dispatch(increaseAmount(product.id))}
                      className="w-10 h-10 flex items-center justify-center text-2xl font-medium bg-white rounded-lg shadow-sm  text-[#2563EB] active:bg-blue-50 transition-all"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          
          <div className="max-w-xl mx-auto bg-[#0F172A] text-white rounded-[20px] p-10 shadow-2xl">
            <h2 className="text-xl font-bold mb-8 text-center text-white/90 uppercase tracking-[0.3em]">
              Xaridni tasdiqlash
            </h2>

            <form onSubmit={handleCheckout} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                  required
                  placeholder="Ismingiz"
                  value={formData.fullName}
                  onChange={e =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  className="w-full bg-white/5 border border-white/10 px-5 py-4 rounded-2xl text-base outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-all placeholder:text-white/20"
                />
                <input
                  required
                  placeholder="+998"
                  value={formData.phone}
                  onChange={e =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full bg-white/5 border border-white/10 px-5 py-4 rounded-2xl text-base outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-all placeholder:text-white/20"
                />
              </div>
              <input
                required
                placeholder="Manzilingiz"
                value={formData.address}
                onChange={e =>
                  setFormData({ ...formData, address: e.target.value })
                }
                className="w-full bg-white/5 border border-white/10 px-5 py-4 rounded-2xl text-base outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-all placeholder:text-white/20"
              />

              <div className="flex items-center justify-between mt-10 pt-8 border-t border-white/10">
                <div>
                  <p className="text-white/40 text-[11px] uppercase font-bold mb-1 tracking-wider">
                    Umumiy summa:
                  </p>
                  <p className="text-3xl font-black text-white">
                    ${totalPrice.toFixed(2)}
                  </p>
                </div>
                <button
                  type="submit"
                  className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-10 py-4 rounded-2xl font-bold text-sm uppercase tracking-widest transition-all active:scale-95 shadow-xl shadow-blue-500/20"
                >
                  Tasdiqlash
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className="max-w-xl  mx-auto text-center py-24 bg-white rounded-[40px] border border-[#F1F5F9] shadow-sm">
          <p className="text-[#64748B] text-xl mb-8 font-medium">
            Savatchangiz bo'sh
          </p>
          <button
            onClick={() => (window.location.href = '/')}
            className="bg-[#0F172A] text-white px-12 py-4 rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-[#2563EB] transition-all shadow-lg"
          >
            Xaridni boshlash
          </button>
        </div>
      )}
    </div>
  )
}

export default Cart
