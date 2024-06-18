import React from 'react';
import Link from 'next/link';
import axios from 'axios';

interface House {
  _id: string;
  title: string;
  address: string;
  price: number;
  description: string;
}

interface HouseListProps {
  houses: House[];
  fetchHouses: () => void;
}

const HouseList: React.FC<HouseListProps> = ({ houses, fetchHouses }) => {

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`/api/houses/${id}`);
      fetchHouses();
    } catch (error) {
      console.error('Error deleting house:', error);
    }
  };

  return (
    <div className="container mx-auto">
      <Link href="/houses/create">
        <button className="bg-green-500 text-white py-2 px-4 rounded mb-4">
          Add New House
        </button>
      </Link>
      <ul>
        {houses.map((house) => (
          <li key={house._id} className="border p-4 mb-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold">{house.title}</h2>
            <p>{house.address}</p>
            <p>${house.price}</p>
            <p>{house.description}</p>
            <Link href={`/houses/edit/${house._id}`}>
              <button className="bg-blue-500 text-white py-1 px-3 rounded mr-2">
                Edit
              </button>
            </Link>
            <button
              onClick={() => handleDelete(house._id)}
              className="bg-red-500 text-white py-1 px-3 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HouseList;
