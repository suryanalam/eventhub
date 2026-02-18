
import React from 'react';

const LoadingScreen: React.FC = () => {
  const icons = ['🏛️', '📸', '🍲', '✨', '🎸', '📋'];

  return (
    <div className="fixed inset-0 z-[100] bg-white/90 backdrop-blur-md flex flex-col items-center justify-center">
      <div className="flex gap-4 mb-6">
        {icons.map((icon, idx) => (
          <div 
            key={idx} 
            className="text-4xl animate-bounce-subtle" 
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            {icon}
          </div>
        ))}
      </div>
      <p className="text-sm font-black text-purple-700 uppercase tracking-[0.2em] animate-pulse">
        Curating experiences...
      </p>
    </div>
  );
};

export default LoadingScreen;
