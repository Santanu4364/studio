'use client';

import { useEffect, useState } from 'react';

const confettiColors = ['#FFB703', '#A62303', '#0081a7', '#fdfcdc', '#fb8500']; // Marigold, Deep Red, Teal, Cream, Orange
const confettiCount = 150;

export function ConfettiAnimation() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  const confetti = Array.from({ length: confettiCount }).map((_, i) => {
    const style = {
      left: `${Math.random() * 100}vw`,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${2 + Math.random() * 3}s`,
      backgroundColor: confettiColors[Math.floor(Math.random() * confettiColors.length)],
      transform: `scale(${Math.random() * 0.7 + 0.5}) rotate(${Math.random() * 360}deg)`,
      width: `${Math.random() * 8 + 6}px`,
      height: `${Math.random() * 8 + 6}px`,
      borderRadius: Math.random() > 0.5 ? '50%' : '0',
    };
    return <div key={i} className="confetti-piece" style={style} />;
  });

  return <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">{confetti}</div>;
}
