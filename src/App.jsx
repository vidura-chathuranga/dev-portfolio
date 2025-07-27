import About from "./sections/About";
import Contact from "./sections/Contact";
import Experience from "./sections/Experiences";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Projects from "./sections/Projects";
import Testimonial from "./sections/Testimonial";

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      {/* navbar */}
      <Navbar/>
      {/* HERO */}
      <Hero/>
      {/* About */}
      <About/>
      {/* Projects */}
      <Projects/>
      {/* Experience */}
      <Experience/>
      {/* Testimonial */}
      <Testimonial/>
      {/* Contact Us */}
      <Contact/>
      {/* Footer */}
      <Footer/>
    </div>
  )
}

export default App;