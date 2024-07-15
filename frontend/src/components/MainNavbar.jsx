import { Link } from "react-router-dom"
import Logo from "./Logo"
import { IoSearchOutline } from "react-icons/io5"
import NavItem from "./NavItem"


const MainNavbar = () => {
  return (
    <div className="w-full fixed top-0 left-0 h-20 p-2 flex items-center justify-between shadow-md bg-slate-800 shadow-slate-900">
    <div className="">
      <Link className="w-fit" to={"/"}>
        <Logo />
      </Link>
    </div>
    <div className="w-96">
      <form className="hidden h-full  md:flex items-center rounded-md justify-center gap-6 px-2 border w-full">
        <input
          type="text"
          className="p-2 bg-transparent w-full focus:outline-none border-none"
          placeholder="Search Blog"
        />
        <button className="font-bold text-2xl hover:text-blue-500">
          <IoSearchOutline />
        </button>
      </form>
    </div>
   <NavItem/>
  </div>
  )
}

export default MainNavbar