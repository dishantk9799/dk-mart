import React, { useState } from 'react';
import { FiShoppingBag, FiLogOut, FiMenu, FiX, FiHome, FiGrid, FiInfo } from "react-icons/fi";
import shop from '/shop.svg';
import { AuthUser } from '../context/UserContext';
import { useCart } from '../context/CartContext';
import { NavLink, useLocation, useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const Navbar = ({ setIsCartOpen }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { logginedUser, LogoutUser } = AuthUser();
    const { cartItems } = useCart();
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogout = () => {
        setIsOpen(false);
        LogoutUser();
        toast.info("Logged out successfully");
        navigate('/login');
    };

    return (
        <nav className="w-full bg-zinc-900/40 sticky top-0 z-50 backdrop-blur-md border-b border-zinc-800/50 py-4 px-6 md:px-12 flex items-center justify-between">

            {/* Logo */}
            <div className="flex items-center gap-3 shrink-0">
                <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(202,255,0,0.1)] bg-[#CAFF00]"
                >
                    <img src={shop} alt="logo" className="w-5 h-5" />
                </div>
                <span className="text-xl font-bold text-white">
                    Dk<span className="text-[#CAFF00]">Mart</span>
                </span>
            </div>

            {/* Desktop Links */}
            <ul className="hidden md:flex items-center gap-10 font-bold text-sm tracking-wide">
                <li>
                    <NavLink to="/home" className={`${location.pathname === "/home" ? "text-[#CAFF00]" : "text-white/40 hover:text-white"}`}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/home/shop" className={`${location.pathname === "/home/shop" ? "text-[#CAFF00]" : "text-white/40 hover:text-white"}`}>Shop</NavLink>
                </li>
                <li>
                    <NavLink to="/home/about" className={`${location.pathname === "/home/about" ? "text-[#CAFF00]" : "text-white/40 hover:text-white"}`}>About</NavLink>
                </li>
            </ul>

            {/* Actions */}
            <div className="flex items-center gap-2 md:gap-4">
                {/* User Info */}
                <div className="hidden lg:flex items-center gap-2 bg-[#1a1a1a] border border-zinc-800 rounded-2xl px-2 py-1.5 hover:border-zinc-700 transition-all">
                    <div className="bg-[#CAFF00] w-7 h-7 rounded-lg flex items-center justify-center">
                        <p className="text-black text-xs font-black uppercase">{logginedUser?.name?.slice(0, 1)}</p>
                    </div>
                    <span className="text-white/40 text-sm font-medium pr-4">{logginedUser?.name}</span>
                </div>

                {/* Cart Button */}
                <button
                    onClick={() => setIsCartOpen(true)}
                    className="relative w-10 h-10 md:w-11 md:h-11 flex items-center justify-center bg-[#1a1a1a] border border-zinc-800 rounded-xl text-white/40 hover:text-white transition-all"
                >
                    <FiShoppingBag size={18} />
                    {cartItems.length > 0 && (
                        <span className="absolute -top-1.5 -right-1.5 bg-[#CAFF00] text-black text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center">
                            {cartItems.length}
                        </span>
                    )}
                </button>

                {/* Logout Button */}
                <button onClick={handleLogout} className="hidden sm:flex w-10 h-10 md:w-11 md:h-11 items-center justify-center bg-[#1a1a1a] border border-zinc-800 rounded-xl text-white/40 hover:bg-red-400/20 hover:text-red-400 transition-all">
                    <FiLogOut size={18} />
                </button>

                {/* Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden w-10 h-10 flex items-center justify-center bg-[#1a1a1a] border border-zinc-800 rounded-xl text-white/60 hover:text-white transition-all"
                >
                    {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
                </button>
            </div>

            {/* MOBILE DROPDOWN MENU */}
            <div className={`absolute top-full left-0 w-full bg-[#0c0c0e] border-b border-zinc-800/50 shadow-2xl transition-all duration-300 md:hidden overflow-hidden ${isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-6 space-y-6">

                    {/* User Profile Info on Mobile */}
                    <div className="flex items-center gap-4 pb-6 border-b border-zinc-800/50">
                        <div className="w-12 h-12 rounded-2xl bg-[#CAFF00] flex items-center justify-center text-black font-black text-xl">
                            {logginedUser?.name?.slice(0, 1)}
                        </div>
                        <div>
                            <p className="text-white font-bold">{logginedUser?.name}</p>
                            <p className="text-zinc-500 text-xs">Customer</p>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <ul className="space-y-4">
                        <li>
                            <NavLink
                                to="/home"
                                onClick={() => setIsOpen(false)}
                                className={`flex items-center gap-4 p-4 rounded-2xl font-bold transition-all 
                                    ${location.pathname === "/home"
                                        ? "bg-[#CAFF00]/10 text-[#CAFF00]"
                                        : "text-zinc-500 hover:bg-zinc-800/50 hover:text-white"
                                    }`}
                            >
                                <FiHome size={20} /> Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/home/shop"
                                onClick={() => setIsOpen(false)}
                                className={`flex items-center gap-4 p-4 rounded-2xl font-bold transition-all 
                                    ${location.pathname === "/home/shop"
                                        ? "bg-[#CAFF00]/10 text-[#CAFF00]"
                                        : "text-zinc-500 hover:bg-zinc-800/50 hover:text-white"
                                    }`}
                            >
                                <FiGrid size={20} /> Shop
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/home/about"
                                onClick={() => setIsOpen(false)}
                                className={`flex items-center gap-4 p-4 rounded-2xl font-bold transition-all 
                                    ${location.pathname === "/home/about"
                                        ? "bg-[#CAFF00]/10 text-[#CAFF00]"
                                        : "text-zinc-500 hover:bg-zinc-800/50 hover:text-white"
                                    }`}
                            >
                                <FiInfo size={20} /> About
                            </NavLink>
                        </li>
                    </ul>

                    {/* Mobile Logout */}
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-4 p-4 rounded-2xl font-bold text-red-400 hover:bg-red-400/10 transition-all"
                    >
                        <FiLogOut size={20} /> Logout
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;