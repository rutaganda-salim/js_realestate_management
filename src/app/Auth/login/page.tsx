"use client"
import React, { useState, ChangeEvent, FormEvent } from "react";
import Link from "next/link";

interface FormData {
  username: string;
  password: string;
}

export default function LoginForm(): JSX.Element {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // Add your login logic here
    console.log(formData);
    // Reset form fields after submission
    setFormData({ username: "", password: "" });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
       <div className="text-2xl font-bold mb-10"><span className="text-indigo-500">Sign in</span> to access to our admin dashboard</div>
      <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 font-bold mb-2">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Your Username"
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Your Password"
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
          </div>
        </form>
        <p className="mt-4 text-gray-600 text-center">Don't have an account? <a href="/Auth/signup" className="text-blue-500 hover:text-blue-600">Register</a></p>
       

        
      </div>
      
      <Link href="/" className="mt-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Go Back to Home page
            </button>
      </Link>    
      <footer className="mt-8 text-gray-600 text-center">
        <p>&copy; 2024 HomeIn. All rights reserved.</p>
      </footer>
    </div>
  );
}
