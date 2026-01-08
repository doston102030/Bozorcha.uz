import { Link } from 'react-router-dom'
import { RiShoppingCartFill } from 'react-icons/ri'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

function Navbar() {
  const cartProducts = useSelector(state => state.products)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="sticky top-3 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div
          className={`
            flex items-center px-6
            rounded-2xl
            backdrop-blur-xl
            border border-amber-100
            transition-all duration-300
            ${
              scrolled
                ? 'h-14 bg-white/90 shadow-[0_8px_30px_rgba(0,0,0,0.15)]'
                : 'h-16 bg-white/75 shadow-[0_12px_45px_rgba(0,0,0,0.1)]'
            }
          `}
        >
      
          <Link
            to="/"
            className="text-[24px] font-black tracking-tight text-amber-900"
          >
            Bozorcha<span className="text-orange-500">.uz</span>
          </Link>

          <Link
            to="/cart"
            className="ml-auto relative group focus:outline-none"

            {!!cartProducts?.length && (
              <span
                className="
                  absolute
                  -top-1.5
                  -right-1.5
                  z-10
                  min-w-[20px]
                  h-[20px]
                  px-1
                  rounded-full
                  bg-red-500
                  text-white
                  text-[11px]
                  font-bold
                  flex items-center justify-center
                  ring-2 ring-white
                  shadow
                "
              >
                {cartProducts.length > 9 ? '9+' : cartProducts.length}
              </span>
            )}

            <div
              className="
                w-11 h-11
                rounded-xl
                bg-amber-600
                text-white
                flex items-center justify-center
                shadow-md
                transition-all duration-200
                group-hover:bg-amber-700
                group-hover:scale-105
                active:scale-95
              "
            >
              <RiShoppingCartFill size={20} />
            </div>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar
