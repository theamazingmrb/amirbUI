"use client"
import React, { useState, useEffect, useCallback, FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faCircle } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Carousel.module.css';

type CarouselProps = {
  images: string[];
  interval?: number;
  autoPlay?: boolean;
  showControls?: boolean;
  showIndicators?: boolean;
};

const Carousel: FC<CarouselProps> = ({ 
  images = [], 
  interval = 5000, 
  autoPlay = true,
  showControls = true,
  showIndicators = true
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  // Navigate to a specific slide
  const goToSlide = useCallback((index: number) => {
    const newDirection = index > currentIndex ? 1 : -1;
    setDirection(newDirection);
    setCurrentIndex(index);
  }, [currentIndex]);

  // Navigate to the next slide
  const nextSlide = useCallback(() => {
    const newIndex = (currentIndex + 1) % images.length;
    setDirection(1);
    setCurrentIndex(newIndex);
  }, [currentIndex, images.length]);

  // Navigate to the previous slide
  const prevSlide = useCallback(() => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setDirection(-1);
    setCurrentIndex(newIndex);
  }, [currentIndex, images.length]);

  // Auto-advance slides if autoPlay is enabled
  useEffect(() => {
    if (!autoPlay || isHovering) return;
    
    const timer = setInterval(() => {
      nextSlide();
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, nextSlide, isHovering]);

  // Animation variants for slide transitions
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0
    })
  };

  return (
    <div 
      className={styles.carouselContainer}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          className={styles.slide}
        >
          <img 
            src={images[currentIndex]} 
            alt={`Slide ${currentIndex + 1}`} 
            className={styles.slideImage} 
          />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      {showControls && images.length > 1 && (
        <>
          <button 
            onClick={prevSlide} 
            className={`${styles.navButton} ${styles.prevButton}`}
            aria-label="Previous slide"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button 
            onClick={nextSlide} 
            className={`${styles.navButton} ${styles.nextButton}`}
            aria-label="Next slide"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </>
      )}

      {/* Slide Indicators */}
      {showIndicators && images.length > 1 && (
        <div className={styles.indicators}>
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`${styles.indicator} ${index === currentIndex ? styles.activeIndicator : ''}`}
              aria-label={`Go to slide ${index + 1}`}
            >
              <FontAwesomeIcon icon={faCircle} size="xs" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;
