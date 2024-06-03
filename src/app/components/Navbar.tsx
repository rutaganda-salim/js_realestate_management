import React from "react";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-10 bg-white flex justify-between items-center py-4 px-8 shadow">
            <div className="text-2xl font-bold">Home<span className="text-indigo-500">in</span></div>
            <ul className="flex space-x-6">
                <li className="hover:text-indigo-600"><a href="#home">Home</a></li>
                <li className="hover:text-indigo-600"><a href="#Services">Services</a></li>
                <li className="hover:text-indigo-600"><a href="#testimonials">Testimonials</a></li>
                <li className="hover:text-indigo-600"><a href="#about">About Us</a></li>
                <li className="hover:text-indigo-600"><a href="#contact">Contact</a></li>
            </ul>
            <button className="bg-indigo-400 text-white px-4 py-2 rounded hover:bg-indigo-500 font-semibold">Get Started</button>
        </nav>
    );
}
