'use client'

/*import React, { useEffect, useState } from 'react';

const useMouseTrailColor = () => {
  const [mouseTrailColor, setMouseTrailColor] = useState('white');

  const handleMouseMove = (event) => {
    const elementUnderCursor = document.elementFromPoint(event.clientX, event.clientY);

    if (elementUnderCursor) {
      const color = getBackgroundColor(elementUnderCursor);
      const brightness = calculateBrightness(color);

      const newColor = brightness > 128 ? '#404041' : '#FFFFFF';

      setMouseTrailColor(newColor);
    }
  };

  const getBackgroundColor = (element) => {
    let currentElement = element;
  
    while (currentElement) {
      const computedStyle = getComputedStyle(currentElement);
      const color = computedStyle.backgroundColor;
  
      if (currentElement.offsetWidth > 0 && currentElement.offsetHeight > 0) {
        if (color && color !== 'rgba(0, 0, 0, 0)' && color !== 'transparent' && color !== '') {
          return color;
        }
      }

      currentElement = currentElement.parentElement;
    }
  
    return 'rgb(255, 255, 255)';
  };
  
  const calculateBrightness = (color) => {
    const rgb = color.match(/\d+/g);
    return rgb ? 0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2] : 0;
  };

  useEffect(() => {
    const onMouseMove = (event) => handleMouseMove(event);
    document.addEventListener('mousemove', onMouseMove);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return mouseTrailColor;
};

export default useMouseTrailColor;*/
