// Example usage in your page component
import Services from "./components/Services";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function HomePage() {
    return (
        <div>
          <Navbar />
            <section id="home">
                <Hero />
            </section>
            <section id="services">
                <Services />
            </section>
            <section id="testimonials">
                {/* Testimonials section content */}
            </section>
            <section id="about">
                {/* About Us section content */}
            </section>
            <section id="contact">
                {/* Contact section content */}
            </section>
        </div>
    );
}
