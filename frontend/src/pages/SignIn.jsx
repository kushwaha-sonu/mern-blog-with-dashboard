import { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { API_URL } from "../constant";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {
  loginFailure,
  loginStart,
  loginSuccess,
} from "../store/slices/userSlice";
import OAuth from "../components/OAuth";

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [eyeClick, setEyeClick] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const stateError = useSelector((state) => state.user.error);
  const isLoggingIn = useSelector((state) => state.user.loggingIn);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleEyeClick = (e) => {
    e.preventDefault();
    setEyeClick(!eyeClick);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    dispatch(loginStart());

    try {
      const response = await fetch(`${API_URL}/api/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: 'include',
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok && data.success) {
        toast.success(data.message);
        dispatch(loginSuccess(data.user));
        setFormData({ email: "", password: "" });
        navigate("/");
      } else {
        toast.warn(data.message);
        dispatch(loginFailure(data.message));
      }
    } catch (error) {
      console.error(error.message);
      toast.error(error.message);
      dispatch(loginFailure(error.message));
    }
  };
  return (
    <Layout>
      <div className=" bg-slate-800 text-white rounded-md p-3">
        <h1 className="text-3xl font-semibold text-center p-2">Sign In</h1>
        <form onSubmit={handleFormSubmit}>
          <div className="mt-3">
            <label htmlFor="email" className="block font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              className="input-item"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mt-3">
            <label htmlFor="password" className="block font-medium">
              Password
            </label>
            <div className="flex px-1 w-full bg-white items-center border border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-slate-500 focus:border-transparent">
              <input
                type={eyeClick ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Enter your password"
                className=" text-slate-800 flex-1 block p-3 border-none outline-none sm:text-sm"
                value={formData.password}
                onChange={handleChange}
              />
              <button
                className="text-black font-semibold text-2xl px-3"
                disabled={formData.password.trim() === ""}
              >
                {eyeClick ? (
                  <IoEye onClick={handleEyeClick} />
                ) : (
                  <IoEyeOff onClick={handleEyeClick} />
                )}
              </button>
            </div>
            {stateError && (
              <p className="text-red-500 py-2">{stateError.message}</p>
            )}
          </div>
          <div className="mt-10">
            <button type="submit" className="button-primary"
            disabled={isLoggingIn}
            >
              {isLoggingIn ? "Logging In..." : "Sign In"}
            </button>
          </div>
        </form>
        <div className="mt-5 flex items-center justify-center">
          <OAuth/>
        </div>
        <div>
          <p className="mt-5 text-center">
            Don &apos;t have an account?{" "}
            <Link to="/sign-up" className="text-blue-500">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default SignIn;
