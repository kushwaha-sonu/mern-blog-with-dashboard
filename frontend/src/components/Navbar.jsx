
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="">
      <ul className="flex gap-4 flex-col items-center justify-center p-2 w-full">
        <Link
          to="/"
          className={`text-center border rounded-md border-slate-700 ${isActive("/") ? "active-item" : "link"}`}
        >
          Home
        </Link>

        <Link
          to="/about"
          className={`text-center border rounded-md border-slate-700 ${isActive("/about") ? "active-item" : "link"}`}
        >
          About
        </Link>

        <Link
          to="/dashboard"
          className={`text-center border rounded-md border-slate-700 ${isActive("/dashboard") ? "active-item" : "link"}`}
        >
          Dashboard
        </Link>

        <Link
          to="/projects"
          className={`text-center border rounded-md border-slate-700 ${isActive("/projects") ? "active-item" : "link"}`}
        >
          Projects
        </Link>

        <Link
          to="/sign-in"
          className={`text-center border rounded-md border-slate-700 ${isActive("/sign-in") ? "active-item" : "link"}`}
        >
          Sign In
        </Link>

        <Link
          to="/sign-up"
          className={`text-center border rounded-md border-slate-700 ${isActive("/sign-up") ? "active-item" : "link"}`}
        >
          Sign Up
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
