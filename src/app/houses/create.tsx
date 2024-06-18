import React from 'react';
import HouseForm from '../components/HouseForm';

const CreateHousePage = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Create House</h1>
      <HouseForm />
    </div>
  );
};

export default CreateHousePage;
