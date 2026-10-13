
import React, { useState } from "react";
import {
  Image as ImageIcon,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import "./PhotoGallery.css";

/* Load numbered gallery images from src/assets */
const assetImages = import.meta.glob("../assets/*", {
  eager: true,
  query: "?url",
  import: "default",
});


const photos = Object.entries(assetImages)
  .filter(([path]) => {
    const fileName = path.split("/").pop();

    return /^photo\d+\.(jpg|jpeg|png|webp)$/i.test(fileName);
  })
  .sort(([pathA], [pathB]) => {
    const numberA = Number(
      pathA.split("/").pop().match(/\d+/)[0]
    );

    const numberB = Number(
      pathB.split("/").pop().match(/\d+/)[0]
    );

    return numberA - numberB;
  })
  .map(([path, src], index) => ({
    id: path,
    src,
    alt: `Man Ki Baat photo ${index + 1}`,
  }));

function PhotoGallery() {
  const [showAll, setShowAll] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const visiblePhotos = showAll ? photos : photos.slice(0, 8);

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const showPrevious = () => {
    setSelectedIndex((current) =>
      current === 0 ? photos.length - 1 : current - 1
    );
  };

  const showNext = () => {
    setSelectedIndex((current) =>
      current === photos.length - 1 ? 0 : current + 1
    );
  };

  return (
    <section className="photo-gallery-section" id="photo-gallery">
      <div className="photo-gallery-container">

        {/* Section Heading */}
        <div className="photo-gallery-heading">
          <div className="photo-gallery-heading-content">
            <span className="gallery-eyebrow">
              <span className="gallery-eyebrow-line" />
              OUR MEMORIES
            </span>

            <h2>Our Photo Gallery</h2>

            <p>
              Moments of care, connection, learning, and community
              at Man Ki Baat.
            </p>
          </div>

          {photos.length > 0 && (
            <span className="gallery-photo-count">
              <ImageIcon size={17} />
              {photos.length} Photos
            </span>
          )}
        </div>

        {/* Empty State */}
        {photos.length === 0 ? (
          <div className="gallery-empty-message">
            <ImageIcon size={32} />

            <h3>No photos found</h3>

            <p>
              Add images to src/assets using names such as
              photo1.jpg, photo2.jpg, and photo3.jpg.
            </p>
          </div>
        ) : (
          <>
            {/* Photo Grid */}
            <div className="photo-gallery-grid">
              {visiblePhotos.map((photo, index) => (
                <button
                  type="button"
                  className="gallery-photo"
                  key={photo.id}
                  onClick={() => setSelectedIndex(index)}
                  aria-label={`View ${photo.alt}`}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                  />

                  <span className="gallery-photo-overlay">
                    <span className="gallery-photo-view-icon">
                      <ImageIcon size={22} />
                    </span>

                    <span>View Photo</span>
                  </span>
                </button>
              ))}
            </div>

            {/* View All Button */}
            {photos.length > 8 && (
              <div className="gallery-view-all">
                <button
                  type="button"
                  className="gallery-view-all-button"
                  onClick={() => setShowAll((previous) => !previous)}
                  aria-expanded={showAll}
                >
                  <ImageIcon size={18} />

                  {showAll
                    ? "Show Less"
                    : `View All Photos (${photos.length})`}
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {/* Full-screen Photo Viewer */}
      {selectedIndex !== null && photos[selectedIndex] && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          onClick={closeLightbox}
        >
          <button
            type="button"
            className="gallery-lightbox-close"
            onClick={closeLightbox}
            aria-label="Close photo"
          >
            <X size={26} />
          </button>

          {photos.length > 1 && (
            <button
              type="button"
              className="gallery-lightbox-arrow gallery-lightbox-prev"
              onClick={(event) => {
                event.stopPropagation();
                showPrevious();
              }}
              aria-label="Previous photo"
            >
              <ChevronLeft size={30} />
            </button>
          )}

          <div
            className="gallery-lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={photos[selectedIndex].src}
              alt={photos[selectedIndex].alt}
            />

            <p>
              Photo {selectedIndex + 1} of {photos.length}
            </p>
          </div>

          {photos.length > 1 && (
            <button
              type="button"
              className="gallery-lightbox-arrow gallery-lightbox-next"
              onClick={(event) => {
                event.stopPropagation();
                showNext();
              }}
              aria-label="Next photo"
            >
              <ChevronRight size={30} />
            </button>
          )}
        </div>
      )}
    </section>
  );
}

export default PhotoGallery;
