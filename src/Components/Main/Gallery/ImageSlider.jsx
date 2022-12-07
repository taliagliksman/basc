import {useState} from 'react';
import React from 'react';

const ImageSlider = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const sliderStyles = {
        height:"100%",
        position:"relative",
    }
    const slideStyles = {
        width: "100%",
        height: "100%",
        borderRadius: "10px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(${slides[currentIndex].url})`,
        
    };

    const leftArrowStyles = {
        position:"absolute",
        top:"70%",
        transform:"translate(0, -50%)",
        left:"32px",
        fontSize: "50px",
        color:"#ffff",
        zIndex: "1",
        cursor: "Pointer",
            
      }

        
      const rightArrowStyles = {
        position:"relative",
        top:"70%",
        transform:"translate(0, -50%)",
        fontSize: "50px",
        left:"600px",
        color:"#ffff",
        zIndex: "1",
        cursor: "Pointer",
      }   

      const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length -1 : currentIndex-1;
        setCurrentIndex(newIndex);
      }

      const goToNext = () => {
        const isLastSlide = currentIndex === slides.length -1;
        const newIndex = isLastSlide ? 0 : currentIndex+1;
        setCurrentIndex(newIndex);
      }
 
      const goToSlide = (slideIndex) =>{
        setCurrentIndex(slideIndex);
      }

      return (
      
         <div style={sliderStyles}>
            <div style={leftArrowStyles} onClick={goToPrevious}>❮</div>
            <div style={rightArrowStyles} onClick={goToNext}>❯</div>
            <div style={slideStyles}></div>   
            <div > 
                {slides.map((slide, slideIndex) => (
                <div key={slideIndex} onClick={() => goToSlide(slideIndex)}></div>
                
            ))}
            </div>
            <div className="caption-container">{slides[currentIndex].title}</div>      
        </div>
    );
};

export default ImageSlider;