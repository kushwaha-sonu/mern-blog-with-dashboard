import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const MobileNav = () => {
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState(false);
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  return (
    <nav className="absolute top-20 right-0 bg-slate-800 w-64 h-screen">
      {user ? (
        <ul className="flex gap-4 items-center justify-center p-2 flex-col">
          <Link
            to="/"
            className={`text-center border rounded-md border-slate-700 ${
              isActive("/") ? "active-item" : "link"
            }`}
          >
            Home
          </Link>

          <Link
            to="/profile"
            className={`text-center border rounded-md border-slate-700 ${
              isActive("/profile") ? "active-item" : "link"
            }`}
          >
            Profile
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
            to="/about"
            className={`text-center border rounded-md border-slate-700 ${
              isActive("/about") ? "active-item" : "link"
            }`}
          >
            About
          </Link>

          <Link
            to="/sign-in"
            className={`text-center text-nowrap border rounded-md border-slate-700 ${
              isActive("/sign-in") ? "active-item" : "link"
            }`}
          >
            Log Out
          </Link>
        </ul>
      ) : (
        <ul className="flex gap-4 items-center justify-center p-2 flex-col">
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
            to="/sign-in"
            className={`text-center text-nowrap border rounded-md border-slate-700 ${
              isActive("/sign-in") ? "active-item" : "link"
            }`}
          >
            Sign In
          </Link>
        </ul>
      )}
    </nav>
  );
};

export default MobileNav;
