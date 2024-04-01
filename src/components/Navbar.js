import React, { useState,useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';


const Navbar = () => {
    const url= useLocation().pathname
    const [menuOpen, setMenuOpen] = useState(false);
    const [screen, setScreen] = useState(false);

    const menuHandle = () => {
        if (menuOpen) {
            setMenuOpen(false);
        } else {
            setMenuOpen(true);
        }
    };
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setScreen(false);
            }
            else {
                setScreen(true);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <header className="body-font bg-indigo-100 pt-4">
                <div className={`container mx-auto flex p-2 w-[90%] flex-row items-center justify-between bg-indigo-400 ${menuOpen?"rounded-t-[25px]":"rounded-[50px]"}`}>
                    <Link to='/' className="flex title-font font-medium items-center text-white">
                        <img src="/home/Logo.png" alt="logo" className="w-10 h-10 text-white p-2 rounded-full" />
                        <span className="ml-1 text-xl">FutureSphere </span>
                    </Link>
                    {screen ? (
                        <img
                            className="mr-2 cursor-pointer"
                            src="/home/icon.png"
                            alt="Menu"
                            onClick={() => menuHandle()}
                        />
                    ) : (
                        <>
                            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                                <Link to='about' className={`mr-5 hover:text-indigo-300 ${url=='/about'?"text-indigo-300":"text-white"}`}>About</Link>
                                <Link to='careers' className={`mr-5 hover:text-indigo-300 ${url=='/careers'?"text-indigo-300":"text-white"}`}> Careers</Link>
                                <Link to='blogs' className={`mr-5 hover:text-indigo-300 ${url=='/blogs'?"text-indigo-300":"text-white"}`}>Blogs</Link>
                                <Link to='pricing' className={`mr-5 hover:text-indigo-300 ${url=='/pricing'?"text-indigo-300":"text-white"}`}>Pricing</Link>
                            </nav>
                           <Link to={'contact'}>
                           <button className="inline-flex items-center text-white bg-indigo-300 border-0 py-1 px-3 focus:outline-non rounded-[50px] text-base mt-4 md:mt-0">
                                Contact Us
                            </button>
                           </Link>
                        </>
                    )}
                </div>
                {menuOpen && (
                    <div className={`container mx-auto ${screen?"flex rounded-b-[25px]":setMenuOpen(false)}   p-2 w-[90%] flex-col items-start gap-2 bg-indigo-400`}>
                                <Link to='about' className={`mr-5 hover:text-indigo-300 ${url=='/about'?"text-indigo-300":"text-white"}`}>About</Link>
                                <Link to='careers' className={`mr-5 hover:text-indigo-300 ${url=='/careers'?"text-indigo-300":"text-white"}`}> Careers</Link>
                                <Link to='blogs' className={`mr-5 hover:text-indigo-300 ${url=='/blogs'?"text-indigo-300":"text-white"}`}>Blogs</Link>
                                <Link to='pricing' className={`mr-5 hover:text-indigo-300 ${url=='/pricing'?"text-indigo-300":"text-white"}`}>Pricing</Link>
                                <Link to={'contact'}>        <button className="mb-2 inline-flex items-center text-white bg-indigo-300 border-0 py-1 px-3 focus:outline-non rounded-[50px] text-base">
                            Contact Us
                        </button>    </Link>
                    </div>
                )}
            </header>
        </>
    );
};

export default Navbar;
