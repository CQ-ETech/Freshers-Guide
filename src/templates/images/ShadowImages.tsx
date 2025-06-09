import React from 'react';

const ShadowImage = ({ src, alt }: { src: string; alt: string }) => (
  <img
    src={src}
    alt={alt}
    className="shadow-xl rounded-lg"
  />
);

export default ShadowImage;
