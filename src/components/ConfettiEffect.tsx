import { useEffect } from 'react';
import confetti from 'canvas-confetti';

export const triggerCelebrationConfetti = () => {
  const count = 200;
  const defaults = {
    origin: { y: 0.7 },
    colors: ['#4E614B', '#9A788E', '#C5A059', '#1E261F', '#FAF8F5']
  };

  function fire(particleRatio: number, opts: confetti.Options) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio)
    });
  }

  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  });
  fire(0.2, {
    spread: 60,
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });
};

export const ConfettiEffect = () => {
  useEffect(() => {
    // Initial page load burst
    const timer = setTimeout(() => {
      triggerCelebrationConfetti();
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  return null;
};
