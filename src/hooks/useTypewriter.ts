import { useState, useEffect } from 'react';

export const useTypewriter = (text: string, baseSpeed: number = 50, delay: number = 500) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Initial delay before starting
    const initialTimeout = setTimeout(() => {
      if (currentIndex < text.length) {
        // Add natural variation: slightly faster/slower for different characters
        const char = text[currentIndex];
        let speed = baseSpeed;
        
        // Faster for common letters, slower for punctuation and spaces
        if (char === ' ') {
          speed = baseSpeed * 0.5; // Faster for spaces
        } else if ([',', '.', '!', '?'].includes(char)) {
          speed = baseSpeed * 1.5; // Slight pause for punctuation
        } else {
          // Add small random variation for natural feel
          speed = baseSpeed + (Math.random() * 10 - 5);
        }

        const timeout = setTimeout(() => {
          setDisplayText(prev => prev + text[currentIndex]);
          setCurrentIndex(prev => prev + 1);
        }, speed);

        return () => clearTimeout(timeout);
      }
    }, delay);

    return () => clearTimeout(initialTimeout);
  }, [currentIndex, text, baseSpeed, delay]);

  return displayText;
};
