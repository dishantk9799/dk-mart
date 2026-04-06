import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router'
import Cart from '../pages/Cart'

const DkMart = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    return (
        <div className='w-full min-h-screen bg-zinc-950'>
            <Navbar setIsCartOpen={setIsCartOpen} />
            <Outlet />
            <Footer />
            <Cart isOpen={isCartOpen} setIsOpen={setIsCartOpen} />
        </div>
    )
}

export default DkMart
