import React from 'react';

const InteractiveSphere = () => {
  return (
    <div className="w-full h-full relative group">
      {/* Core glow with transparency */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-b from-[#FFBB00]/10 to-[#731900]/10 blur-3xl animate-pulse"></div>
      
      {/* Main sphere layers with transparency */}
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="absolute inset-0 rounded-full border border-amber-400/20"
          style={{
            transform: `rotateX(${i * 45}deg) rotateY(${i * 60}deg) scale(${1 - i * 0.05})`,
            animation: `spin 30s linear infinite ${i * 0.4}s`,
          }}
        />
      ))}
      
      {/* Additional transparent layers */}
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={`layer-${i}`}
          className="absolute inset-0 rounded-full border border-[#FFEA00]/15"
          style={{
            transform: `rotateX(${i * 30}deg) rotateY(${i * 45}deg) scale(${0.8 - i * 0.1})`,
            animation: `spin 25s linear infinite reverse ${i * 0.3}s`,
          }}
        />
      ))}
      
      {/* Floating particles with transparency */}
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={`particle-${i}`}
          className="absolute w-1.5 h-1.5 bg-gradient-to-r from-[#FFEA00]/60 to-[#FFBB00]/60 rounded-full animate-pulse"
          style={{
            top: `${15 + i * 7}%`,
            left: `${10 + i * 6}%`,
            animationDelay: `${i * 0.4}s`,
            animationDuration: `${3 + i * 0.3}s`,
          }}
        />
      ))}
      
      {/* Inner glow rings with transparency */}
      <div className="absolute inset-20 rounded-full border border-[#FFBB00]/25 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute inset-40 rounded-full border border-[#FFEA00]/20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute inset-60 rounded-full border border-[#FFBB00]/15 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      
      {/* Center core with transparency */}
      <div className="absolute inset-80 rounded-full bg-gradient-to-br from-[#FFEA00]/15 to-[#FFBB00]/10 animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      {/* Additional floating elements */}
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={`float-${i}`}
          className="absolute w-3 h-3 border border-[#FFEA00]/30 rounded-full animate-pulse"
          style={{
            top: `${25 + i * 15}%`,
            left: `${20 + i * 20}%`,
            animationDelay: `${i * 0.8}s`,
            animationDuration: `${4 + i * 0.5}s`,
          }}
        />
      ))}
      
      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotateZ(0deg);
          }
          to {
            transform: rotateZ(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default InteractiveSphere; 