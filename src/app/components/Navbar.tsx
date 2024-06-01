import React from "react";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center py-4 px-8 bg-white shadow">
            <div className="text-2xl font-bold">Home<span className="text-indigo-500">in</span></div>
            <ul className="flex space-x-6">
                <li className="hover:text-indigo-600"><a href="#home">Home</a></li>
                <li className="hover:text-indigo-600"><a href="#services">Services</a></li>
                <li className="hover:text-indigo-600"><a href="#testimonials">Testimonials</a></li>
                <li className="hover:text-indigo-600"><a href="#about">About Us</a></li>
                <li className="hover:text-indigo-600"><a href="#contact">Contact</a></li>
            </ul>
            <button className="bg-indigo-400 text-white px-4 py-2 rounded hover:bg-indigo-500 font-semibold">Sign up</button>
        </nav>
    );
}
