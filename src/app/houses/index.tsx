import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HouseList from '../components/HouseList';

const HousesPage = () => {
  const [houses, setHouses] = useState([]);

  const fetchHouses = async () => {
    try {
      const response = await axios.get('/api/houses');
      setHouses(response.data);
    } catch (error) {
      console.error('Error fetching houses:', error);
    }
  };

  useEffect(() => {
    fetchHouses();
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Houses</h1>
      <HouseList houses={houses} fetchHouses={fetchHouses} />
    </div>
  );
};

export default HousesPage;
