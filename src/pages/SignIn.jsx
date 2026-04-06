import React, { useState } from 'react'
import shop from '/shop.svg'
import SmallCard from '../components/SmallCard'
import { useForm } from 'react-hook-form';
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { MdOutlineEmail, MdOutlineLock } from "react-icons/md";
import { toast } from 'react-toastify';
import { AuthUser } from '../context/UserContext';
import { Link } from 'react-router';
import { FiAlertCircle } from 'react-icons/fi';

const SignIn = () => {
    const [showPass, setShowPass] = useState(false);
    const [invalid, setInvalid] = useState(false);
    const { register, handleSubmit, reset } = useForm();
    const { registerUser, setLogginedUser } = AuthUser();
    const onSubmit = (data) => {
        let user = registerUser.find(elem => elem.email === data.email && elem.password === data.password);
        if (!user) {
            setInvalid(true);
            return;
        }
        setInvalid(false);
        setLogginedUser(user);
        localStorage.setItem('logeedInUser', JSON.stringify(user));
        toast.success('user Logged in');
        reset();
    }
    const onError = (errors) => {
        if (errors.email || errors.password) {
            toast.error("Fill all fields");
        }
    }

    return (
        <div className="min-h-screen w-full flex bg-zinc-950">
            {/* LEFT PANEL */}
            <div className="hidden border-r lg:flex w-1/2 flex-col justify-between p-12 xl:p-16 relative overflow-hidden">

                <div
                    className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none"
                    style={{
                        background: 'radial-gradient(circle at 90% 30%, rgba(202,255,0,0.08) 0%, transparent 65%)',
                    }}
                />

                {/* Logo */}
                <div className="flex items-center gap-3 z-10">
                    <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: '#CAFF00' }}
                    >
                        <img src={shop} alt="logo" />
                    </div>
                    <span className="text-xl font-bold text-white">
                        Dk<span style={{ color: '#CAFF00' }}>Mart</span>
                    </span>
                </div>

                {/* Info */}
                <div className="z-10 space-y-6">
                    <p className="text-xs font-bold tracking-[0.25em] uppercase" style={{ color: '#CAFF00' }}>
                        Welcome Back
                    </p>
                    <h1 className="text-5xl xl:text-6xl font-extrabold leading-tight text-white">
                        Shop the future.
                        <br />
                        <span style={{ color: '#CAFF00' }}>Today.</span>
                    </h1>
                    <p className="text-base-content/50 text-base leading-relaxed max-w-xs">
                        Thousands of products, lightning-fast delivery, and prices that make your wallet happy.
                    </p>

                    {/* Cards */}
                    <div className="flex justify-between gap-4 pt-4">
                        <SmallCard title="Products" num="20K" suffix="+" />
                        <SmallCard title="Users" num="50K" suffix="+" />
                        <SmallCard title="Rating" num="4.9" suffix="★" />
                    </div>
                </div>

                <div />
            </div>
            <div className="hidden lg:block w-px bg-white/5 my-0" />

            {/* RIGHT PANEL */}
            <div className="flex-1 flex flex-col items-center justify-center p-6">

                {/* Mobile logo */}
                <div className="flex lg:hidden items-center gap-3 mb-10">
                    <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: '#CAFF00' }}
                    >
                        <img src={shop} alt="logo" />
                    </div>
                    <span className="text-xl font-bold text-white">
                        Dk<span style={{ color: '#CAFF00' }}>Mart</span>
                    </span>
                </div>

                {/* Card */}
                <div className="w-full bg-zinc-900/40 border border-zinc-800 max-w-md rounded-3xl p-8 xl:p-10">
                    {/* Heading */}
                    <div className="mb-7">
                        <h2 className="text-3xl font-extrabold text-white mb-1">Sign in</h2>
                        <p className="text-base-content/40 text-sm">Enter your credentials to continue</p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit(onSubmit, onError)} className="space-y-4">

                        {/* Invalid */}
                        {invalid && (
                            <div className="flex items-center bg-red-500/10 border border-red-500/50 text-red-400 gap-3 rounded-2xl px-4 py-3 mb-2 animate-in fade-in slide-in-from-top-2">
                                <FiAlertCircle className="text-xl shrink-0" />
                                <h1 className="text-sm font-semibold">Invalid email or password</h1>
                            </div>
                        )}

                        {/* Email */}
                        <div
                            className="flex items-center gap-3 rounded-2xl px-4 py-3"
                            style={{ backgroundColor: '#252525', border: '1px solid rgba(255,255,255,0.07)' }}
                        >
                            {/* Icon */}
                            <MdOutlineEmail />
                            <input
                                {...register('email', { required: true })}
                                type="email"
                                placeholder="Email address"
                                className="flex-1 bg-transparent text-sm text-white placeholder-white/25 outline-none"
                            />
                        </div>

                        {/* Password */}
                        <div
                            className="flex items-center gap-3 rounded-2xl px-4 py-3"
                            style={{ backgroundColor: '#252525', border: '1px solid rgba(255,255,255,0.07)' }}
                        >
                            <MdOutlineLock />
                            <input
                                {...register('password', { required: true })}
                                type={showPass ? 'text' : 'password'}
                                placeholder="Password"
                                className="flex-1 bg-transparent text-sm text-white placeholder-white/25 outline-none"
                            />
                            {/* eye toggle */}
                            <button
                                type="button"
                                onClick={() => setShowPass(p => !p)}
                                className="text-white/25 hover:text-white/60 transition-colors"
                            >
                                {showPass ? (
                                    <IoEyeOutline />
                                ) : (
                                    <IoEyeOffOutline />
                                )}
                            </button>
                        </div>

                        {/* Sign in button */}
                        <button
                            className="w-full py-3.5 rounded-2xl font-extrabold text-base flex items-center justify-center gap-2 transition-all duration-200 hover:brightness-110 active:scale-[0.98]"
                            style={{ backgroundColor: '#CAFF00', color: '#0f0f0f' }}
                        >
                            Sign in
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </button>
                    </form>

                    {/* Footer */}
                    <p className="text-center text-sm text-white/30 mt-6">
                        Don't have an account?{' '}
                        <Link to="/register" className="font-bold" style={{ color: '#CAFF00' }}>
                            Create one
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SignIn
