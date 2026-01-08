import { Link } from 'react-router-dom'
import { RiShoppingCartFill } from 'react-icons/ri'

function Navbar() {
  return (
    <header className="navbar bg-inherit shadow-md">
      <div className="container flex items-center">
        <Link to="/" className="btn btn-ghost text-xl mr-auto">
          <h1 className="text-amber-700 text-2xl  ">Bozorcha.uz</h1>
        </Link>

        <button className="bg-amber-700 btn">
          <RiShoppingCartFill size={18} />
        </button>
      </div>
    </header>
  )
}

export default Navbar
