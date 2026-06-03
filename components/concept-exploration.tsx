"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Fragment Detection",
    image: "https://images.unsplash.com/photo-1531537571171-a707bf2683da?w=800&h=600&fit=crop",
  },
  {
    id: 2,
    title: "Origin Tracing",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
  },
  {
    id: 3,
    title: "Vulnerability Mapping",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
  },
  {
    id: 4,
    title: "Evolution Tracking",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop",
  },
  {
    id: 5,
    title: "Ecosystem Analysis",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop",
  },
  {
    id: 6,
    title: "Integration Workflows",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop",
  },
  {
    id: 7,
    title: "Alert Configuration",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop",
  },
  {
    id: 8,
    title: "Dashboard Overview",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop",
  },
];

export function ConceptExploration() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPrevious = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, []);

  const goToNext = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  return (
    <section className="bg-muted px-8 py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-screen-2xl">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
          {/* Left content - static */}
          <div className="lg:flex-[0.8] space-y-6 flex-shrink-0">
            <h2 className="text-4xl font-medium leading-tight text-balance md:text-5xl lg:text-6xl">
              Concept Exploration
            </h2>
            <p className="max-w-lg text-lg font-medium leading-relaxed text-foreground md:text-xl">
              Illustrating how ecosystem-wide intelligence could work in practice
            </p>
          </div>

          {/* Right carousel - contained */}
          <div className="lg:flex-[1.2] relative min-w-0">
            {/* Slides container with overflow clipping */}
            <div className="relative overflow-hidden rounded-xl">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(-${currentSlide * 100}%)`,
                }}
              >
                {slides.map((slide) => (
                  <div
                    key={slide.id}
                    className="relative flex-shrink-0 w-full"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between mt-8">
              {/* Navigation buttons */}
              <div className="flex gap-3">
                <button
                  onClick={goToPrevious}
                  className="flex items-center justify-center w-12 h-12 rounded-lg border border-border bg-background hover:bg-background/80 transition-colors"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={goToNext}
                  className="flex items-center justify-center w-12 h-12 rounded-lg border border-border bg-background hover:bg-background/80 transition-colors"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Pagination dots */}
              <div className="flex gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      index === currentSlide
                        ? "bg-foreground"
                        : "bg-foreground/30"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
