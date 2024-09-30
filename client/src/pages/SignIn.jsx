import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInStart, signInSuccess, signInFailure } from "../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import OAuth from "../componets/OAuth";

export const SignIn = () => {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch("/backend/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.success === false) {
        dispatch(signInFailure(data));
        return;
      }
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      dispatch(signInFailure(error));
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-[#f7d185] text-3xl font-semibold text-center my-7">Sign In</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Email"
          id="email"
          className="bg-[#E0E0E0] outline-none text-[#121212] p-3 rounded-lg w-full"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="bg-[#E0E0E0] outline-none text-[#121212] p-3 rounded-lg w-full"
          onChange={handleChange}
        />
        <div className="flex flex-col md:flex-row gap-4 w-full">
          <button
            disabled={loading}
            className="text-[#f7d185] font-bold bg-[#f7d185] bg-opacity-30 px-6 py-3 rounded-md hover:bg-opacity-50 flex-1 whitespace-nowrap"
          >
            {loading ? "Loading..." : "Sign In"}
          </button>
          <OAuth className="flex-1" />
        </div>
      </form>
      <div className="flex gap-2 mt-5 flex-col md:flex-row justify-center items-center">
        <p className="mr-2">Don't have an account?</p>
        <Link to="/sign-up">
          <span className="text-[#f7d185]">Sign Up</span>
        </Link>
      </div>
      <p className="text-red-600 mt-3">
        {error ? error.message || "Something went wrong" : ""}
      </p>
    </div>
  );
};
