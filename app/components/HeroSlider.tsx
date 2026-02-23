"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Slide } from "../types/data/HeroSlider";
import { FaArrowRight, FaPause, FaPlay } from "react-icons/fa6";

export default function HeroSlider({
  data,
  onAccentColorChange,
}: {
  data: Slide[];
  onAccentColorChange?: (color: string) => void;
}) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Automatically change slides every 8 seconds
  useEffect(() => {
    if (isPaused) return;

    const timer = setTimeout(() => {
      setPrevSlide(activeSlide);
      setIsTransitioning(true);
      setActiveSlide((prev) => (prev + 1) % data.length);

      // Reset transition state after animation
      setTimeout(() => {
        setIsTransitioning(false);
        setPrevSlide(null);
      }, 1000);
    }, 8000);

    return () => clearTimeout(timer);
  }, [activeSlide, data.length, isPaused]);

  const handleSlideChange = (index: number) => {
    if (index !== activeSlide && !isTransitioning) {
      setPrevSlide(activeSlide);
      setIsTransitioning(true);
      setActiveSlide(index);

      setTimeout(() => {
        setIsTransitioning(false);
        setPrevSlide(null);
      }, 1000);
    }
  };

  const currentSlide = data[activeSlide];

  // Notify parent of accent color change
  useEffect(() => {
    const accentColor = currentSlide.accentColor || "#010001";
    if (onAccentColorChange) {
      onAccentColorChange(accentColor);
    }
  }, [currentSlide.accentColor, onAccentColorChange]);

  return (
    <div className="h-screen">
      <div className="h-[90%] relative overflow-hidden bg-transparent">
        {/* Top gradient overlay - darkens top of image */}
        <div
          className="px-8 pt-6 pb-18 absolute top-0 w-full z-90"
          style={{
            background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 0%, transparent 100%)`,
          }}
        />

        {/* Previous slide - sliding out to left */}
        {prevSlide !== null && isTransitioning && (
          <div className="absolute inset-0 z-20 slide-out-left">
            <Image
              src={data[prevSlide].background.src}
              alt={data[prevSlide].background.alt}
              fill
              className="object-cover object-center select-none pointer-events-none"
              style={{
                maskImage:
                  "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 90%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 90%)",
              }}
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
        )}

        {/* Current slide - sliding in from right */}
        <div
          className={`absolute inset-0 z-20 ${isTransitioning ? "slide-in-right" : ""}`}
        >
          <Image
            key={activeSlide}
            src={currentSlide.background.src}
            alt={currentSlide.background.alt}
            fill
            className="object-cover object-center select-none pointer-events-none"
            style={{
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 90%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 90%)",
            }}
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
          />
        </div>
        <div className="w-full flex justify-center">
          {/* Bottom gradient overlay - fades to transparent to show background color */}
          <div className="absolute w-full h-3/7 bottom-0 z-90 flex flex-col md:flex-row items-center md:items-end justify-end md:justify-between pb-10 px-16 gap-10 max-w-350">
            <div className="relative w-full md:w-auto">
              {/* Current text - sliding up from bottom */}
              <div
                key={`content-${activeSlide}`}
                className={isTransitioning ? "text-slide-up" : ""}
              >
                <div className="mb-4 w-full flex flex-col items-center md:items-start">
                  {currentSlide.title &&
                    (typeof currentSlide.title === "string" ? (
                      <h2 className="text-4xl font-bold mb-2">
                        {currentSlide.title}
                      </h2>
                    ) : (
                      <Image
                        src={currentSlide.title}
                        alt={`${currentSlide.subtitle} Logo`}
                        width={250}
                        height={150}
                        className="object-contain mb-2 w-32 md:w-48 h-auto select-none pointer-events-none"
                        draggable={false}
                        onContextMenu={(e) => e.preventDefault()}
                      />
                    ))}
                  <p className="text-lg">{currentSlide.subtitle}</p>
                </div>
                {/* Buttons */}
                <div className="flex gap-5 justify-center md:justify-start">
                  {currentSlide?.buttons?.primary && (
                    <button
                      style={{
                        backgroundColor: currentSlide.buttons.primary.color,
                        color: currentSlide.buttons.primary.font,
                      }}
                      className="rounded-full px-6 py-3.5 font-bold text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
                    >
                      {currentSlide?.buttons?.primary.type === "watch" && (
                        <FaPlay className="size-4" />
                      )}
                      {currentSlide.buttons.primary.label}
                    </button>
                  )}
                  {currentSlide?.buttons?.secondary && (
                    <button
                      style={{
                        color: currentSlide.buttons.secondary.color,
                        borderColor: currentSlide.buttons.secondary.color,
                      }}
                      className="rounded-full px-6 py-3.5 font-bold text-sm border-[0.5px] hover:bg-white/10 transition-colors  flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
                    >
                      {currentSlide.buttons.secondary.label}
                      <FaArrowRight className="size-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>
            <Slider
              slides={data}
              activeSlide={activeSlide}
              setActiveSlide={handleSlideChange}
              isPaused={isPaused}
              setIsPaused={setIsPaused}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Slider({
  slides,
  activeSlide,
  setActiveSlide,
  isPaused,
  setIsPaused,
}: {
  slides: any[];
  activeSlide: number;
  setActiveSlide: (index: number) => void;
  isPaused: boolean;
  setIsPaused: (paused: boolean) => void;
}) {
  return (
    <div className="flex gap-5 md:gap-3 items-center">
      {/* Slide indicators */}
      {slides.map((_, index) => (
        <div
          key={index}
          className={`h-3 rounded-full overflow-hidden bg-white/25 cursor-pointer transition-all duration-700 ease-in-out ${activeSlide === index ? (isPaused ? "w-3 bg-white/75" : "w-30 md:w-20") : "w-10 md:w-3"}`}
          onClick={() => setActiveSlide(index)}
        >
          {activeSlide === index && !isPaused && (
            <div className="h-full bg-white/75 animate-slide-progress" />
          )}
        </div>
      ))}

      {/* Play/Pause button */}
      <button
        onClick={() => setIsPaused(!isPaused)}
        className="text-white/75 hover:text-white cursor-pointer hover:bg-white/30 rounded-full p-1.5 transition-all duration-300"
        aria-label={isPaused ? "Play" : "Pause"}
      >
        {isPaused ? (
          <FaPlay className="size-4" />
        ) : (
          <FaPause className="size-4" />
        )}
      </button>
    </div>
  );
}
