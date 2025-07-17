import "./Navbar.css";
import { Link, scroller } from "react-scroll";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const desktopNavbarRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = (targetName) => {
    console.log(`Link clicked: ${targetName}`);
    const targetEl =
      document.querySelector(`[id='${targetName}']`) ||
      document.querySelector(`[name='${targetName}']`);
    if (targetEl) {
      console.log(`Target element found for '${targetName}':`, targetEl);
    } else {
      console.warn(`No target element found for '${targetName}'`);
    }

    // Close mobile menu
    setMenuOpen(false);

    // Refresh ScrollTrigger after animation
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 1000);
  };

  const scrollConfig = {
    spy: true,
    smooth: "easeInOutQuart",
    duration: 4000,
  };

  const handleFormButtonClick = () => {
    scroller.scrollTo("form", {
      ...scrollConfig,
      offset: -60,
    });
    handleLinkClick("form");
  };

  // GSAP animation for desktop navbar only
  useEffect(() => {
    const navbar = desktopNavbarRef.current;
    if (!navbar) return;

    const setupGsap = () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

      if (window.innerWidth > 768) {
        gsap.to(navbar, {
          backgroundColor: "#143C32",
          duration: 0.6,
          ease: "none",
          scrollTrigger: {
            trigger: ".video",
            start: "bottom-=150",
            endTrigger: ".video",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    };

    setupGsap();
    window.addEventListener("resize", setupGsap);
    return () => {
      window.removeEventListener("resize", setupGsap);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
  }, []);

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="navbar desktop-navbar" ref={desktopNavbarRef}>
        <img src="media/images/logo-1.png" alt="logo" className="logo" />
        <ul className="nav-links desktop">
          {["form", "App", "floor", "gallery", "about", "location"].map(
            (section, i) => (
              <li key={i}>
                {section === "form" ? (
                  <button
                    className="open-form-btn"
                    onClick={handleFormButtonClick}
                  >
                    Enquire Now
                  </button>
                ) : (
                  <Link
                    to={section}
                    offset={-60}
                    {...scrollConfig}
                    onClick={() => handleLinkClick(section)}
                  >
                    {section === "App"
                      ? "Home"
                      : section.charAt(0).toUpperCase() + section.slice(1)}
                  </Link>
                )}
              </li>
            )
          )}
        </ul>
      </nav>

      {/* Mobile Navbar */}
      <nav className="navbar mobile-navbar">
        <img src="media/images/logo-1.png" alt="logo" className="logo" />

        <div
          className="hamburger-icon"
          onClick={() => {
            setMenuOpen(!menuOpen);
            console.log("worked");
          }}
        >
          <span className={menuOpen ? "open-top" : ""}></span>
          <span className={menuOpen ? "open-mid" : ""}></span>
          <span className={menuOpen ? "open-bot" : ""}></span>
        </div>

        <div className={`mobile-nav ${menuOpen ? "open" : ""}`}>
          <ul className="nav-links-mobile">
            {["form", "App", "floor", "gallery", "about", "location"].map(
              (section, i) => (
                <li key={i}>
                  {section === "form" ? (
                    <button
                      className="open-form-btn"
                      onClick={handleFormButtonClick}
                    >
                      Enquire Now
                    </button>
                  ) : (
                    <Link
                      to={section}
                      offset={-60}
                      {...scrollConfig}
                      onClick={() => handleLinkClick(section)}
                    >
                      {section === "App"
                        ? "Home"
                        : section.charAt(0).toUpperCase() + section.slice(1)}
                    </Link>
                  )}
                </li>
              )
            )}
          </ul>
        </div>
      </nav>
    </>
  );
}
