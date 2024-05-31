import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center py-4 px-8 bg-white shadow">
            <div className="text-2xl font-bold">Home<span className="text-indigo-500">in</span></div>
            <ul className="flex space-x-6">
                <li className="hover:text-indigo-600"><Link href='/'>Home</Link></li>
                <li className="hover:text-indigo-600"><Link href='/'>Property</Link></li>
                <li className="hover:text-indigo-600"><Link href='/'>Services</Link></li>
                <li className="hover:text-indigo-600"><Link href='/'>About Us</Link></li>
                <li className="hover:text-indigo-600"><Link href='/'>Contact</Link></li>
            </ul>
            <button className="bg-indigo-400 text-white px-4 py-2 rounded hover:bg-indigo-500">Sign up</button>
        </nav >
    )
}