import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useParallax, ParallaxProvider } from "react-scroll-parallax";
import "./Home.css";

// Slide data structure - easily customizable for your projects
const slides = [
  {
    title: "Elevated Living.<br>Grounded in Nature",
    description:
      "Nestled in Jagatpura, the rising gem of South Jaipur, The Aura offers 1, 2 & 3 BHK luxurious residences where modern comfort seamlessly blends with the serenity of nature.",
    image:
    "media/images/the-aura-image.jpg"
  },
  {
    title: "75% Open Green Area",
    description:
      "Nature's Abundance. Grounded in Nature. With 75% open spaces, The Aura offers homes filled with light, air, and greenery. Stroll through wide walkways, unwind in landscaped gardens, and embrace a life where modern living and nature exist in perfect harmony—where every living space is brighter, and every breeze feels fresher.",
    image:
    "media/images/Untitled-1-04-1536x842.png"
  },
  {
    title: "Sky Screen Podium",
    description:
      "Experience entertainment like never before with The Sky Screen—a vibrant open-air social hub at the heart of The Aura. Cheer for your team, watch global events, or enjoy movie nights under the stars—every moment becomes a shared celebration, bringing the community together",
    image:
    "media/images/Untitled-1-03-1-1536x842.png"
  },
  {
    title: "We don't just offer amenities — <br/>We offer experiences:",
    description: `• Swimming Pool <br />
• Kids' Play Area <br />
• Pickle Ball Court <br />
• Paved Patio & Sit-outs <br />
• Solarium for Sun Therapy <br />
• Temple for spiritual grounding <br />
• Regal Banquet Hall <br />
 and many more`,
    image:
    "media/images/WhatsApp-Image-2025-05-09-at-15.40.44_8ef01748-scaled.png"
   },
];

function Example() {
  const parallax = useParallax({
    onProgressChange: (progress) => {
      // scale progress so 1 is reached at 50% scroll (= 150px)
      const triggerPoint = 0.4; // 40% of endScroll

      let adjustedProgress;

      if (progress < triggerPoint) {
        // scale progress from 0 to 1 between 0 and triggerPoint
        adjustedProgress = progress / triggerPoint;
      } else {
        // after triggerPoint, keep progress stuck at 1
        adjustedProgress = 1;
      }

      if (parallax.ref.current) {
        parallax.ref.current.style.setProperty(
          "--progress",
          adjustedProgress.toString()
        );
      }
    },
  });

  return (
    <div ref={parallax.ref} className="animate">
      <h2 className="header-1">WELCOME TO</h2>
      <img
        src="media/images/logo.png"
        className="logo-image"
        style={{ display: "block", margin: "0 auto" }}
        alt="Logo"
      />
    </div>
  );
}

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageOpacity, setImageOpacity] = useState(1);
  const imageRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false,
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, []);

  // Slide change logic
  const updateSlide = (newIndex) => {
    setImageOpacity(0);
    setTimeout(() => {
      setCurrentSlide(newIndex);
      setImageOpacity(1);
    }, 250);
  };

  const changeSlide = (direction) => {
    const newIndex = (currentSlide + direction + slides.length) % slides.length;
    updateSlide(newIndex);
  };

  const goToSlide = (index) => {
    updateSlide(index);
  };

  // Auto-advance feature
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      changeSlide(1);
    }, 8000);
    return () => clearInterval(intervalRef.current);
    // eslint-disable-next-line
  }, [currentSlide]);

  // Optional: closeHero function for future use
  const closeHero = () => {
    // Customize this function based on your navigation needs
    console.log("Close hero section");
  };

  return (
    <ParallaxProvider>
      <div>
        <div className="animate-page">
          <Example />
        </div>

        <div className="hero-section">
          {/* Geometric Overlay */}
          <div className="geometric-overlay">
            <svg viewBox="0 0 400 300">
              <path d="M200 50 L300 150 L250 250 L150 200 Z" />
              <path d="M150 80 L250 180 L200 280 L100 230 Z" />
              <path d="M100 60 L200 160 L150 260 L50 210 Z" />
            </svg>
          </div>
          {/* Content Panel */}
          <div className="content-panel">
            <h1
              className="main-title animate-in"
              id="mainTitle"
              dangerouslySetInnerHTML={{ __html: slides[currentSlide].title }}
            />
            <p
              className="description animate-in animate-delay-2"
              id="description"
              dangerouslySetInnerHTML={{
                __html: slides[currentSlide].description,
              }}
            ></p>
            <div className="nav-controls animate-in animate-delay-3">
              <button
                className="nav-button"
                aria-label="Previous slide"
                onClick={() => changeSlide(-1)}
              >
                <svg
                  className="arrow-left"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  ></path>
                </svg>
              </button>
              <button
                className="nav-button"
                aria-label="Next slide"
                onClick={() => changeSlide(1)}
              >
                <svg
                  className="arrow-right"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          {/* Image Panel */}
          <div className="image-panel">
            <div className="image-container">
              <img
                ref={imageRef}
                src={slides[currentSlide].image}
                alt="Luxury Property"
                className="property-image"
                id="propertyImage"
                style={{ opacity: imageOpacity, transition: "opacity 0.25s" }}
              />
              <div className="image-overlay"></div>
            </div>
          </div>
          {/* Bottom Navigation */}
          <div className="bottom-nav animate-in animate-delay-4">
            <div className="slide-counter" id="slideCounter">
              {`${String(currentSlide + 1).padStart(2, "0")} / ${String(
                slides.length
              ).padStart(2, "0")}`}
            </div>
          </div>
        </div>
      </div>
    </ParallaxProvider>
  );
}

export default Home;
