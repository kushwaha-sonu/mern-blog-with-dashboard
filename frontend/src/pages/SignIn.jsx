import { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

const SignIn = () => {
  const [eyeClick, setEyeClick] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(false);
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

  const handleFormSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
    setFormData({
      name: "",
      email: "",
      password: "",
    });
  };
  return (
    <Layout>
      <div className=" bg-slate-800 text-white rounded-md p-3">
        <h1 className="text-3xl font-semibold text-center p-2">Sign In</h1>
        <form onSubmit={handleFormSubmit}>
          <div className="mt-3">
            <label className="block font-medium">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email address"
              className="input-item"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mt-3">
            <label className="block font-medium">Password</label>
            <div className="flex px-1 w-full bg-white items-center border border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-slate-500 focus:border-transparent">
              <input
                type={eyeClick ? "text" : "password"}
                name="password"
                id="password"
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
            {error && <p className="text-red-500 py-2">error message</p>}
          </div>
          <div className="mt-10">
            <button type="submit" className="button-primary">
              Sign In
            </button>
          </div>
        </form>
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
