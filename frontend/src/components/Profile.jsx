import { useEffect, useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { API_URL } from "../constant/index.js";

import {
  updateStart,
  updateSuccess,
  updateFailure,
  deletionStart,
  deletionSuccess,
  deletionFailure,
} from "../store/slices/userSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [eyeClick, setEyeClick] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getUserdata = useSelector((state) => state.user.user);
  const isLoggingIn = useSelector((state) => state.user.loggingIn);

  const error = useSelector((state) => state.user.error);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    old_password: "",
    new_password: "",
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

  //   console.log(getUserdata);
  useEffect(() => {
    if (getUserdata) {
      setFormData({
        name: getUserdata.full_name,
        email: getUserdata.email,
        new_password: "",
        old_password: "",
      });
    }
  }, [getUserdata]);

  // console.log(formData);

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateStart());
      const response = await fetch(`${API_URL}/api/user/profile`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ ...formData, _id: getUserdata._id }),
      });
      const data = await response.json();
      // console.log(data);
      if (response.ok && data.success) {
        dispatch(updateSuccess(data.user));
        toast.success(data.message);
        setFormData({
          name: "",
          email: "",
          new_password: "",
          old_password: "",
        });
      } else {
        toast.warn(data.message);
        dispatch(updateFailure(data.message));
      }
      // console.log(data);
    } catch (error) {
      console.error("Error updating profile:", error.message);
      dispatch(updateFailure(error.message));
    }
  };

  const handleDeleteAccount = async (e) => {
    e.preventDefault();
    try {
      dispatch(deletionStart());
      const response = await fetch(`${API_URL}/api/user/profile`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ _id: getUserdata._id }),
      });
      const data = await response.json();

      if (response.ok && data.success) {
        dispatch(deletionSuccess());
        toast.success(data.message);
        navigate("/sign-up");

      } else {
        toast.warn(data.message);
      }
    } catch (error) {
      console.error("Error deleting account:", error.message);
      dispatch(deletionFailure(error.message));
    }
  };
  return (
    <div className="container mx-auto mt-6">
      <div className="max-w-lg mx-auto p-3">
        <h1 className="font-semibold text-2xl md:text-3xl text-center">
          Update Profile
        </h1>

        <div className="flex items-center justify-center mt-3">
          <img className="object-cover w-24 h-24" src={getUserdata.photoUrl} alt={getUserdata.full_name} />
        </div>
        <form onSubmit={handleUpdateSubmit}>
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
            <label htmlFor="old_password" className="block font-medium">
              Old Password
            </label>

            <input
              type="password"
              id="old_password"
              name="old_password"
              placeholder="Enter your old password"
              className=" text-slate-800 rounded-md flex-1 block p-3 border-none outline-none sm:text-sm"
              value={formData.old_password}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col justify-center mt-3">
            <label htmlFor="new_password" className="block font-medium">
              New Password
            </label>
            <div className="flex px-1 w-full bg-white items-center border border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-slate-500 focus:border-transparent">
              <input
                type={eyeClick ? "text" : "password"}
                id="new_password"
                name="new_password"
                placeholder="Enter your new password"
                className=" text-slate-800 flex-1 block p-3 border-none outline-none sm:text-sm"
                value={formData.new_password}
                onChange={handleChange}
              />
              <button
                className="text-black font-semibold text-2xl px-3"
                disabled={formData.new_password.trim() === ""}
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
            <button
              type="submit"
              className="button-primary"
              disabled={formData === null || isLoggingIn}
            >
              {isLoggingIn ? "Updating..." : "Update Profile"}
            </button>
          </div>
        </form>
        <div className="mt-2">
          <button
            type="submit"
            className="button-danger hover:bg-rose-400"
            onClick={handleDeleteAccount}
            disabled={isLoggingIn}
          >
            {isLoggingIn ? "Deleting..." : "Delete Account"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
