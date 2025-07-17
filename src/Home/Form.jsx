import "./Form.css";
import { useEffect } from "react";
import AOS from "aos";

const FormPopup = ({ onClose }) => {
  useEffect(() => {
    const images = document.querySelectorAll(".form-page img");
    let loaded = 0;
    images.forEach((img) => {
      if (img.complete) {
        loaded++;
      } else {
        img.addEventListener("load", () => {
          loaded++;
          if (loaded === images.length) {
            AOS.refresh();
          }
        });
      }
    });
    if (loaded === images.length) {
      AOS.refresh();
    }
  }, []);

  return (
    <div className="form-container">
      <h2>Schedule a Tour</h2>
      <div className="form-sec">
        <div className="form-img">
          <img
            src="media/images/logo-1.png"
            alt=""
            className="the-aura"
            width="120"
            height="120"
          />
          <img
            src="media/images/the-aura-image.jpg"
            alt=""
            className="aura-image"
            width="550"
            height="300"
          />
        </div>

        <div className="form">
          <form>
            <input type="text" placeholder="Name" required />
            <input type="tel" placeholder="Phone" required />
            <input type="email" placeholder="Email" required />
            <select required>
              <option value="" disabled selected hidden>
                Select Flat Type
              </option>
              <option value="1BHK">1 BHK</option>
              <option value="2BHK">2 BHK</option>
              <option value="3BHK">3 BHK</option>
            </select>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormPopup;
