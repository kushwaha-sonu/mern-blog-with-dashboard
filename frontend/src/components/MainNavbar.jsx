import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import { IoSearchOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import MobileNav from "./MobileNav";

const MainNavbar = () => {
  const [user, setUser] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  return (
    <header className="w-full sticky top-0 h-20 shadow-md bg-slate-800 shadow-slate-900">
      <div className="container mx-auto p-2 flex items-center justify-between gap-2">
        <div>
          <Link to={"/"}>
            <Logo />
          </Link>
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
        <nav className="hidden md:block">
          <ul className="flex items-center justify-center gap-6 w-full h-full">
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

            <div className="flex items-center justify-center">
              {user ? (
                <Link to="/dashboard" className="link">
                  <div
                    className={`rounded-lg flex items-center justify-center gap-2 font-bold text-nowrap ${
                      isActive("/sign-up") ? "active-item" : "link"
                    }`}
                  >
                    <CiUser />
                    <p>User</p>
                  </div>
                </Link>
              ) : (
                <Link
                  to="/sign-in"
                  className={`text-center border rounded-md border-slate-700 text-nowrap ${
                    isActive("/sign-in") ? "active-item" : "link"
                  }`}
                >
                  Sign In
                </Link>
              )}
            </div>
          </ul>
        </nav>
        <div
          className="text-2xl font-bold md:hidden items-center flex justify-center"
          onClick={() => setShowMenu(!showMenu)}
        >
        {
          showMenu ? <RxCross1 className="size-10" /> : <GiHamburgerMenu className="size-10" />
        }
          
        </div>

        {showMenu && (
         <MobileNav/>
        )}
      </div>
    </header>
  );
};

export default MainNavbar;
