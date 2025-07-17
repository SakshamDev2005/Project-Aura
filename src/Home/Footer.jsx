import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import {faPhone} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="f-logo">
            <img src="media/images/footer-01.png" alt="footer-img" />
            <div className="f-text">
              <h4>
                Vanshdeep – All rights reserved <br /> RERA No. RAJ/P/2025/3551
              </h4>
            </div>
          </div>

          <div className="footer-bar">
            <div className="address">
              <h3>Address</h3>
              <h4>
                The Aura Khasra No. 633 and 634, Bilwa, Jagatpura Extension,
                Patel Nagar, Sitapura, Jaipur, Beelwa Kalan, Rajasthan 302022
              </h4>
            </div>

            <div className="social">
              <h3>Social</h3>
              <ul>
                <li>
                  <Tippy content="Instagram" placement="top">
                    <span>
                    <a
                      href="https://www.instagram.com/theaurabyvanshdeepgroup?utm_source=ig_web_button_share_sheet&igsh=MWdwczkyZ3cxN3NwMA=="
                      target="_blank"
                    >
                      <FontAwesomeIcon icon={faInstagram} size="2xl" />
                    </a>

                    </span>
                    
                  </Tippy>
                </li>
                <li>
                  <Tippy content="Facebook" placement="top">
                    <span>
                    <a
                      href="https://www.facebook.com/VanshdeepBuilders/"
                      target="_blank"
                    >
                      <FontAwesomeIcon icon={faFacebook} size="2xl" />
                    </a>

                    </span>
                  
                  </Tippy>
                </li>

                <li>
                  <Tippy content="Phone" placement="top">
                    <a href="tel:+917428244244" target="_blank">
                    <FontAwesomeIcon icon={faPhone} size="2x" />
                    </a>

                  </Tippy>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
