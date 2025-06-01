import { useState, useEffect } from "react";
import styles from './Carousel.module.css';

const images = [
  '/Photo4.jpg',
  '/Photo5.jpg',
  '/Photo3.jpg'
];


const Carousel = () => {




  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

 useEffect(() => {
  if (isHovered) return;

  const interval = setInterval(() => {
    setCurrentIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
  }, 5000);

  return () => clearInterval(interval);
}, [isHovered]);

  const nextSlide = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      className={styles.carousel}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className={styles.image}
      />

      <button
        className={`${styles.button} ${styles.prev} ${isHovered ? styles.visible : ''}`}
        onClick={prevSlide}
      >
        ⟵
      </button>

      <button
        className={`${styles.button} ${styles.next} ${isHovered ? styles.visible : ''}`}
        onClick={nextSlide}
      >
        ⟶
      </button>


    


    </div>
  );
};

export default Carousel;
