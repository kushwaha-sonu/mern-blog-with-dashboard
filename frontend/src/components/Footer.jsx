import { Link } from "react-router-dom";
import { FaFacebook,FaInstagram ,FaTwitter,FaGithub} from "react-icons/fa";


import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="container mx-auto p-2 bg-slate-800 text-white">
      <div className="flex flex-col justify-between ">
        <div className="flex items-center justify-between flex-col md:flex-row">
          <div className="flex-1">
            <div className="w-fit py-3">
              <Link to={"/"}>
                <Logo />
              </Link>
            </div>
            <div className="mt-2">
              <Link to={'/about'} className="text-xl hover:text-blue-500 hover:underline underline-offset-2 font-semibold">About Us</Link>
              <p className="text-sm">
                We are a team of professionals who are dedicated to provide you
                with the best services
              </p>
            </div>
            <div className="mt-3">
              <p className="text-xl font-semibold">Contact us at</p>
              <div className="flex gap-8 items-center">
                <p className="text-sm hover:underline underline-offset-2 cursor-pointer hover:text-blue-600 "><span className="">Email: </span>+91 1234567890</p>
                <p className="text-sm hover:underline underline-offset-2 cursor-pointer hover:text-blue-600 "><span className="">Phone: </span>sonu@gmail.com</p>
              </div>
            </div>
            <div className="my-2">
              <p className="text-xl font-semibold">Follow us on</p>
              <div className="flex items-center gap-2">
                <a href="#" className="text-xl md:text-2xl hover:text-orange-600 hover:bg-slate-700 p-1 md:p-2 rounded-md cursor-pointer flex items-center justify-center"><FaFacebook /></a>
                <a href="#" className="text-xl md:text-2xl hover:text-orange-600 hover:bg-slate-700 p-1 md:p-2 rounded-md cursor-pointer flex items-center justify-center"><FaTwitter/></a>
                <a href="#" className="text-xl md:text-2xl hover:text-orange-600 hover:bg-slate-700 p-1 md:p-2 rounded-md cursor-pointer flex items-center justify-center"><FaInstagram/></a>
                <a href="#" className="text-xl md:text-2xl hover:text-orange-600 hover:bg-slate-700 p-1 md:p-2 rounded-md cursor-pointer flex items-center justify-center"><FaGithub/></a>

              </div>
            </div>
          </div>

          <div className="p-4 flex-1 w-full items-center justify-center">
            <div className="max-w-lg mx-auto text-white rounded-md p-3">
              <h1 className="text-xl md:text-2xl font-semibold text-center p-2">
                Subscribe Our Newsletter
              </h1>
              <form className="flex items-center justify-center">
                <div className="mt-3 flex w-full items-center justify-center flex-col md:flex-row gap-2">
                  <div className="flex-1">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter your email address"
                      className="p-2 md:p-3 text-nowrap text-gray-800 rounded-md w-full focus:outline-none border-none"
                    />
                  </div>
                  <div className="flex-1">
                    <button
                      type="submit"
                      className=" w-full p-2 md:p-3 font-bold bg-gradient-to-r from-blue-500 to-pink-500/70 rounded-lg text-white hover:bg-gradient-to-tl transition-all cursor-pointer"
                    >
                      Subscribe
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-400 flex items-center justify-center">
          <p className="text-center text-sm p-2">
            &copy; 2021 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
