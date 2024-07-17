import { IoSearchOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <header className="">
      <div className="flex items-center justify-between flex-col">
        <div>
          <div className="flex items-center w-full text-xl justify-center gap-1 p-3 md:text-2xl font-bold bg-gradient-to-r from-blue-500 to-pink-500/70 rounded-lg text-white hover:bg-gradient-to-tl transition-all cursor-pointer">
            <span className="text-gray-900">Blog</span>
            <span className="bg-gradient-to-r from-gray-900/70 to-gray-900 bg-clip-text text-transparent">
              Ease
            </span>
          </div>
        </div>
        <form className="hidden md:block">
          <div className="flex items-center rounded-md justify-center gap-6 px-2 border">
            <input
              type="text"
              className="p-2 bg-transparent w-full focus:outline-none border-none"
              placeholder="Search Blog"
            />
            <button className="font-bold text-2xl hover:text-blue-500">
              <IoSearchOutline />
            </button>
          </div>
        </form>
        <nav className="">
          <ul className="flex gap-4 items-center justify-center p-2 w-full">
            <Link
              to="/"
              className={`text-center border rounded-md border-slate-700 ${
                isActive("/") ? "active-item" : "link"
              }`}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={`text-center border rounded-md border-slate-700 ${
                isActive("/about") ? "active-item" : "link"
              }`}
            >
              About
            </Link>

            <Link
              to="/dashboard"
              className={`text-center border rounded-md border-slate-700 ${
                isActive("/dashboard") ? "active-item" : "link"
              }`}
            >
              Dashboard
            </Link>

            <Link
              to="/projects"
              className={`text-center border rounded-md border-slate-700 ${
                isActive("/projects") ? "active-item" : "link"
              }`}
            >
              Projects
            </Link>

            <Link
              to="/sign-in"
              className={`text-center text-nowrap border rounded-md border-slate-700 ${
                isActive("/sign-in") ? "active-item" : "link"
              }`}
            >
              Sign In
            </Link>

            <Link
              to="/sign-up"
              className={`text-center text-nowrap border rounded-md border-slate-700 ${
                isActive("/sign-up") ? "active-item" : "link"
              }`}
            >
              Sign Up
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
