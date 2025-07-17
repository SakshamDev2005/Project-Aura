// Gallery.jsx
import React, { useEffect, useRef, useState } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import "./Gallery.css";

const images = [
  {
    src: "media/images/the aura night_26/the aura_0005.jpg",
    caption: "Image-1",
  },
  {
    src: "media/images/the aura night_26/the aura_0006.jpg",
    caption: "Image-2",
  },
  {
    src: "media/images/the aura night_26/the aura_0015.jpg",
    caption: "Image-3",
  },
  {
    src: "media/images/the aura night_26/the aura_0017.jpg",
    caption: "Image-4",
  },
  {
    src: "media/images/the aura night_26/the aura_0024.jpg",
    caption: "Image-5",
  },
  {
    src: "media/images/the aura night_26/the aura_0025.jpg",
    caption: "Image-6",
  },
  {
    src: "media/images/the aura night_26/the aura_0029.jpg",
    caption: "Image-7",
  },
  {
    src: "media/images/the aura night_26/the aura_0032.jpg",
    caption: "Image-8",
  },
  {
    src: "media/images/the aura night_26/the aura night_06.jpg",
    caption: "Image-9",
  },
  {
    src: "media/images/the aura night_26/the aura night_12.jpg",
    caption: "Image-10",
  },
  {
    src: "media/images/the aura night_26/the aura night_15.jpg",
    caption: "Image-11",
  },
  {
    src: "media/images/the aura night_26/the aura night_16.jpg",
    caption: "Image-12",
  },
  {
    src: "media/images/the aura night_26/the aura night_17.jpg",
    caption: "Image-13",
  },
  {
    src: "media/images/the aura night_26/the aura night_22.jpg",
    caption: "Image-14",
  },
  {
    src: "media/images/the aura night_26/the aura night_23.jpg",
    caption: "Image-15",
  },
  {
    src: "media/images/the aura night_26/the aura night_26.jpg",
    caption: "Image-16",
  },
  {
    src: "media/images/the aura night_26/75 open space.jpg",
    caption: "Image-17",
  },
];

const getDisplayImages = (images, currentIndex) => {
  const total = images.length;
  // For 17 images, we'll show 5 images at a time (center + 2 on each side)
  const display = [];
  for (let i = -2; i <= 2; i++) {
    const imageIndex = (currentIndex + i + total) % total;
    display.push({
      ...images[imageIndex],
      displayIndex: imageIndex,
    });
  }
  return display;
};

export default function Gallery() {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayImages, setDisplayImages] = useState(
    getDisplayImages(images, 0)
  );

  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: "#gallery",
      children: "a",
      pswpModule: () => import("photoswipe"),
      showHideAnimationType: "zoom",
      initialZoomLevel: "fit",
      secondaryZoomLevel: 1,
    });
    lightbox.init();
    return () => lightbox.destroy();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % images.length;
        setDisplayImages(getDisplayImages(images, nextIndex));
        return nextIndex;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getClassName = (image) => {
    const total = images.length;
    const center = currentIndex;
    const left1 = (center - 1 + total) % total;
    const right1 = (center + 1) % total;
    const left2 = (center - 2 + total) % total;
    const right2 = (center + 2) % total;

    switch (image.displayIndex) {
      case center:
        return "carousel-item center";
      case right1:
        return "carousel-item right";
      case left1:
        return "carousel-item left";
      case right2:
        return "carousel-item far-right";
      case left2:
        return "carousel-item far-left";
      default:
        return "carousel-item hidden";
    }
  };

  return (
    <div className="gallery-wrapper" id="gallery" ref={containerRef}>
      <div className="carousel">
        {displayImages.map((image) => (
          <a
            key={image.displayIndex}
            href={image.src}
            data-pswp-src={image.src}
            data-pswp-caption={image.caption || image.alt}
            className={getClassName(image)}
          >
            <img
              src={image.src}
              alt={image.caption || image.alt}
              className="carousel-image"
              onLoad={(e) => {
                const width = e.target.naturalWidth;
                const height = e.target.naturalHeight;
                e.target.parentElement.setAttribute("data-pswp-width", width);
                e.target.parentElement.setAttribute("data-pswp-height", height);
              }}
            />
          </a>
        ))}
      </div>
    </div>
  );
}
