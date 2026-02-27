"use client";

import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { Fancybox } from "@fancyapps/ui";
import { certificateList } from "../static/certificateList";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export default function CertificateScroller() {
  const sliderRef = useRef(null);
  const slideCountRef = useRef(0);

  /* ------------------ FANCYBOX ------------------ */
  useEffect(() => {
    Fancybox.bind(
      '.slick-slide:not(.slick-cloned) [data-fancybox="gallery"]',
      {
        Thumbs: false,
        Toolbar: { display: ["close"] },
      }
    );

    return () => {
      Fancybox.destroy();
    };
  }, []);

  /* ------------------ SLIDER SETTINGS ------------------ */
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    slidesToShow: 3, // Desktop
    slidesToScroll: 1,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 2000,
    pauseOnHover: false,

    responsive: [
      {
        breakpoint: 1023, // MD & SM
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],

    beforeChange: () => {
      const slider = sliderRef.current;

      // 🚫 Ignore resize & manual triggers
      if (!slider?.innerSlider?.state?.autoplaying) return;

      slideCountRef.current += 1;

      // ⏸ Pause after every 2 autoplay scrolls
      if (slideCountRef.current % 2 === 0) {
        slider.slickPause();

        setTimeout(() => {
          slider?.slickPlay();
        }, 5000);
      }
    },
  };

  /* ------------------ RENDER ------------------ */
  return (
    <div className="slider-container">
      <Slider ref={sliderRef} {...settings}>
        {certificateList.map((item, index) => (
          <div key={index} className="slide-item">
            <figure>
              <a
                href={item.src}
                data-fancybox="gallery"
                data-caption={item.caption}
              >
                <Image
                  src={item.src}
                  width={400}
                  height={200}
                  alt={item.caption}
                  className="certificate"
                />
              </a>
            </figure>
          </div>
        ))}
      </Slider>
    </div>
  );
}