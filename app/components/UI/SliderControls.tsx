import { FaPause, FaPlay } from "react-icons/fa6";
import { Slide } from "@/app/types/data/HeroSlider";

export default function SliderControls({
  slides,
  activeSlide,
  setActiveSlide,
  isPaused,
  setIsPaused,
}: {
  slides: Slide[];
  activeSlide: number;
  setActiveSlide: (index: number) => void;
  isPaused: boolean;
  setIsPaused: (paused: boolean) => void;
}) {
  return (
    <div className="flex gap-3 items-center">
      {/* Slide indicators */}
      <div className="flex gap-3 items-center">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`h-3 rounded-full overflow-hidden bg-white/25 cursor-pointer transition-all duration-700 ease-in-out ${activeSlide === index ? (isPaused ? "w-10 md:w-3 bg-white/75" : "w-20 md:w-20") : "w-10 md:w-3"}`}
            onClick={() => setActiveSlide(index)}
          >
            {activeSlide === index && !isPaused && (
              <div className="h-full bg-white/75 animate-slide-progress" />
            )}
          </div>
        ))}
      </div>

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
