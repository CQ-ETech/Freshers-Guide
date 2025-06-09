import React from 'react';

const FramedImage = ({ src, alt }: { src: string; alt: string }) => (
  <div className="p-4 border-4 border-gray-600 rounded-xl bg-white">
    <img src={src} alt={alt} className="rounded-lg" />
  </div>
);

export default FramedImage;
