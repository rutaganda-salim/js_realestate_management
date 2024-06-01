export default function Hero() {
    return (
        <section className="flex justify-between items-center p-8  min-h-screen">
            <div className="w-1/2">
                <h1 className="text-5xl font-bold mb-6 leading-snug">
                    We manage your <span className="text-yellow-500">Properties</span><br />
                    with care and expertise
                </h1>
                <p className="text-lg text-gray-600">
                    Our platform provides comprehensive services for managing properties and rentals. Whether you are an owner or a tenant, we offer a seamless experience to cater your real estate needs.
                </p>
                <div className="mt-8 flex space-x-14">
                    <div className="text-center">
                        <h3 className="text-3xl font-bold mb-5">400 <span className="text-yellow-500">+</span></h3>
                        <p className="text-gray-600">Satisfied Clients</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-3xl font-bold mb-5">200K <span className="text-yellow-500">+</span></h3>
                        <p className="text-gray-600">Properties Managed</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-3xl font-bold mb-5">12 <span className="text-yellow-500">+</span></h3>
                        <p className="text-gray-600">Years of Experience</p>
                    </div>
                </div>
            </div>
            <div className="w-1/2 flex justify-center">
                <img src="https://assets-news.housing.com/news/wp-content/uploads/2022/01/10145854/most-beautiful-houses2.png" alt="Property Management" className="rounded-lg shadow-lg h-full" />
            </div>
        </section>
    );
}
