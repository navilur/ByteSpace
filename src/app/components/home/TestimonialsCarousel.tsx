"use client";

import { useEffect, useRef, useState } from "react";

import TestimonialCard from "./TestimonialCard";
import { TestimonialsData } from "@/app/constants/Testimonials";

const TestimonialsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);
  const [isDragging, setIsDragging] = useState(false);

  const carouselRef = useRef<HTMLDivElement>(null);
  const startX = useRef(0);
  const currentX = useRef(0);

  // Responsive cards
  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCards(3);
      } else if (window.innerWidth >= 768) {
        setVisibleCards(2);
      } else {
        setVisibleCards(1);
      }
    };

    updateVisibleCards();

    window.addEventListener("resize", updateVisibleCards);

    return () => {
      window.removeEventListener("resize", updateVisibleCards);
    };
  }, []);

  // Loop to the beginning/end
  useEffect(() => {
    const maxIndex = TestimonialsData.length - visibleCards;

    if (activeIndex > maxIndex) {
      setActiveIndex(0);
    }
  }, [visibleCards, activeIndex]);

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(true);

    startX.current = event.clientX;
    currentX.current = event.clientX;

    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    currentX.current = event.clientX;
  };

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    setIsDragging(false);

    const distance = startX.current - currentX.current;
    const threshold = 60;

    const maxIndex = TestimonialsData.length - visibleCards;

    if (distance > threshold) {
      setActiveIndex((current) => (current >= maxIndex ? 0 : current + 1));
    }

    if (distance < -threshold) {
      setActiveIndex((current) => (current <= 0 ? maxIndex : current - 1));
    }

    startX.current = 0;
    currentX.current = 0;

    event.currentTarget.releasePointerCapture(event.pointerId);
  };

  const handlePointerCancel = () => {
    setIsDragging(false);
    startX.current = 0;
    currentX.current = 0;
  };

  return (
    <div
      ref={carouselRef}
      className={`
        w-full
        overflow-hidden
        select-none
        ${isDragging ? "cursor-grabbing" : "cursor-grab"}
      `}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerCancel}
      onPointerLeave={handlePointerCancel}
    >
      <div
        className={`
          flex
          ${
            isDragging
              ? "transition-none"
              : "transition-transform duration-500 ease-out"
          }
        `}
        style={{
          transform: `translateX(-${activeIndex * (100 / visibleCards)}%)`,
        }}
      >
        {TestimonialsData.map((testimonial) => (
          <div
            key={testimonial.id}
            className="
              w-full
              shrink-0
              px-3
              md:w-1/2
              lg:w-1/3
            "
          >
            <TestimonialCard data={testimonial} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
