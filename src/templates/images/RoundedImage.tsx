import React from 'react';

const RoundedImage = ({ src, alt }: { src: string; alt: string }) => (
  <img src={src} alt={alt} className="rounded-full border-2 border-gray-300" />
);

export default RoundedImage;
