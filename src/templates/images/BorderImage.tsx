import React from 'react';

interface BorderImageProps {
  src: string;
  alt: string;
}

const BorderImage: React.FC<BorderImageProps> = ({ src, alt }) => {
  return (
    <div className="border-4 border-blue-400 rounded-xl p-1 inline-block">
      <img
        src={src}
        alt={alt}
        className="rounded-lg w-full h-auto"
      />
    </div>
  );
};

export default BorderImage;
