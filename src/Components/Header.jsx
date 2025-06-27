import { CiSearch, CiUser, CiShoppingCart, CiMenuBurger } from "react-icons/ci";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { ProductContext } from "../context/ProductContext";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartCount, isAuthenticated } = useContext(ProductContext);
  const [state, dispatch] =useContext(AuthContext);
  const navigate = useNavigate()

  function logout(e) {
    e.preventDefault()
    dispatch({ type: "setToken", payload: null})
    localStorage.removeItem("auth-token")
    toast.success("Logout successfully!..")
    navigate("/login")
  }


  return (
    <>
      {/* Mobile Top Bar (only visible on mobile) */}
      <div className="md:hidden bg-[#0B4F6C] py-2 px-4 flex items-center justify-between text-white font-serif">
        {/* Mobile menu button */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <CiMenuBurger size={24} />
        </button>
        
        {/* Brand name */}
        <h3 className="text-xl font-bold">
          <Link to="">Venus</Link>
        </h3>
        
        {/* Icons */}
        <div className="flex gap-4">
          <CiUser size={24} className="cursor-pointer" />
          {/* <li className="relative"> */}
          <Link to="/cart">
          <CiShoppingCart size={24} className="text-white cursor-pointer" />
                {/* {count > 0 && ( */}
                    <span className="absolute top-2 right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount || 0} 
                    </span>
                 {/* )} */}
                {/* </li> */}
                </Link>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className={`fixed inset-y-0 left-0 bg-[#0B4F6C] text-white w-64 z-50 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
        <div className="p-4">
          <div className="flex items-center border border-white rounded-full px-3 py-2 mb-6">
            <CiSearch className="mr-2" />
            <input 
              type="text" 
              className="bg-transparent border-none outline-none w-full placeholder-white" 
              placeholder="Search" 
            />
          </div>
          <ul className="space-y-4">
            <li><Link to="" className="block py-2 hover:bg-[#0c5a7a] px-2 rounded">Home</Link></li>
            <li><Link to="" className="block py-2 hover:bg-[#0c5a7a] px-2 rounded">About</Link></li>
            <li><Link to="" className="block py-2 hover:bg-[#0c5a7a] px-2 rounded">Contact Us</Link></li>
            <li><Link to="" className="block py-2 hover:bg-[#0c5a7a] px-2 rounded">FAQ</Link></li>
            {isAuthenticated ? (<>
              <li><Link onClick={logout} className="block py-2 hover:bg-[#0c5a7a] px-2 rounded">Logout</Link></li>
            </>) : (<>
              <li><Link to="/login" className="block py-2 hover:bg-[#0c5a7a] px-2 rounded">Login</Link></li>
              <li><Link to="/register" className="block py-2 hover:bg-[#0c5a7a] px-2 rounded">Register</Link></li>
            </>)}
            <li><Link to="/product" className="block py-2 hover:bg-[#0c5a7a] px-2 rounded">Product</Link></li>
          </ul>
        </div>
      </div>

      {/* Overlay when menu is open */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Original Desktop Header (unchanged) */}
      <div className="hidden md:flex header bg-[#0B4F6C] py-2 flex-wrap items-center justify-around text-white font-serif gap-2">
        <div className="menu">
          <ul className="flex flex-wrap items-center justify-around gap-5">
            <li><Link to="">Home</Link></li>
            <li><Link to="">About</Link></li>
            <li><Link to="">Contact Us</Link></li>
            {/* {console.log(isAuthenticated)} */}
            {!isAuthenticated ? (<>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Register</Link></li>
            </>) : (
              <>
              <li><button onClick={logout} >Logout</button></li>
              </>
            )}
            <li><Link to="/product" className="block py-2 hover:bg-[#0c5a7a] px-2 rounded">Product</Link></li>
          </ul>
        </div>
        <div className="logo">
          <h3><Link to="">Venus</Link></h3>
        </div>
        <div className="search flex items-center justify-around gap-3">
          <div className="flex items-center space-x-2 px-2 justify-center border w-full border-white rounded-full gap-3">
            <span><CiSearch /></span>
            <input type="text" className="border-none outline-none p-2" placeholder="Search for anything" />
          </div>
          <div>
            <ul className="flex gap-2">
              <li><CiUser size={24} /></li>
                <li className="relative">
                  <Link to="/cart">
                <CiShoppingCart size={24} className="text-white" />
                {/* {count > 0 && ( */}
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount || 0} 
                    </span>
                {/* )} */}
                </Link>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;