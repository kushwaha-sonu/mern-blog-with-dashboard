import { FcGoogle } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { API_URL } from "../constant";
import { loginFailure, loginSuccess } from "../store/slices/userSlice";
import { useNavigate } from "react-router-dom";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";

const OAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = getAuth(app);
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });
    try {
      const responseFromGoogle = await signInWithPopup(auth, provider);
      const { user } = responseFromGoogle;
      // console.log(user);
      const response = await fetch(`${API_URL}/api/user/google-login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          email: user.email,
          name: user.displayName,
          photoUrl: user.photoURL,
        }),
      });

      const data = await response.json();
      if (response.ok && data.success) {
        toast.success(data.message);
        dispatch(loginSuccess(data.user));
        navigate("/");
      } else {
        toast.warn(data.message);
        dispatch(loginFailure(data.message));
      }
    } catch (error) {
      console.log(error.message);
      toast.error("Login failed due to some error");
      dispatch(loginFailure(error.message));
    }
  };
  return (
    <button
      type="button"
      onClick={handleGoogleSignIn}
      className="flex items-center justify-center gap-1 bg-slate-400 w-full p-2 hover:bg-slate-300 rounded-md"
    >
      <FcGoogle className="size-8" />
      <span className="text-slate-800 text-xl font-semibold">
        Continue with Google
      </span>
    </button>
  );
};

export default OAuth;
