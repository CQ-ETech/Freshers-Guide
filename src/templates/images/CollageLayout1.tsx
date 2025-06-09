import React from 'react';

const CollageLayout1 = ({ images }: { images: string[] }) => (
  <div className="flex gap-2">
    {images.slice(0, 2).map((src, i) => (
      <img key={i} src={src} alt={`img-${i}`} className="w-1/2 h-48 object-cover rounded-lg" />
    ))}
  </div>
);

export default CollageLayout1;
