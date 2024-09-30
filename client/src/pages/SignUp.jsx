import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../componets/OAuth";

export const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(false);
      const res = await fetch("/backend/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setLoading(false);

      if (data.success === false) {
        setError(true);
        return;
      }
      navigate("/sign-in");
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-[#f7d185] text-3xl font-semibold text-center my-7">Sign Up</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Username"
          id="username"
          className="bg-[#E0E0E0] outline-none text-[#121212] p-3 rounded-lg w-full"
          onChange={handleChange}
        />
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
            {loading ? "Loading..." : "Sign Up"}
          </button>
          <OAuth className="flex-1" />
        </div>
      </form>

      <div className="flex gap-2 mt-5 flex-col md:flex-row justify-center items-center">
        <p className="mr-2">Have an account?</p>
        <Link to="/sign-in">
          <span className="text-[#f7d185]">Sign In</span>
        </Link>
      </div>
      <p className="text-red-600">{error && "Something went wrong"}</p>
    </div>
  );
};
