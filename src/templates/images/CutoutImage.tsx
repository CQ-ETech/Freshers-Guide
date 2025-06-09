import React from 'react';

const CutoutImage = ({ src, alt }: { src: string; alt: string }) => (
  <img src={src} alt={alt} className="mask mask-squircle w-64 h-64 object-cover" />
);

export default CutoutImage;
