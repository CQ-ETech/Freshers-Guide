import React from 'react';

const CollageLayout2 = ({ images }: { images: string[] }) => (
  <div className="grid grid-cols-3 gap-2">
    {images.slice(0, 3).map((src, i) => (
      <img key={i} src={src} alt={`img-${i}`} className="w-full h-40 object-cover rounded-md" />
    ))}
  </div>
);

export default CollageLayout2;
