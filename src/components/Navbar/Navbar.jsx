import { Link } from 'react-router-dom'
import { RiShoppingCartFill } from 'react-icons/ri'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

function Navbar() {
  const cartProducts = useSelector(state => state.products || [])
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
   
    <header className="sticky top-2 md:top-3 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-3 md:px-4">
        <div
          className={`
            flex items-center px-4 md:px-6
            rounded-xl md:rounded-2xl
            backdrop-blur-xl
            border border-amber-100/50
            transition-all duration-300
            ${
              scrolled
                ? 'h-14 bg-white/90 shadow-[0_8px_30px_rgba(0,0,0,0.12)]'
                : 'h-16 bg-white/75 shadow-[0_12px_45px_rgba(0,0,0,0.08)]'
            }
          `}
        >
    
          <Link
            to="/"
            className="text-[20px] md:text-[24px] font-black tracking-tight text-amber-900 active:scale-95 transition-transform"
          >
            Bozorcha<span className="text-orange-500">.uz</span>
          </Link>

          <Link to="/Cart" className="ml-auto relative group flex items-center">
            {cartProducts.length > 0 && (
              <span
                className="
                absolute -top-1 -right-1 z-10
                min-w-[18px] md:min-w-[20px] h-[18px] md:h-[20px] px-1
                rounded-full bg-red-500 text-white
                text-[10px] md:text-[11px] font-bold
                flex items-center justify-center
                ring-2 ring-white shadow-sm
                animate-in fade-in zoom-in duration-300
              "
              >
          
                {cartProducts.length > 9 ? '9+' : cartProducts.length}
              </span>
            )}

            <div
              className="
              w-10 h-10 md:w-11 md:h-11 rounded-lg md:rounded-xl
              bg-amber-600 text-white
              flex items-center justify-center
              shadow-md transition-all duration-200
              group-hover:bg-amber-700
              group-hover:scale-105
              active:scale-90
            "
            >
              <RiShoppingCartFill className="text-[18px] md:text-[20px]" />
            </div>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar