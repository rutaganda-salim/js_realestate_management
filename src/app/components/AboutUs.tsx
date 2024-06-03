
"use client";  // Use this directive for Next.js app directory
import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-6">
    <h1 className="text-4xl font-bold mb-4 text-center">About Us</h1>

      <div className="max-w-4xl bg-white p-8 rounded-lg shadow-lg">   
        <p className="text-xl text-gray-700 text-center mb-8">
          Welcome to our Real Estate Management System. Our mission is to make property management efficient and effortless.
        </p>
        <div className="flex justify-center mb-8">
          <Image
            src="https://i.pinimg.com/564x/24/31/17/243117284a1f1c515f8d92b77b673483.jpg"
            alt="Real Estate Management"
            width={600}
            height={100}
            className="rounded-lg"
          />
        </div>
        <div className="space-y-4 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
            <p>
              We aim to revolutionize the real estate industry by providing top-notch tools and services that cater to the needs of property managers, landlords, and tenants.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
            <p>
              Our mission is to streamline property management processes through innovative solutions, ensuring seamless operations and maximizing profitability for our clients.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-2">Our Values</h2>
            <ul className="list-disc list-inside">
              <li>Integrity: We uphold the highest standards of integrity in all our actions.</li>
              <li>Customer Commitment: We develop relationships that make a positive difference in our customers' lives.</li>
              <li>Innovation: We constantly seek innovative solutions to meet the evolving needs of our clients.</li>
              <li>Quality: We provide outstanding products and unsurpassed service that deliver premium value to our customers.</li>
              <li>Teamwork: We work together, across boundaries, to meet the needs of our customers and to help the company win.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
