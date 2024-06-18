import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import HouseForm from '../../components/HouseForm';

const EditHousePage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [houseData, setHouseData] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchHouse = async () => {
        try {
          const response = await axios.get(`/api/houses/${id}`);
          setHouseData(response.data);
        } catch (error) {
          console.error('Error fetching house data:', error);
        }
      };

      fetchHouse();
    }
  }, [id]);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Edit House</h1>
      {houseData ? <HouseForm initialData={houseData} houseId={id as string} /> : <p>Loading...</p>}
    </div>
  );
};

export default EditHousePage;
