import { Link, useLocation } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { FaMicroblog } from "react-icons/fa6";
import { CiLogout } from "react-icons/ci";
import { MdOutlineCreateNewFolder } from "react-icons/md";

const DashNavbar = () => {
  const location = useLocation();
  console.log(location);
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="w-full h-full">
      <ul className="flex gap-4 items-center justify-center p-2 flex-col">
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
          <span className="hidden md:block">dashHome</span>
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
          <span className="hidden md:block">Projects</span>
        </Link>

        <Link
          to="/"
          className={`text-center flex items-center justify-center text-nowrap border rounded-md gap-2 border-slate-700 ${
            isActive("/") ? "active-item" : "link"
          }`}
        >
          <span>
            <CiLogout className="size-8 text-white" />
          </span>
          <span className="hidden md:block">Log Out</span>
        </Link>
      </ul>
    </nav>
  );
};

export default DashNavbar;
