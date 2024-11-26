import React, { useState } from 'react';
import './index.scss';
import { useEffect } from 'react';

const Slider = () => {
    const slides = [
        { id: 1, img: '/assets/images/g1.jpg', alt: '' },
        { id: 2, img: '/assets/images/g2.jpg', alt: 'Festa 2' },
        { id: 3, img: '/assets/images/g3.jpg', alt: 'Festa 3' },
        { id: 4, img: '/assets/images/g4.jpg', alt: 'Festa 1' },    
        
    ];
    
    const [currentSlide, setCurrentSlide] = useState(0);
    const [displaySlides, setDisplaySlides] = useState(slides);

    useEffect(() => {

        setDisplaySlides([...slides, slides[0]]);

    }, [slides])

    const changeSlide = (direction) => {
        if (direction === 'next') {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        } else {
            setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            changeSlide('next');
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="slider">
            <div className="slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {slides.map((slide) => (
                    <div className="slide" key={slide}>
                        <img src={slide.img} alt={slide.alt} />
                    </div>
                ))}
            </div>
            <button className="prev" style={{backgroundColor: "#000"}} onClick={() => changeSlide('prev')}>&#10094;</button>
            <button className="next" style={{backgroundColor: "#000"}} onClick={() => changeSlide('next')}>&#10095;</button>
            
        </div>
    );
};


const SliderTwo = () => {
    const slides = [
        { id: 1, img: '/assets/images/gg.jpg', alt: '' },
        { id: 2, img: '/assets/images/g2.jpg', alt: 'Festa 2' },
        { id: 3, img: '/assets/images/g3.jpg', alt: 'Festa 3' },
        { id: 4, img: '/assets/images/g4.jpg', alt: 'Festa 1' },    
        
    ];
    
    const [currentSlide, setCurrentSlide] = useState(0);
    const [displaySlides, setDisplaySlides] = useState(slides);

    useEffect(() => {

        setDisplaySlides([...slides, slides[0]]);

    }, [slides])

    const changeSlide = (direction) => {
        if (direction === 'next') {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        } else {
            setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            changeSlide('next');
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="slider2">
            <div className="slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {slides.map((slide) => (
                    <div className="slide" key={slide}>
                        <img src={slide.img} alt={slide.alt} />
                    </div>
                ))}
            </div>
            <button className="prev" style={{backgroundColor: "#000"}} onClick={() => changeSlide('prev')}>&#10094;</button>
            <button className="next" style={{backgroundColor: "#000"}} onClick={() => changeSlide('next')}>&#10095;</button>
            
        </div>
    );
};


export {
    Slider,
    SliderTwo
}