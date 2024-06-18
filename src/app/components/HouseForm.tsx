"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";

interface HouseFormData {
  title: string;
  address: string;
  price: number;
  description: string;
}

export default function HouseForm(): JSX.Element {
  const [formData, setFormData] = useState<HouseFormData>({
    title: "",
    address: "",
    price: 0,
    description: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.title) {
      newErrors.title = "Title is required";
    }
    if (!formData.address) {
      newErrors.address = "Address is required";
    }
    if (!formData.price) {
      newErrors.price = "Price is required";
    }
    if (!formData.description) {
      newErrors.description = "Description is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post("/api/houses", formData);
        if (response.status === 201) {
          console.log("House added successfully:", response.data);
          router.push("/houses"); // Redirect to the houses list page
        } else {
          console.error("Failed to add house:", response.data);
          setErrors({ apiError: response.data.message || "Failed to add house" });
        }
      } catch (error) {
        console.error("Error:", error);
        setErrors({ apiError: error.response?.data.message || "Something went wrong" });
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-center">Add New House</h1>
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="House Title"
              required
              className={`w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500 ${
                errors.title ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block text-gray-700 font-bold mb-2">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="House Address"
              required
              className={`w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500 ${
                errors.address ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="block text-gray-700 font-bold mb-2">
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="House Price"
              required
              className={`w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500 ${
                errors.price ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="House Description"
              required
              className={`w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500 ${
                errors.description ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
          </div>
          {errors.apiError && <p className="text-red-500 text-sm mb-4">{errors.apiError}</p>}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Add House
            </button>
          </div>
        </form>
        <Link href="/houses" className="mt-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Back to House List
          </button>
        </Link>
      </div>
    </div>
  );
}
