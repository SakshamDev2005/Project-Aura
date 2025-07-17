import "./App.css";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import LoadingPage from './Loading.jsx'
import Navbar from "./Navbar.jsx";
import Home from "./Home.jsx";
import Tower from "./Tower.jsx";
import Floor from "./Floor.jsx";
import Gallery from "./Gallery.jsx";
import About from "./About.jsx";
import Location from "./Location.jsx";
import Form from "./Form.jsx";
import Footer from "./Footer.jsx";

function App() {

  // Loading Page Effect
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (e.g. fetching data or 3s delay)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer); // cleanup
  }, []);

  // Page scroll reset on load
  useEffect(() => {
    window.addEventListener("load", () => {
      window.scrollTo(0, 0); // Reset scroll position to top after the page is fully loaded
    });

    return () => {
      window.removeEventListener("load", () => {
        window.scrollTo(0, 0);
      });
    };
  }, []);

  // AOS Use
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      delay: 400, // values from 0 to 3000, with step 50ms
      easing: "ease-in-out", // default easing for AOS animations
    });
  }, []);

  // Loader
  useEffect(() => {
    function handleLoad() {
      AOS.refresh();
    }
    window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  // Loading Page
  if (isLoading) {
    return (
      <div>
        <LoadingPage/>

      </div>
    );
  }

  // Main Page after Loading
  return (

    <div className="App" id="App">
      <section
        data-aos="fade-down"
        data-aos-delay="200"
        data-aos-offset="100"
        className="navbar"
      >
        <Navbar />
      </section>

      <video
        autoPlay
        loop
        playsInline
        muted
        className="video"
        src="media/videos/video1.mp4"
        type="video/mp4"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-offset="100"
      ></video>

      <section
        className="home"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-offset="100"
      >
        <Home />
      </section>

      <section
        className="tower"
        id="tower"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-offset="100"
      >
        <Tower />
      </section>

      <section
        className="floor-plan"
        id="floor"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-offset="60"
      >
        <Floor />
      </section>

      <section
        className="gallery"
        id="gallery"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-offset="150"
      >
        <Gallery />
      </section>

      <section
        className="about"
        id="about"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-offset="100"
      >
        <About />
      </section>

      <section
        className="location"
        id="location"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-offset="100"
      >
        <Location />
      </section>

      <section
        className="form-page"
        id="form"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-offset="100"
      >
        <Form />
      </section>

      <section
        className="footer"
        id="footer"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-offset="100"
      >
        <Footer />
      </section>
    </div>
  );
}

export default App;
