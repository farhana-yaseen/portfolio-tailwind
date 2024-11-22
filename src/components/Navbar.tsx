"use client"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react";


export default function Navbar() {


    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={" bg-white font-serif font-bold text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl lg:font-extrabold"}>
            <div className={"flex items-center justify-between font-bold p-5"}>

                {/* Logo */}
                <div>
                    <Image src={"/logo.png"} alt="logo" width={150} height={150} className="w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-48 xl:h-48 2xl:w-52 2xl:h-52 "></Image>

                </div>

                {/* Mobile Hamburger Menu Icon */}
                <div className="lg:hidden flex flex-col items-center space-y-4 py-3" onClick={toggleMenu}>
                    <div className={"w-8 h-1 bg-black"} />
                    <div className={"w-8 h-1 bg-black"} />
                    <div className={"w-8 h-1 bg-black"} />
                </div>


                {/* Desktop Menu - Right Aligned */}
                <div className="hidden lg:flex justify-between space-x-10">
                    <ul className="flex space-x-10">
                        <li>
                            <Link href="/" className="hover:bg-white">Home</Link>
                        </li>
                        <li>
                            <Link href="/aboutus" className="hover:bg-white">About Us</Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:bg-white">Contact Us</Link>
                        </li>
                    </ul>
                </div>

            </div>

            {/* Overlay when menu is open */}
            {isOpen && (
                <div className="fixed inset-0 bg-white opacity-90 z-10" onClick={toggleMenu}></div>
            )}

            {/* Mobile menu */}
            <div onClick={toggleMenu} className={`lg:flex ${isOpen ? "fixed w-full h-full z-20 " : "hidden"} mt-4 lg:mt-0`}>

                <ul className="lg:hidden place-items-center space-y-10">
                    <li>
                        <Link href={"/"} className="hover:bg-white">Home</Link>

                    </li>
                    <li>
                        <Link href={"/aboutus"} className="hover:bg-white">About Us</Link>
                    </li>
                    <li>
                        <Link href={"/contact"} className="hover:bg-white">Contact Us</Link>
                    </li>

                </ul>
            </div>
        </nav>
    )
}

