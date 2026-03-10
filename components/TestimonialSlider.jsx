"use client";

import { useEffect, useRef, useState } from "react";
import { testimonials } from "@/lib/data/testimonialList";

export default function TestimonialSlider() {
  const [itemsPerView, setItemsPerView] = useState(2); // desktop default
  const [curSlide, setCurSlide] = useState(0);
  const intervalRef = useRef(null);

  /* ------------------ RESPONSIVE ------------------ */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1023) {
        setItemsPerView(1);
      } else {
        setItemsPerView(2);
      }
      setCurSlide(0); // reset slide on resize
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.ceil(testimonials.length / itemsPerView);

  /* ------------------ SLIDE CONTROL ------------------ */
  const nextSlide = () => {
    setCurSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  /* ------------------ AUTOPLAY ------------------ */
  const startAutoplay = () => {
    stopAutoplay();
    intervalRef.current = setInterval(nextSlide, 4000);
  };

  const stopAutoplay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [itemsPerView, totalSlides]);

  /* ------------------ RENDER ------------------ */
  return (
    <div
      className="slider"
      onMouseEnter={stopAutoplay}
      onMouseLeave={startAutoplay}
    >
      {testimonials.map((item, i) => (
        <div
          key={i}
          className="slide"
          style={{
            width: `${100 / itemsPerView}%`,
            transform: `translateX(${100 * (i - curSlide * itemsPerView)}%)`,
          }}
        >
          <div className="testimonial">
            <h5 className="header">{item.title}</h5>
            <p className="text">{item.text}</p>

            <div className="author">
              <img src={item.image} alt={item.name} />

              <div className="author-info">
                <h6>{item.name}</h6>
                <p>{item.location}</p>

                <div className="rating">
                  {[...Array(5)].map((_, j) => (
                    <span
                      key={j}
                      className={`star ${
                        j + 1 <= Math.round(item.rating) ? "filled" : ""
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Arrows (desktop only via CSS) */}
      <button className="btn left" onClick={prevSlide}>
        ←
      </button>
      <button className="btn right" onClick={nextSlide}>
        →
      </button>

      {/* Dots (mobile only via CSS) */}
      <div className="dots">
        {[...Array(totalSlides)].map((_, i) => (
          <button
            key={i}
            className={`dot ${curSlide === i ? "active" : ""}`}
            onClick={() => setCurSlide(i)}
          />
        ))}
      </div>
    </div>
  );
}