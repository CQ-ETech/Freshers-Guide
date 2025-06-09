import React from 'react';

const PolaroidImage = ({ src, alt, caption }: { src: string; alt: string; caption: string }) => (
  <div className="bg-white shadow-md p-2 w-60 text-center rounded">
    <img src={src} alt={alt} className="mb-2 w-full h-48 object-cover" />
    <p className="text-sm text-gray-700">{caption}</p>
  </div>
);

export default PolaroidImage;
