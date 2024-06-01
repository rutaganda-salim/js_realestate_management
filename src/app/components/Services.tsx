import React from 'react';
import ServiceCard from './serviceCard';
import { FaBuilding, FaHome, FaUsers, FaChartLine, FaClipboardList, FaHandshake, FaSearch, FaKey } from 'react-icons/fa';

export default function Services() {
    const services = [
        {
            icon: FaBuilding,
            title: 'Property Management',
            description: 'Comprehensive management services for residential and commercial properties.'
        },
        {
            icon: FaHome,
            title: 'Real Estate Sales',
            description: 'Helping you buy and sell properties with ease and expertise.'
        },
        {
            icon: FaUsers,
            title: 'Tenant Services',
            description: 'Providing seamless rental experiences for tenants and landlords.'
        },
        {
            icon: FaChartLine,
            title: 'Market Analysis',
            description: 'In-depth market analysis to help you make informed real estate decisions.'
        },
        {
            icon: FaClipboardList,
            title: 'Listing Services',
            description: 'Assisting in listing properties for sale or rent to attract potential buyers or tenants.'
        },
        {
            icon: FaHandshake,
            title: 'Negotiation Support',
            description: 'Offering expert negotiation support to ensure favorable deals for buyers, sellers, and tenants.'
        },
        {
            icon: FaSearch,
            title: 'Property Search',
            description: 'Helping you find the perfect property that fits your needs and preferences.'
        },
        {
            icon: FaKey,
            title: 'Property Ownership Transfer',
            description: 'Assisting in the smooth transfer of property ownership with legal and administrative support.'
        }
    ];

    return (
        <section className="p-8 ">
            <div className="max-w-screen-lg mx-auto h-full flex flex-col justify-center">
                <h2 className="text-4xl font-bold text-center mb-8">Our Services</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
