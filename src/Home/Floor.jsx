import React, { useState, useEffect, useRef } from "react";
import "./Floor.css";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

export default function Floor() {
  const [selectedFlat, setSelectedFlat] = useState("2BHK");
  const lightboxRef = useRef(null);

  const flatImages = [
    {
      type: "1BHK",
      src: "media/images/1  BHK@4x-8.png",
      subHtml: "1 BHK Floor Plan",
    },
    {
      type: "2BHK",
      src: "media/images/2 BHK@4x-8.png",
      subHtml: "2 BHK Floor Plan",
    },
    {
      type: "3BHK",
      src: "media/images/3  BHK@4x-8.png",
      subHtml: "3 BHK Floor Plan",
    },
  ];

  const selectedImage = flatImages.find((img) => img.type === selectedFlat);

  useEffect(() => {
    if (lightboxRef.current) {
      const lightbox = new PhotoSwipeLightbox({
        gallery: lightboxRef.current,
        children: 'a[data-pswp-width]',
        pswpModule: () => import('photoswipe'),
      });
      lightbox.init();
      
      return () => {
        lightbox.destroy();
      };
    }
  }, [selectedImage]);

  return (
    <div className="floor-section">
      <h2 className="section-title">FLATS LAYOUTS</h2>
      <div className="flat-tabs">
        {["1BHK", "2BHK", "3BHK"].map((type) => (
          <button
            key={type}
            className={`flat-tab ${selectedFlat === type ? "active" : ""}`}
            onClick={() => setSelectedFlat(type)}
          >
            {type.replace("BHK", " BHK")}
          </button>
        ))}
      </div>
      <div className="flat-layout" ref={lightboxRef}>
        <a
          href={selectedImage.src}
          data-pswp-width="1200"
          data-pswp-height="1000"
          data-pswp-caption={selectedImage.subHtml}
        >
          <img
            className="gallery-img"
            src={selectedImage.src}
            alt={selectedImage.subHtml}
            style={{ height: "500px", width: "600px" }}
          />
        </a>
      </div>
    </div>
  );
}

