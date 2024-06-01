import React from 'react';
import { IconType } from 'react-icons'; // Import the type for icons

interface ServiceCardProps {
    icon: IconType;
    title: string;
    description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center mb-1 mr-2">
            <div className="text-yellow-500 text-6xl mb-4"><Icon /></div>
            <h3 className="text-2xl font-bold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    );
}

export default ServiceCard;

//import React from 'react';
