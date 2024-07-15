import { Link, useLocation } from "react-router-dom";

const NavItem = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <div className="">
      <ul className="flex justify-center items-center gap-6">
        <li className="">
          <Link to="/" className={`${isActive("/") ? "active-item" : "link"}`}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={`${isActive("/about") ? "active-item" : "link"}`}
          >
            About
          </Link>
        </li>

        <li>
          <Link
            to="/sign-in"
            className={`${isActive("/sign-in") ? "active-item" : "link"}`}
          >
            Sign In
          </Link>
        </li>
        <li>
          <Link
            to="/sign-up"
            className={`${isActive("/sign-up") ? "active-item" : "link"}`}
          >
            Sign Up
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavItem;
