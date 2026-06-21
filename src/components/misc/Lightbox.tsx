import { useState, useEffect, MouseEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";

type LightboxPhoto = {
  imageSrc: string;
  title: string;
  content: string;
};

type LightboxProps = {
  photos: LightboxPhoto[];
  initialIndex: number | null;
  onClose: () => void;
};

const Overlay = styled(motion.div)`
  ${tw`fixed inset-0 z-50 flex items-center justify-center`}
  background: rgba(0, 0, 0, 0.88);
`;

const Inner = styled(motion.div)`
  ${tw`relative flex flex-col items-center`}
`;

const NavRow = tw.div`flex items-center gap-4`;

const NavButton = styled.button`
  ${tw`bg-white text-gray-900 rounded-full flex items-center justify-center font-bold leading-none flex-shrink-0 transition duration-200`}
  width: 36px;
  height: 36px;
  font-size: 22px;
  cursor: pointer;
  border: none;
  opacity: 0.85;
  &:hover {
    opacity: 1;
  }
`;

const ImageWrap = tw.div`relative`;

const Image = styled.img`
  max-width: 80vw;
  max-height: 72vh;
  object-fit: contain;
  border-radius: 0.5rem;
  display: block;
`;

const CloseButton = styled.button`
  ${tw`absolute bg-white text-gray-900 rounded-full flex items-center justify-center font-bold leading-none`}
  top: -14px;
  right: -14px;
  width: 32px;
  height: 32px;
  font-size: 18px;
  cursor: pointer;
  border: none;
  z-index: 1;
`;

const Caption = tw.div`mt-4 text-center text-white`;
const Title = tw.h3`text-lg font-semibold`;
const Description = tw.p`text-sm text-gray-400 mt-1`;

const Lightbox = ({ photos, initialIndex, onClose }: LightboxProps) => {
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
        <Overlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <Inner
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(e: MouseEvent) => e.stopPropagation()}
          >
            <NavRow>
              <NavButton onClick={() => setCurrentIndex(i => (i - 1 + photos.length) % photos.length)}>‹</NavButton>
              <ImageWrap>
                <CloseButton onClick={onClose}>×</CloseButton>
                <Image src={photo.imageSrc} alt={photo.title} />
              </ImageWrap>
              <NavButton onClick={() => setCurrentIndex(i => (i + 1) % photos.length)}>›</NavButton>
            </NavRow>
            <Caption>
              <Title>{photo.title}</Title>
              <Description>{photo.content}</Description>
            </Caption>
          </Inner>
        </Overlay>
      )}
    </AnimatePresence>
  );
};

export default Lightbox;
