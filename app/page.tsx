"use client";

import { useState, useEffect } from "react";
import {
  About,
  Footer,
  Games,
  Header,
  HeroSlider,
  News,
  Newsletter,
  Team,
} from "./components";
import { HeroSliderData } from "./data";

export default function Home() {
  const [backgroundColor, setBackgroundColor] = useState(
    HeroSliderData[0].accentColor || "#010001",
  );
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Change to dark background after scrolling 50vh
      setIsScrolled(window.scrollY > window.innerHeight * 0.5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAccentColorChange = (color: string) => {
    setBackgroundColor(color);
  };
  const news = [
    {
      game: "Skull and Bones",
      title: "Year 2 Anniversary Contest",
      summary:
        "Take part in the Year 2 Anniversary Contest to design a Sail Emblem",
      photo: "https://wallpaperaccess.com/full/5936108.jpg",
      tags: ["Update", "DLC"],
      publishedDate: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    },
    {
      game: "Fallout 4",
      title: "Our Best Game Yet - 10 Million Copies Sold!",
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula cursus vestibulum. Aenean non nisi sed odio convallis tincidunt. Sed at ligula eget nunc bibendum varius.",
      photo: "https://wallpaperaccess.com/full/5936108.jpg",
      tags: ["Release"],
      publishedDate: new Date(
        Date.now() - 5 * 24 * 60 * 60 * 1000,
      ).toISOString(), // 5 days ago
    },
    {
      game: "Fallout Shelter",
      title: "Fallout Shelter - 5 Year Anniversary",
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula cursus vestibulum. Aenean non nisi sed odio convallis tincidunt. Sed at ligula eget nunc bibendum varius.",
      photo: "https://wallpaperaccess.com/full/5936108.jpg",
      tags: ["Update", "Anniversary"],
      publishedDate: new Date(
        Date.now() - 21 * 24 * 60 * 60 * 1000,
      ).toISOString(), // 3 weeks ago
    },
  ];
  return (
    <div
      className="text-white transition-colors duration-1000"
      style={{ backgroundColor: isScrolled ? "#010001" : backgroundColor }}
    >
      <Header />
      <HeroSlider
        data={HeroSliderData}
        onAccentColorChange={handleAccentColorChange}
      />
      <News news={news} />
      <Games />
      <About />
      <Team />
      <Newsletter />
      <Footer />
    </div>
  );
}
