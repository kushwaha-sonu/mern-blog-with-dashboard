import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { FaMicroblog } from "react-icons/fa6";
import { CiLogout } from "react-icons/ci";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { useDispatch } from "react-redux";
import { logout } from "../store/slices/userSlice";

const DashNavbar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // console.log(location);
  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
    
  };

  return (
    <nav className="w-full h-full">
      <ul className="flex gap-4 items-center justify-center flex-col">
        <Link
          to="dash-home"
          className={`text-center flex items-center justify-center border rounded-md gap-2 border-slate-700 ${
            isActive("/dashboard/dash-home") ? "active-item" : "link"
          }`}
        >
          <span>
            <IoMdHome className="size-8 text-white" />
          </span>
          <span className="text-wrap hidden md:block">Dashboard</span>
        </Link>
        <Link
          to="all-blogs"
          className={`text-center flex items-center justify-center border rounded-md gap-2 border-slate-700 ${
            isActive("/dashboard/all-blogs") ? "active-item" : "link"
          }`}
        >
          <span>
            <FaMicroblog className="size-8 text-white" />
          </span>
          <span className="hidden md:block">All Blogs</span>
        </Link>

        <Link
          to="create-blog"
          className={`text-center flex items-center justify-center border rounded-md gap-2 border-slate-700 ${
            isActive("/dashboard/create-blog") ? "active-item" : "link"
          }`}
        >
          <span>
            <MdOutlineCreateNewFolder className="size-8 text-white" />
          </span>
          <span className="hidden md:block text-nowrap">Create Blog</span>
        </Link>

        <button
          onClick={handleLogout}
          className={`text-center flex items-center justify-center text-nowrap border rounded-md gap-2 border-slate-700 link`}
        >
          <span>
            <CiLogout className="size-8 text-white" />
          </span>
          <span className="hidden md:block">Log Out</span>
        </button>
      </ul>
    </nav>
  );
};

export default DashNavbar;
