"use client";  // Use this directive for Next.js app directory
import { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Joshua Doe",
    position: "CEO of Company",
    text: "Our real estate management has never been easier! The system is intuitive and efficient.",
    image: "https://i.pinimg.com/564x/49/7d/36/497d366b9d8f08b07bd5bb582ba4c35d.jpg",
  },
  {
    name: "John Smith",
    position: "CTO of Another Company",
    text: "A must-have for any real estate business. It streamlined our operations significantly.",
    image: "https://i.pinimg.com/564x/a5/2e/30/a52e305984a8eb0f2da9823897da5d33.jpg",
  },
  {
    name: "Alice Johnson",
    position: "Project Manager",
    text: "The best tool for managing properties. It saved us a lot of time and effort.",
    image: "https://i.pinimg.com/564x/c6/37/cb/c637cb67e2a7211c708cfe19b30b387a.jpg",
  },
  {
    name: "Mary Adkins",
    position: "Project Manager",
    text: "Highly recommend this system to anyone in real estate. It's truly a game changer.",
    image: "https://i.pinimg.com/564x/92/ed/01/92ed019ad688e127ca4892f47a4a1136.jpg",
  },
  {
    name: "James Parker",
    position: "COO of Air BNB",
    text: "This system is essential for property management. It has improved our efficiency.",
    image: "https://i.pinimg.com/564x/18/6b/59/186b595576c0287f101d369fba69e801.jpg",
  },
];

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="mb-8 text-4xl font-bold">Testimonials</h1>
      <div className="relative w-full max-w-2xl p-12 mx-auto bg-white border rounded-lg shadow-lg">
        <div className="text-center">
          <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
            <Image
              src={testimonials[current].image}
              alt={testimonials[current].name}
              width={128}
              height={128}
              objectFit="cover"
            />
          </div>
          <p className="text-xl italic">"{testimonials[current].text}"</p>
          <h3 className="mt-4 text-2xl font-semibold">{testimonials[current].name}</h3>
          <p className="mt-1 text-sm text-gray-500">{testimonials[current].position}</p>
        </div>
        <div className="flex justify-between mt-8">
          <button
            onClick={prevTestimonial}
            className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
          >
            Previous
          </button>
          <button
            onClick={nextTestimonial}
            className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
