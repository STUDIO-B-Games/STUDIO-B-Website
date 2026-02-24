"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Slide } from "../types/data/HeroSlider";
import { FaArrowRight, FaPlay } from "react-icons/fa6";
import { Button, SliderControls } from "./UI";

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
    <div className="h-[calc(100vh-80px)] md:h-screen">
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
          <div className="absolute w-full h-3/7 bottom-0 z-90 flex flex-col md:flex-row items-center md:items-end justify-end md:justify-between pb-10 px-16 gap-4 md:gap-10 max-w-350">
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
                <div className="flex flex-col md:flex-row gap-2 md:gap-5 justify-center md:justify-start">
                  {currentSlide?.buttons?.primary && (
                    <Button
                      color={{
                        background: currentSlide.buttons.primary.color,
                        text: currentSlide.buttons.primary.font,
                      }}
                      icon={{ icon: <FaPlay className="size-4" /> }}
                    >
                      {currentSlide.buttons.primary.label}
                    </Button>
                  )}
                  {currentSlide?.buttons?.secondary && (
                    <Button
                      type="secondary"
                      color={{ text: "#FFFFFF", background: "#FFFFFF" }}
                      icon={{
                        icon: <FaArrowRight className="size-4" />,
                        position: "right",
                        animate: true,
                      }}
                    >
                      {currentSlide.buttons.secondary.label}
                    </Button>
                  )}
                </div>
              </div>
            </div>
            <SliderControls
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
