import { useState, useEffect, MouseEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Photo } from "data/portfolioItems";

type PhotoLightboxProps = {
  photos: Photo[];
  initialIndex: number | null;
  onClose: () => void;
};

const navButtonClass =
  "bg-white text-gray-900 rounded-full flex items-center justify-center font-bold leading-none shrink-0 transition duration-200 w-9 h-9 text-[22px] cursor-pointer border-0 opacity-85 hover:opacity-100";

const PhotoLightbox = ({ photos, initialIndex, onClose }: PhotoLightboxProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex ?? 0);

  useEffect(() => {
    if (initialIndex !== null) setCurrentIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    if (initialIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setCurrentIndex(i => (i + 1) % photos.length);
      if (e.key === "ArrowLeft") setCurrentIndex(i => (i - 1 + photos.length) % photos.length);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [initialIndex, onClose, photos.length]);

  const photo = initialIndex !== null ? photos[currentIndex] : null;

  return (
    <AnimatePresence>
      {photo && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/[0.88]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative flex flex-col items-center"
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(e: MouseEvent) => e.stopPropagation()}
          >
            <div className="flex items-center gap-4">
              <button
                className={navButtonClass}
                onClick={() => setCurrentIndex(i => (i - 1 + photos.length) % photos.length)}
              >
                ‹
              </button>
              <div className="relative">
                <button
                  className="absolute bg-white text-gray-900 rounded-full flex items-center justify-center font-bold leading-none -top-3.5 -right-3.5 w-8 h-8 text-[18px] cursor-pointer border-0 z-[1]"
                  onClick={onClose}
                >
                  ×
                </button>
                <img
                  className="max-w-[80vw] max-h-[72vh] object-contain rounded-lg block"
                  src={photo.imageSrc}
                  alt={photo.title}
                />
              </div>
              <button
                className={navButtonClass}
                onClick={() => setCurrentIndex(i => (i + 1) % photos.length)}
              >
                ›
              </button>
            </div>
            <div className="mt-4 text-center text-white">
              <h3 className="text-lg font-semibold">{photo.title}</h3>
              <p className="text-sm text-gray-400 mt-1">{photo.location}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PhotoLightbox;
