
import React, { useEffect, useRef } from 'react';

const Preloader = () => {
  const preloaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (preloaderRef.current) {
        preloaderRef.current.style.display = 'none';
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div ref={preloaderRef} className="fixed inset-0 z-50 flex items-center justify-center bg-cyber-darker">
      <div className="text-center">
        <div className="text-4xl font-bold text-white">
          HH
        </div>
      </div>
    </div>
  );
};

export default Preloader;
