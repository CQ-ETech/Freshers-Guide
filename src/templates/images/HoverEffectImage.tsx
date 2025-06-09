import React from 'react';

const HoverEffectImage = ({ src, alt }: { src: string; alt: string }) => (
  <img
    src={src}
    alt={alt}
    className="transition-transform duration-300 transform hover:scale-105 hover:rotate-1 rounded-md"
  />
);

export default HoverEffectImage;
