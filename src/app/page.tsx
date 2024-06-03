// Example usage in your page component
import Services from "./components/Services";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TestimonialSlider from "./components/TestimonialSlider";



export default function HomePage() {
    return (
        <div>
          <Navbar />
            <section id="home">
                <Hero />
            </section>
            <section id="Services">
                <Services />
            </section>
            <section id="testimonials">
             <TestimonialSlider />
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
