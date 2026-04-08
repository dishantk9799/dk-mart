import React, { useState } from 'react'
import shop from '/shop.svg'
import { FiUser, FiAlertCircle } from "react-icons/fi";
import { MdOutlineEmail, MdOutlineLock } from 'react-icons/md';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';
import { AuthUser } from '../context/UserContext';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router';

const SignUp = () => {
  const [showPass, setShowPass] = useState(false);
  const [invalid, setInvalid] = useState(false); 
  const { register, handleSubmit, watch, reset } = useForm();
  const { AddRegisterUser, registerUser } = AuthUser();
  const navigate = useNavigate();

  const passwordValue = watch("password", "");

  const getStrength = (password) => {
    if (!password) return 0;
    let score = 0;
    if (password.length > 0) score = 1;
    if (password.length >= 6) score = 2;
    if (password.length >= 10) score = 3;
    return score;
  };

  const strength = getStrength(passwordValue);

  const onSubmit = (data) => {
    const userExists = registerUser.some(user => user.email === data.email);

    if (userExists) {
      setInvalid(true);
      return;
    }

    if (data.password !== data.confirmPassword) {
      setInvalid(false);
      return toast.error("Passwords do not match");
    }

    setInvalid(false);
    AddRegisterUser(data);
    toast.success("Account Created Successfully");
    reset();
    navigate('/login');
  };

  const onError = () => {
    toast.error("Fill all fields");
  };

  return (
    <div className="min-h-screen w-full overflow-hidden bg-[#0a0a0a] flex flex-col items-center justify-center p-6">
      {/* Logo */}
      <div className="flex items-center gap-3 mb-10">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#CAFF00]">
          <img src={shop} alt="logo" className="w-6 h-6" />
        </div>
        <span className="text-xl font-bold text-white">
          Dk<span className="text-[#CAFF00]">Mart</span>
        </span>
      </div>

      {/* Card */}
      <div className="w-full bg-[#141414] border border-zinc-800/50 max-w-md rounded-3xl p-8 xl:p-10 shadow-2xl">
        <div className="mb-8">
          <h2 className="text-3xl font-extrabold text-white mb-2 tracking-tight">Create account</h2>
          <p className="text-zinc-500 text-sm">Join SkyMart and start shopping</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit, onError)} className="space-y-5">

          {/* Show Invalid message on top of Full Name */}
          {invalid && (
            <div className="flex items-center bg-red-500/10 border border-red-500/50 text-red-400 gap-3 rounded-2xl px-4 py-3 mb-2 animate-in fade-in slide-in-from-top-2">
              <FiAlertCircle className="text-xl shrink-0" />
              <h1 className="text-sm font-semibold">User already exists with this email</h1>
            </div>
          )}

          {/* Full name */}
          <div className="flex items-center gap-3 bg-[#1e1e1e] rounded-2xl px-4 py-3.5 border border-zinc-800 focus-within:border-[#CAFF00] transition-all">
            <FiUser className="text-zinc-500 text-lg" />
            <input
              {...register('name', { required: true })}
              type="text"
              placeholder="Full name"
              className="flex-1 bg-transparent text-sm text-white placeholder-zinc-600 outline-none"
            />
          </div>

          {/* Email */}
          <div className="flex items-center gap-3 bg-[#1e1e1e] rounded-2xl px-4 py-3.5 border border-zinc-800 focus-within:border-[#CAFF00] transition-all">
            <MdOutlineEmail className="text-zinc-500 text-lg" />
            <input
              {...register('email', { required: true })}
              type="email"
              placeholder="Email address"
              className="flex-1 bg-transparent text-sm text-white placeholder-zinc-600 outline-none"
              onChange={() => setInvalid(false)} // Clear error when user types again
            />
          </div>

          {/* Password Section */}
          <div className="space-y-3">
            <div className={`flex items-center gap-3 bg-[#1e1e1e] rounded-2xl px-4 py-3.5 border transition-all ${strength > 0 ? 'border-[#CAFF00]/30' : 'border-zinc-800'} focus-within:border-[#CAFF00]`}>
              <MdOutlineLock className="text-zinc-500 text-lg" />
              <input
                {...register('password', { required: true, minLength: 6 })}
                type={showPass ? 'text' : 'password'}
                placeholder="Password"
                className="flex-1 bg-transparent text-sm text-white placeholder-zinc-600 outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPass(p => !p)}
                className="text-zinc-600 hover:text-white transition-colors"
              >
                {showPass ? <IoEyeOutline size={20} /> : <IoEyeOffOutline size={20} />}
              </button>
            </div>

            {/* STRENGTH BAR LOGIC */}
            {passwordValue && (
              <div className="flex items-center gap-2 px-1">
                <div className="flex flex-1 gap-1.5">
                  <div className={`h-1 flex-1 rounded-full transition-colors duration-300 ${strength >= 1 ? (strength === 1 ? 'bg-red-500' : strength === 2 ? 'bg-amber-400' : 'bg-[#CAFF00]') : 'bg-zinc-800'}`}></div>
                  <div className={`h-1 flex-1 rounded-full transition-colors duration-300 ${strength >= 2 ? (strength === 2 ? 'bg-amber-400' : 'bg-[#CAFF00]') : 'bg-zinc-800'}`}></div>
                  <div className={`h-1 flex-1 rounded-full transition-colors duration-300 ${strength >= 3 ? 'bg-[#CAFF00]' : 'bg-zinc-800'}`}></div>
                </div>
                <span className={`text-[12px] tracking-wider w-10 text-right ${strength === 1 ? 'text-red-400' : strength === 2 ? 'text-amber-400' : 'text-[#CAFF00]'}`}>
                  {strength === 1 && 'Weak'}
                  {strength === 2 && 'Medium'}
                  {strength === 3 && 'Strong'}
                </span>
              </div>
            )}
          </div>

          {/* Confirm Password */}
          <div className="flex items-center gap-3 bg-[#1e1e1e] rounded-2xl px-4 py-3.5 border border-zinc-800 focus-within:border-[#CAFF00] transition-all">
            <MdOutlineLock className="text-zinc-500 text-lg" />
            <input
              {...register('confirmPassword', { required: true })}
              type="password"
              placeholder="Confirm Password"
              className="flex-1 bg-transparent text-sm text-white placeholder-zinc-600 outline-none"
            />
          </div>

          <button className="w-full py-3.5 bg-[#CAFF00] text-[#0f0f0f] rounded-2xl font-extrabold text-base flex items-center justify-center gap-2 transition-all duration-200 hover:brightness-110 active:scale-[0.98]">
            Create Account
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>

          <p className="text-center text-sm text-zinc-500 mt-6">
            Already have an account?{' '}
            <Link to="/login" className="font-bold text-[#CAFF00] hover:underline">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default SignUp