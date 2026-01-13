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
  
    <div className="min-h-screen bg-amber-50 py-6 md:py-12 px-4 font-sans overflow-x-hidden">
      <Toaster position="top-center" />

      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
        <h3 className="text-2xl md:text-3xl font-black text-[#0F172A] flex items-center gap-4">
          Savatcha{' '}
          <span className="bg-amber-800 text-white text-sm py-1.5 px-4 rounded-full">
            {cartProduct.length}
          </span>
        </h3>
        <button
          onClick={() => (window.location.href = '/')}
          className="w-full sm:w-auto text-[10px] md:text-[11px] font-black text-amber-900 bg-amber-100 hover:bg-amber-200 px-6 py-3 rounded-xl uppercase tracking-[0.15em] transition-all shadow-md active:scale-95 border border-amber-200/50"
        >
          Xaridni Davom ettirish
        </button>
      </div>

      {cartProduct.length > 0 ? (
        <div className="max-w-5xl mx-auto space-y-8">
        
          <div className="grid gap-4">
            {cartProduct.map(product => (
              <div
                key={product.id}
             
                className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-6 flex flex-col md:flex-row items-center gap-4 md:gap-8 shadow-sm border border-[#F1F5F9] w-full overflow-hidden"
              >
               
                <div className="w-32 h-32 flex-shrink-0 bg-white border border-[#F1F5F9] rounded-2xl p-2">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1 min-w-0 w-full text-center md:text-left">
                  <h3 className="font-bold text-[#1E293B] text-lg mb-1 truncate px-2 md:px-0">
                    {product.title}
                  </h3>
                  <p className="text-[#64748B] text-xs md:text-sm line-clamp-2 mb-3 leading-relaxed">
                    {product.description}
                  </p>
                  <p className="text-[#2563EB] font-black text-xl">
                    ${product.price}
                  </p>
                </div>

                <div className="flex flex-row md:flex-col items-center justify-between w-full md:w-auto gap-4 border-t md:border-t-0 pt-4 md:pt-0">
                  <div className="flex items-center bg-[#F1F5F9] rounded-xl border border-[#E2E8F0] p-1">
                    <button
                      onClick={() => dispatch(decreaseAmount(product.id))}
                      className="w-10 h-10 flex items-center justify-center text-xl font-bold bg-white rounded-lg shadow-sm text-red-500 active:scale-90 transition-transform"
                    >
                      −
                    </button>
                    <span className="w-10 text-center font-black text-[#0F172A]">
                      {product.amount}
                    </span>
                    <button
                      onClick={() => dispatch(increaseAmount(product.id))}
                      className="w-10 h-10 flex items-center justify-center text-xl font-bold bg-white rounded-lg shadow-sm text-[#2563EB] active:scale-90 transition-transform"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => dispatch(removeFromCart(product.id))}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
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
                </div>
              </div>
            ))}
          </div>

        
          <div className="max-w-xl mx-auto bg-[#0F172A] text-white rounded-[24px] md:rounded-[40px] p-6 md:p-10 shadow-2xl">
            <h2 className="text-lg md:text-xl font-bold mb-6 text-center text-white/90 uppercase tracking-widest">
              Tasdiqlash
            </h2>
            <form onSubmit={handleCheckout} className="space-y-4">
              <input
                required
                placeholder="Ismingiz"
                value={formData.fullName}
                onChange={e =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
                className="w-full bg-white/5 border border-white/10 px-5 py-4 rounded-xl outline-none focus:border-blue-500 transition-all"
              />
              <input
                required
                placeholder="+998"
                value={formData.phone}
                onChange={e =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="w-full bg-white/5 border border-white/10 px-5 py-4 rounded-xl outline-none focus:border-blue-500 transition-all"
              />
              <input
                required
                placeholder="Manzilingiz"
                value={formData.address}
                onChange={e =>
                  setFormData({ ...formData, address: e.target.value })
                }
                className="w-full bg-white/5 border border-white/10 px-5 py-4 rounded-xl outline-none focus:border-blue-500 transition-all"
              />
              <div className="flex flex-col sm:flex-row items-center justify-between mt-8 pt-6 border-t border-white/10 gap-4">
                <div className="text-center sm:text-left">
                  <p className="text-white/40 text-[10px] uppercase font-bold">
                    Summa:
                  </p>
                  <p className="text-2xl font-black">
                    ${totalPrice.toFixed(2)}
                  </p>
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-[#2563EB] hover:bg-blue-600 px-10 py-4 rounded-xl font-bold uppercase tracking-widest transition-all active:scale-95"
                >
                  Tasdiqlash
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
     
        <div className="max-w-xl mx-auto text-center py-20 bg-white rounded-[32px] border border-[#F1F5F9] shadow-sm">
          <p className="text-[#64748B] text-lg mb-8 font-medium">
            Savatchangiz bo'sh
          </p>
          <button
            onClick={() => (window.location.href = '/')}
            className="bg-[#0F172A] text-white px-10 py-4 rounded-xl font-bold uppercase hover:bg-blue-600 transition-all"
          >
            Xaridni boshlash
          </button>
        </div>
      )}
    </div>
  )
}

export default Cart
