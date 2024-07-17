import { Link, useLocation } from "react-router-dom";

const MobileNav = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  return (
    <nav className="absolute top-20 right-0 bg-slate-800 w-64 h-screen">
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
    </nav>
  );
};

export default MobileNav;
