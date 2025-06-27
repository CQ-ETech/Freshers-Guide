"use client";
import React, { useRef } from 'react';

export default function GoldParticles() {
  const particles = useRef(
    Array.from({ length: 100 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: `${Math.random() * 4 + 2}px`,
      delay: `-${Math.random() * 20}s`,
      duration: `${20 + Math.random() * 20}s`,
      opacity: `${0.3 + Math.random() * 0.5}`,
    }))
  );
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden z-[2] pointer-events-none">
      <div className="gold-particles w-full h-full">
        {particles.current.map((p, index) => (
          <div
            key={index}
            className="gold-particle"
            style={{
              '--left': p.left,
              '--top': p.top,
              '--size': p.size,
              '--delay': p.delay,
              '--duration': p.duration,
              '--opacity': p.opacity,
            } as React.CSSProperties}
          />
        ))}
      </div>
      <style jsx>{`
        .gold-particles {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }
        .gold-particle {
          position: absolute;
          left: var(--left);
          top: var(--top);
          width: var(--size);
          height: var(--size);
          background: radial-gradient(circle at center, #FFD700, #FFBB00);
          border-radius: 50%;
          opacity: var(--opacity);
          animation: floatParticle var(--duration) ease-in-out infinite;
          animation-delay: var(--delay);
          will-change: transform;
        }
        @keyframes floatParticle {
          0%, 100% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(200px, -200px);
          }
          50% {
            transform: translate(400px, 0);
          }
          75% {
            transform: translate(200px, 200px);
          }
        }
      `}</style>
    </div>
  );
}
