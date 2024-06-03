// Example usage in your page component
import Services from "./components/Services";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TestimonialSlider from "./components/TestimonialSlider";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";




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
              <AboutUs />
            </section>
            <section id="contact">
                <Contact />
            </section>
        </div>
    );
}
