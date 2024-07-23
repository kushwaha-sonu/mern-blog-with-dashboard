import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import { IoSearchOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import MobileNav from "./MobileNav";

import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/slices/userSlice";

const MainNavbar = () => {
  const user = useSelector((state) => state.user.user);
  // console.log(user);

  const [showMenu, setShowMenu] = useState(false);

  const [userClicked, setUserClicked] = useState(false);

  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
    setUserClicked(false);
  };
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

            <div className="flex items-center justify-center w-full">
              {user ? (
                <div
                  className="cursor-pointer"
                  onClick={() => setUserClicked(!userClicked)}
                >
                  <div
                    className={`rounded-lg flex items-center justify-center gap-2 font-bold text-nowrap link`}
                  >
                    <div className="w-10 h-10">
                      <img
                        className="object-cover"
                        src={user.photoUrl}
                        alt={user.full_name}
                      />
                    </div>
                    <div>
                      <p>{user.full_name}</p>
                    </div>
                  </div>
                </div>
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
          {showMenu ? (
            <RxCross1 className="size-10" />
          ) : (
            <GiHamburgerMenu className="size-10" />
          )}
        </div>

        {showMenu && <MobileNav />}
      </div>
      {userClicked && (
        <div className="relative container mx-auto hidden md:block">
          <div className="absolute right-0 gap-5 top-0 bg-slate-800 p-3 w-52 rounded-md flex flex-col items-center justify-center">
            <Link
              onClick={() => setUserClicked(false)}
              to="/profile"
              className={`text-center border rounded-md border-slate-700 ${
                isActive("/profile") ? "active-item" : "link"
              }`}
            >
              Profile
            </Link>
            <Link
              onClick={() => setUserClicked(false)}
              to="/dashboard"
              className={`text-center border rounded-md border-slate-700 ${
                isActive("/dashboard") ? "active-item" : "link"
              }`}
            >
              Dashboard
            </Link>
            <button
              onClick={handleLogout}
              className={`text-center flex items-center justify-center text-nowrap border rounded-md gap-2 border-slate-700 link`}
            >
              <span>
                <CiLogout className="size-8 text-white" />
              </span>
              <span className="">Log Out</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default MainNavbar;
