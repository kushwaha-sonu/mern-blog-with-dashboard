import { Link, useNavigate } from "react-router-dom";
import { IoEyeOff } from "react-icons/io5";
import { IoEye } from "react-icons/io5";
import { useState } from "react";
import Layout from "../components/Layout";
import { API_URL } from "../constant";
import { toast } from "react-toastify";
import OAuth from "../components/OAuth";

const SignUp = () => {
  const navigate = useNavigate();
  const [eyeClick, setEyeClick] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState();
  const [formData, setFormData] = useState({
    name: "",
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

    try {
      const response = await fetch(`${API_URL}/api/user/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success === true) {
        toast.success(data.message);

        setFormData({
          name: "",
          email: "",
          password: "",
        });
        navigate("/sign-in");
      } else {
        toast.warn(data.message);
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
      setError(error.message);
    }
  };

  return (
    <Layout>
      <div className="bg-slate-800 text-white rounded-md p-3">
        <h1 className="text-3xl font-semibold text-center p-2">Sign Up</h1>
        <form onSubmit={handleFormSubmit}>
          <div className="mt-3">
            <label htmlFor="name" className="block font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="input-item"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
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
          <div className="mt-3 flex flex-col justify-center">
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
            {error && <p className="text-red-500 py-2">{error}</p>}
          </div>
          <div className="mt-10">
            <button type="submit" className="button-primary">
              Sign Up
            </button>
          </div>
        </form>
        <div className="mt-5 flex items-center justify-center">
          <OAuth />
        </div>
        <div>
          <p className="mt-5 text-center">
            Already have an account?{" "}
            <Link to="/sign-in" className="text-blue-500">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default SignUp;
