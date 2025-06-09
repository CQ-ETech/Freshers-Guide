import React from 'react';

const GlassEffectImage = ({ src, alt }: { src: string; alt: string }) => (
  <div className="backdrop-blur-lg bg-white/10 p-2 rounded-xl">
    <img src={src} alt={alt} className="rounded-md" />
  </div>
);

export default GlassEffectImage;
