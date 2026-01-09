'use client';

import { useEffect, useState } from 'react';

const confettiColors = ['#FFB703', '#A62303', '#0081a7', '#fdfcdc', '#fb8500']; // Marigold, Deep Red, Teal, Cream, Orange
const confettiCount = 150;

type ConfettiPiece = {
  style: React.CSSProperties;
};

export function ConfettiAnimation() {
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      const newConfetti = Array.from({ length: confettiCount }).map(() => ({
        style: {
          left: `${Math.random() * 100}vw`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${2 + Math.random() * 3}s`,
          backgroundColor: confettiColors[Math.floor(Math.random() * confettiColors.length)],
          transform: `scale(${Math.random() * 0.7 + 0.5}) rotate(${Math.random() * 360}deg)`,
          width: `${Math.random() * 8 + 6}px`,
          height: `${Math.random() * 8 + 6}px`,
          borderRadius: Math.random() > 0.5 ? '50%' : '0',
        },
      }));
      setConfetti(newConfetti);
    }
  }, [isClient]);

  if (!isClient) {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {confetti.map((c, i) => (
        <div key={i} className="confetti-piece" style={c.style} />
      ))}
    </div>
  );
}
