"use client"
import React, { useState, useEffect, FC } from 'react';

// Define a type for the props
type CarouselProps = {
  images: string[];
  interval?: number;
};

const Carousel: FC<CarouselProps> = ({ images = [], interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Set up a timer to advance the image index
    const timer = setInterval(() => {
      setCurrentIndex(prevIndex => {
        // Calculate the next index, wrapping back to 0 if at the end of the images array
        return (prevIndex + 1) % images.length;
      });
    }, interval);

    // Clean up the timer when the component is unmounted or when the dependencies change
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="your-tailwind-classes" />
    </div>
  );
};

export default Carousel;
