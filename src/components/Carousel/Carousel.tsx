

import { useState, useEffect } from "react";
import styles from './Carousel.module.css';
import Photo3 from '../../assets/Photo3.jpg';
import Photo4 from '../../assets/Photo4.jpg';
import Photo5 from '../../assets/Photo5.jpg';

const images = [

  Photo3,
  Photo4,
  Photo5
  
];

const Carousel = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

 useEffect (() => {

  if (isHovered) return;

  const interval = setInterval (() => {

    setCurrentIndex (prev => (prev === images.length - 1 ? 0 : prev + 1));

  }, 5000);

  return () => clearInterval (interval);
  
}, [isHovered]);

  const nextSlide = () => {

    setCurrentIndex (prevIndex =>
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

      className = {styles.carousel}
      onMouseEnter = {() => setIsHovered (true)}
      onMouseLeave = {() => setIsHovered (false)}

    >
      <img
        src = {images [currentIndex]}
        alt = {`Slide ${currentIndex + 1}`}
        className = {styles.image}
      />

      <button
        className = {`${styles.button} ${styles.prev} ${isHovered ? styles.visible : ''}`}
        onClick = {prevSlide}
      >
        ⟵
      </button>

      <button
        className = {`${styles.button} ${styles.next} ${isHovered ? styles.visible : ''}`}
        onClick = {nextSlide}
      >
        ⟶
      </button> 

    </div>

  );

};

export default Carousel;
