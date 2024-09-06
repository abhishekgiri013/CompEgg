import React, { useState } from "react";
import { Link } from "react-router-dom";

export const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [error,setError] = useState(false);
 const [loading ,setLoading] = useState(false);
  const handleChange = (e) =>{
    setFormData({...formData,[e.target.id]:e.target.value});
  }
  const handleSubmit= async(e) =>{
    e.preventDefault();
    try {
       setLoading(true);
       setError(false);
      const res = await fetch('/backend/auth/signup',{
        method: 'POST',
        headers:{
          "Content-Type" : 'application/json',
        },
        body : JSON.stringify(formData),
      });
      const data = await res.json();
        console.log(data);
      setLoading(false);

      if(data.success===false){

        setError(true);
      return;
      }
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };
   return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7"> Sign Up</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Username"
          id="username"
          className="bg-slate-100 p-3 rounded-lg"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Email"
          id="email"
          className="bg-slate-100 p-3 rounded-lg"
          
          onChange={handleChange}
          />
          
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="bg-slate-100 p-3 rounded-lg"
          
          onChange={handleChange}
          />
          
        <button
          disabled={loading}
          className="bg-[#000000] text-white rounded-lg p-3 uppercase hover:opacity-90
        disabled:opacity-40"
        >
           {loading? 'Loading...' : 'Sign up'}
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link to="/sign-in">
          <span className="text-blue-400">Sign In</span>
        </Link>
      </div>
      <p className="text-red-700">{error && 'Something went wrong'}</p>
    </div>
  );
};
