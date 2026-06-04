"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

const slides = [
  {
    headline: "Shared code spreads across ecosystems",
    description:
      "Code fragments silently recur across open-source projects, Stack Overflow answers, internal projects, documentation, and AI-generated code",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-shared-code-fragment-gPSqG1rLPAbmwFfLFWiVFirW1ZwUam.png",
    alt: "Diagram showing a shared code fragment connected across multiple sources including GitHub, Stack Overflow, Bitbucket, GitLab, internal projects, AI-generated code, and documentation",
  },
  {
    headline: "A vulnerability is discovered in one location",
    description:
      "A security issue is detected and fixed in one repository, while identical fragments elsewhere remain disconnected and unaware.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-vulnerability-detected-rqBiK0UPbkma1TR7n6E2LwPNFNoQ7X.png",
    alt: "Diagram showing vulnerability detection in one repository with other sources showing 'Not aware - Fix not propagated'",
  },
  {
    headline: "Fix Awareness Propagates",
    description:
      "Distributed code intelligence propagates detection, remediation, and ecosystem intelligence across recurring code fragments",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-fix-propagation-5uo5i5mzmm7F8cEeRvu5WrKQ1sraNx.png",
    alt: "Diagram showing awareness propagation and fix availability across all connected repositories",
  },
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-slide every 6 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 10000);

    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <section className="w-full px-5 sm:px-6 md:px-12 lg:px-16 py-4 md:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-10 xl:gap-12">
          {/* Left side - Synchronized text content */}
          <div className="lg:flex-[0.42] flex flex-col gap-6 sm:gap-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-muted/50 w-fit">
              <span className="text-sm font-medium text-muted-foreground">
                Distributed Code Intelligence
              </span>
            </div>

            {/* Animated Headline */}
            <div className="relative min-h-[130px] sm:min-h-[110px] md:min-h-[130px] lg:min-h-[200px] xl:min-h-[180px]">
              {slides.map((slide, index) => (
                <h1
                  key={index}
                  className={`absolute top-0 left-0 right-0 text-[2rem] leading-[1.15] font-medium text-foreground sm:text-4xl sm:leading-tight md:text-5xl lg:text-[3.25rem] lg:leading-[1.15] transition-all duration-500 ${index === currentSlide
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4 pointer-events-none"
                    }`}
                >
                  {slide.headline}
                </h1>
              ))}
            </div>

            {/* Animated Description */}
            <div className="relative min-h-[80px] sm:min-h-[70px] md:min-h-[80px] lg:min-h-[120px]">
              {slides.map((slide, index) => (
                <p
                  key={index}
                  className={`absolute top-0 left-0 right-0 text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl md:leading-relaxed max-w-xl transition-all duration-500 delay-100 ${index === currentSlide
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4 pointer-events-none"
                    }`}
                >
                  {slide.description}
                </p>
              ))}
            </div>

            {/* Pagination dots */}
            <div className="flex items-center gap-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide
                    ? "w-8 bg-primary"
                    : "w-2 bg-border hover:bg-muted-foreground/50"
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right side - Carousel */}
          <div
            className="lg:flex-[0.58]"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="relative rounded-2xl border border-border/60 bg-white/90 shadow-md overflow-hidden">
              {/* Images */}
              <div className="relative">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-500 ${index === currentSlide
                      ? "opacity-100 relative"
                      : "opacity-0 absolute inset-0 pointer-events-none"
                      }`}
                  >
                    <Image
                      src={slide.image}
                      alt={slide.alt}
                      width={1200}
                      height={900}
                      className="w-full h-auto"
                      priority={index === 0}
                    />
                  </div>
                ))}
              </div>

              {/* Navigation arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 border border-border/60 shadow-sm flex items-center justify-center text-foreground hover:bg-white hover:shadow-md transition-all"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 border border-border/60 shadow-sm flex items-center justify-center text-foreground hover:bg-white hover:shadow-md transition-all"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
