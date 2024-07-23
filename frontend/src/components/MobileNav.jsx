import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { logout } from "../store/slices/userSlice";
import { CiLogout } from "react-icons/ci";

const MobileNav = () => {
  // eslint-disable-next-line no-unused-vars
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const location = useLocation();
  const  navigate  = useNavigate();
  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };
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
          <button
            onClick={handleLogout}
            className={`text-center flex items-center justify-center text-nowrap border rounded-md gap-2 border-slate-700 link`}
          >
            <span>
              <CiLogout className="size-8 text-white" />
            </span>
            <span className="">Log Out</span>
          </button>
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
