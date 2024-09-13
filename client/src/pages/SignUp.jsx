import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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
      console.log(data);
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
      <h1 className="text-[#f7d185] text-3xl font-semibold text-center my-7"> Sign Up</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Username"
          id="username"
          className="bg-[#E0E0E0] outline-none text-[#121212] p-3 rounded-lg"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Email"
          id="email"
          className="bg-[#E0E0E0] outline-none text-[#121212] p-3 rounded-lg"
          onChange={handleChange}
        />

        <input
          type="password"
          placeholder="Password"
          id="password"
          className="bg-[#E0E0E0] outline-none text-[#121212] p-3 rounded-lg"
          onChange={handleChange}
        />

        <button
          disabled={loading}
          className="text-[#f7d185] font-bold bg-[#f7d185] bg-opacity-30 px-6 py-3 rounded-md hover:bg-opacity-50"
        >
          {loading ? "Loading..." : "Sign up"}
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link to="/sign-in">
          <span className="text-[#f7d185]">Sign In</span>
        </Link>
      </div>
      <p className="text-red-600">{error && "Something went wrong"}</p>
    </div>
  );
};
